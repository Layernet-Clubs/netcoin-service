import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId, Types } from 'mongoose';

export type SigninRewardDocument = HydratedDocument<SigninReward>;

@Schema({
  timestamps: true,
})
// 签到固定奖励
export class SigninReward {
  _id: Types.ObjectId;

  @Prop({ required: true, default: 1, min: 1, max: 7 })
  day: number;

  @Prop({ required: true, default: 0 })
  rewardGold: number;
}

export const SigninRewardSchema = SchemaFactory.createForClass(SigninReward);
