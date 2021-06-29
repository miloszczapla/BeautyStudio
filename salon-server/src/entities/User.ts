import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';

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
  @Property({ type: 'text' })
  surName!: string;

  @Property({ type: 'text' })
  password!: string;

  @Field()
  @Property({ type: 'text', unique: true })
  phone!: string;

  @Field()
  @Property({ type: 'boolean' })
  smsNotification!: boolean;

  @Field()
  @Property({ type: 'boolean' })
  emailNotification!: boolean;

  @Field()
  @Property({ type: 'bytea', unique: true })
  userImage!: bytea;
}
