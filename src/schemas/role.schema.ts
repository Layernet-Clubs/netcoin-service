import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId, Types } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

enum Level {
  Bronze = 'Bronze',
  Sliver = 'Sliver',
  Gold = 'Gold',
  Platinum = 'Platinum',
  Diamond = 'Diamond',
  Legendary = 'Legendary',
  Master = 'Master',
}

@Schema({
  timestamps: true,
})
// 角色
export class Role {
  _id: Types.ObjectId;
  // 角色等级
  @Prop({ required: true, type: String, enum: [...Object.values(Level)] })
  role: string;

  // 金币门槛
  @Prop({ required: true, type: Number })
  threshold: number;

  // 小时产量
  @Prop({ required: true, type: Number })
  profitPerHour: number;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
