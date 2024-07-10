import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId, Types } from 'mongoose';

export type GoldSourceDocument = HydratedDocument<GoldSource>;

enum Source {
  Claim = 'Claim',
  Catch = 'Catch',
  Referral = 'Referral',
  Signin = 'Signin',
  FiexdTask = 'FiexdTask',
}

@Schema({
  timestamps: true,
})
// 签到固定奖励
export class GoldSource {
  _id: ObjectId;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  userId: Types.ObjectId;

  // gold 数量
  @Prop({ required: true, default: 0 })
  gold: number;

  // 金币来源
  @Prop({ required: true, enum: [...Object.values(Source)] })
  source: string;

  @Prop({ type: mongoose.Schema.Types.Mixed, default: [] })
  gameData: any[];
}

export const GoldSourceSchema = SchemaFactory.createForClass(GoldSource);
