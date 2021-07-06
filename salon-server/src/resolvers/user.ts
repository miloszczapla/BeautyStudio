import { MyContex } from 'src/types';
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
} from 'type-graphql';
import argon2 from 'argon2';
import { User } from '../entities/User';
import * as Emailvalidator from 'email-validator';
import { parsePhoneNumber } from 'libphonenumber-js';
//Treatment resolver

//type of args passing when registering
@InputType()
class RegisterPassInput {
  @Field()
  email!: string;
  @Field()
  password!: string;
  @Field()
  name!: string;
  @Field()
  phone!: string;
}

//type of args passing when loging
@InputType()
class LoginPassInput {
  @Field()
  login!: string;
  @Field()
  password!: string;
}

@ObjectType()
class FieldError {
  @Field()
  field!: string;

  @Field()
  message!: string;
}

//Object Type
@ObjectType()
class UserResponce {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  //registing user by email and password with is hased to store
  @Mutation(() => UserResponce)
  async register(
    @Arg('options') options: RegisterPassInput,
    @Ctx() { em }: MyContex
  ): Promise<UserResponce> {
    //Email validation
    if (!Emailvalidator.validate(options.email)) {
      return {
        errors: [
          {
            field: 'email',
            message:
              "email is invalid or doesn't exist, email jest nie poprawny albo nie istnieje",
          },
        ],
      };
    }

    //Checking if phone number exist

    if (options.phone === '') {
      return {
        errors: [
          {
            field: 'phone',
            message: "phone number doesn't exist, numer telefonu nie istnieje",
          },
        ],
      };
    }

    //Phone Number validation
    try {
      const phoneNumber = parsePhoneNumber(options.phone);
      if (phoneNumber.isValid()) {
        return {
          errors: [
            {
              field: 'phone',
              message:
                'phone number is invalid, numer telefonu jest nie poprawny',
            },
          ],
        };
      }
    } catch (error) {
      return {
        errors: [
          {
            field: 'phone',
            message:
              'phone number is invalid, numer telefonu jest nie poprawny',
          },
        ],
      };
    }

    const re = new RegExp('(?=.{8,})(?=.*[a-z])');
    if (!re.test(options.password)) {
      return {
        errors: [
          {
            field: 'password',
            message:
              'Password is too weak, password must be at least 8 characters long and contain at least 1 lowercase, hasło jest za słabe, powinno składać sięz 8 znaków i zawierać co najmniej 1 małą literę',
          },
        ],
      };
    }
    //hashing password with argon2
    const hasedPassword = await argon2.hash(options.password);
    //email validation

    // Creating User
    let user;
    //make sure that user duplicate are handled
    try {
      user = em.create(User, {
        email: options.email.toLowerCase(),
        password: hasedPassword,
        name: options.name,
        phone: options.phone,
      });
      //adding user to database
      await em.persistAndFlush(user);
    } catch (err: any) {
      //Checking if there is an user duplicate
      if (err.code === '23505' || err.detail.includes('already exists')) {
        return {
          errors: [
            {
              field: 'overall',
              message: 'user already exists, użytkownik juz istnieje',
            },
          ],
        };
      }
    }
    return { user };
  }

  @Mutation(() => UserResponce)
  async login(
    @Arg('options') options: LoginPassInput,
    @Ctx() { em }: MyContex
  ): Promise<UserResponce> {
    let user = await em.findOne(User, { email: options.login.toLowerCase() });
    if (!user) {
      user = await em.findOne(User, { phone: options.login });
    }
    //error handling: user does not find in db
    if (!user) {
      return {
        errors: [
          {
            field: 'login',
            message:
              "login is invalid or doesn't exist, login jest nie poprawny albo uzytkownik nie istnieje",
          },
        ],
      };
    }

    const validPass = await argon2.verify(user.password, options.password);
    if (!validPass) {
      return {
        errors: [
          {
            field: 'password',
            message: 'incorrect password, hasło jest nie poprawne',
          },
        ],
      };
    }
    return { user: user };
  }
}
