import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId, Types } from 'mongoose';

export type UserSigninDocument = HydratedDocument<UserSignin>;

@Schema({
  timestamps: true,
})
// 签到固定奖励
export class UserSignin {
  _id: ObjectId;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, unique: true })
  userId: Types.ObjectId;

  // 当前签到周期的第几天，范围为1-7
  @Prop({ required: true, type: Number, min: 1, max: 7 })
  signinDay: number;

  // 当前签到周期编号，从1开始计数
  @Prop({ required: true, type: Number, default: 1 })
  totalCycles: number;

  // 用户总共完成了多少个完整的签到周期
  @Prop({ required: true, type: Number, default: 0 })
  currentCycle: number;

  // 最近一次签到的日期
  @Prop({ required: true, type: Date })
  lastSigninDate: Date;
}

export const UserSigninSchema = SchemaFactory.createForClass(UserSignin);
