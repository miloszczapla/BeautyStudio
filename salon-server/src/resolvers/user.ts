import { Treatment } from '../entities/Treatment';
import { MyContex } from 'src/types';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class RegisterResolver {
  @Query(() => [Treatment])
  treatments(@Ctx() { em }: MyContex): Promise<Treatment[]> {
    return em.find(Treatment, {});
  }

  @Query(() => Treatment, { nullable: true })
  treatment(
    @Arg('id') id: number,
    @Ctx() { em }: MyContex
  ): Promise<Treatment | null> {
    return em.findOne(Treatment, { id });
  }

  @Mutation(() => Treatment)
  async createTreatment(
    @Arg('title') title: string,
    @Ctx() { em }: MyContex
  ): Promise<Treatment> {
    const post = em.create(Treatment, { title });
    await em.persistAndFlush(post);
    return post;
  }

  @Mutation(() => Treatment, { nullable: true })
  async updateTreatment(
    @Arg('id') id: number,
    @Arg('title', () => String, { nullable: true }) title: string,

    @Ctx() { em }: MyContex
  ): Promise<Treatment | null> {
    const post = await em.findOne(Treatment, { id });
    if (!post) {
      return null;
    }
    if (typeof title !== 'undefined') {
      post.title = title;
      await em.persistAndFlush(post);
    }
    return post;
  }

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
