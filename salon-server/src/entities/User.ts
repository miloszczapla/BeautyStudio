import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';

//treament is data of all user
//User entity grapql + ORM
//Field() - field is available in graphqp
//PrimaryKey() - field is available in databas

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: 'date' })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field()
  @Property({ type: 'text', unique: true })
  email!: string;

  @Field()
  @Property({ type: 'text' })
  name!: string;

  @Field()
  @Property({ type: 'text', default: '', nullable: true })
  surName!: string;

  @Property({ type: 'text' })
  password!: string;

  //phone number to communicate in any case
  @Field()
  @Property({ type: 'string', unique: true })
  phone!: string;

  //does client want to be notificated before visit
  @Field()
  @Property({ type: 'boolean', default: true })
  smsNotification!: boolean;

  @Field()
  @Property({ type: 'boolean', default: false })
  emailNotification!: boolean;

  //keep URL to image file of the client
  @Field()
  @Property({ type: 'string', default: '', nullable: true })
  userImage!: string;
}
