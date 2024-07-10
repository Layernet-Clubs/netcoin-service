import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId, Types } from 'mongoose';

export type UserSigninHistoryDocument = HydratedDocument<UserSigninHistory>;

@Schema({
  timestamps: true,
})
// 签到固定奖励
export class UserSigninHistory {
  _id: ObjectId;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  userSignId: ObjectId;

  // 当前签到周期
  @Prop({ required: true, type: Number, min: 1 })
  cycle: number;

  // 当前签到周期编号，从1开始计数
  @Prop({ required: true, type: Number, default: 1 })
  day: number;

  // 用户总共完成了多少个完整的签到周期
  @Prop({ required: true, type: Number, default: 0 })
  reward: number;
}

export const UserSigninHistorySchema =
  SchemaFactory.createForClass(UserSigninHistory);

UserSigninHistorySchema.index(
  { userSignId: 1, cycle: 1, day: 1 },
  { unique: true },
);
