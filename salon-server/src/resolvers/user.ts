import { MyContex } from 'src/types';
import { Arg, Ctx, Field, InputType, Mutation, Resolver } from 'type-graphql';
import argon2 from 'argon2';
import { User } from '../entities/User';
import * as Emailvalidator from 'email-validator';
//Treatment resolver

//type of args passing when registering
@InputType()
class LoginPassInput {
  @Field()
  email!: string;
  @Field()
  password!: string;
  @Field()
  name!: string;
  @Field()
  phone!: string;
}

@Resolver()
export class UserResolver {
  //registing user by email and password with is hased to store
  @Mutation(() => User)
  async register(
    @Arg('options') options: LoginPassInput,
    @Ctx() { em }: MyContex
  ) {
    //hasing password with argon2
    const hasedPassword = await argon2.hash(options.password);
    //email validation
    if (!Emailvalidator.validate(options.email))
      throw new Error('e-mail jest nie prawidłowy,e-mail is invalid');
    //phone number validation
    // const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    // if (!re.test(options.phone))
    //   throw new Error(
    //     'numer telefony jest nie prawidłowy,phone number is invalid'
    //   );
    const user = em.create(User, {
      email: options.email,
      password: hasedPassword,
      name: options.name,
      phone: options.phone,
    });
    //adding user to database
    await em.persistAndFlush(user);
    return user;
  }
}
