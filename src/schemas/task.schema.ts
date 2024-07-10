import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

export enum Type {
  Twitter = 'Twitter',
  Discord = 'Discord',
  Telegram = 'Telegram',
}

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({
    type: Number,
    required: true,
    unique: true,
  })
  index: number;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  title: string;

  @Prop({
    type: Number,
    required: true,
  })
  gold: number;

  @Prop({
    type: String,
    required: true,
    enum: [...Object.values(Type)],
  })
  type: string;

  @Prop({
    type: String,
  })
  link?: string;

  user: object;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
