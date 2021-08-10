import { Treatment } from '../entities/Treatment';
import { MyContex } from 'src/types';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';

//Treatment resolver

@Resolver()
export class TreatmentResolver {
  //show all treatment in database
  @Query(() => [Treatment])
  treatments(@Ctx() { em }: MyContex): Promise<Treatment[]> {
    return em.find(Treatment, {});
  }

  //show specific treatment by id
  @Query(() => Treatment, { nullable: true })
  treatment(
    @Arg('id') id: number,
    @Ctx() { em }: MyContex
  ): Promise<Treatment | null> {
    return em.findOne(Treatment, { id });
  }

  //add treatment
  @Mutation(() => Treatment)
  async createTreatment(
    @Arg('title') title: string,
    @Arg('section') section: string,
    @Arg('description') description: string,
    @Arg('price') price: number,
    @Ctx() { em }: MyContex
  ): Promise<Treatment> {
    const post = em.create(Treatment, { title, section, description, price });
    await em.persistAndFlush(post);
    return post;
  }

  //update existing treatment
  @Mutation(() => Treatment, { nullable: true })
  async updateTreatment(
    @Arg('id') id: number,
    @Arg('title', () => String, { nullable: true }) title: string,
    @Arg('section', () => String, { nullable: true }) section: string,
    @Arg('description', () => String, { nullable: true }) description: string,
    @Arg('price', () => Number, { nullable: true }) price: number,

    @Ctx() { em }: MyContex
  ): Promise<Treatment | null> {
    const post = await em.findOne(Treatment, { id });
    //make sure treatment exist
    if (!post) {
      return null;
    }
    //make sure title is passed

    if (typeof title !== 'undefined') {
      post.title = title;
    }
    if (typeof section !== 'undefined') {
      post.section = section;
    }
    if (typeof description !== 'undefined') {
      post.description = description;
    }
    if (typeof price !== 'undefined') {
      post.price = price;
    }
    await em.persistAndFlush(post);
    return post;
  }

  //delete treatment
  @Mutation(() => Boolean)
  async deleteTreatment(
    @Arg('id') id: number,
    @Ctx() { em }: MyContex
  ): Promise<Boolean> {
    try {
      await em.nativeDelete(Treatment, { id });
      return true;
    } catch {
      return false;
    }
  }
}
