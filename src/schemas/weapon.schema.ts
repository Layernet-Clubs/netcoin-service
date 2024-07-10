import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type WeaponDocument = HydratedDocument<Weapon>;

export enum Level {
  Base = '1',
  ironClaw = '2',
  mechanicalClaw = '3',
}

@Schema()
class SubLevel {
  _id: ObjectId;

  @Prop({ required: true, type: Number })
  level: number;

  // 抓取次数
  @Prop({ required: true, type: Number })
  grab: number;

  // 耐久度
  @Prop({ required: true, type: Number })
  durability: number;

  // 升级消耗金币, 武器子等级升级需要消耗，当子等级消耗金币 为 0，则是升级武器等级
  @Prop({ required: true, type: Number })
  subUpgradeExpend: number;

  @Prop({ required: true, type: Boolean })
  maxLevel: boolean;
}

@Schema({
  timestamps: true,
})
// 武器配置表
export class Weapon {
  _id: ObjectId;

  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: Number, unique: true })
  level: number;

  @Prop({ required: true, type: [SubLevel] })
  subLevel: SubLevel[];

  // 默认武器
  @Prop({ required: true, type: Boolean })
  default: boolean;

  // 购买武器的价格
  @Prop({ required: true, type: Number })
  price: number;
}

export const WeaponSchema = SchemaFactory.createForClass(Weapon);
