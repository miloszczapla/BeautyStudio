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
    @Ctx() { em }: MyContex
  ): Promise<Treatment> {
    const post = em.create(Treatment, { title });
    await em.persistAndFlush(post);
    return post;
  }

  //update existing treatment
  @Mutation(() => Treatment, { nullable: true })
  async updateTreatment(
    @Arg('id') id: number,
    @Arg('title', () => String, { nullable: true }) title: string,

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
      await em.persistAndFlush(post);
    }
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
