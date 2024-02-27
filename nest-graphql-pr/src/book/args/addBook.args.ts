import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class AddBookArgs {
  @Field((type) => Int, { nullable: true })
  id: number;

  @Field({ nullable: true })
  title: string;

  @Field((type) => Int, { nullable: true })
  price: number;
}
