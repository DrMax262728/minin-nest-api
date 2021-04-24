import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = UserPost & Document;

@Schema()
export class UserPost {
  @Prop()
  text: string;

  @Prop()
  images: string[];
}

export const PostSchema = SchemaFactory.createForClass(UserPost);
