import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type ReferralDocument = HydratedDocument<Referral>;

@Schema({
  timestamps: true,
})
export class Referral {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  referrerId: ObjectId;

  @Prop({ required: true, type: String })
  referralCode: string;

  @Prop({ required: true, default: 0 })
  referrerGold: number;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  userId: ObjectId;

  @Prop({ required: true, type: String })
  userTelegramId: string;

  @Prop({ required: true, default: 0 })
  userGold: number;

  @Prop({ type: String })
  userName: string;
}

export const ReferralSchema = SchemaFactory.createForClass(Referral);
