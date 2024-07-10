import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type EquipmentDocument = HydratedDocument<Equipment>;

@Schema({
  timestamps: true,
})
// 用户当前装备武器关联
export class Equipment {
  // 用户 id
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  userId: ObjectId;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  // 武器 id
  weaponId: ObjectId;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  // 武器子等级 id
  subLevelId: ObjectId;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
