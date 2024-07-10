import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type MonsterDocument = HydratedDocument<Monster>;

enum Name {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
}

@Schema({
  timestamps: true,
})
// 怪物
export class Monster {
  // 仓鼠怪物
  @Prop({ required: true, enum: [...Object.values(Name)] })
  name: string;

  // 单只仓鼠收益
  @Prop({ required: true, type: Number })
  goldEarn: number;
}

export const MonsterSchema = SchemaFactory.createForClass(Monster);
