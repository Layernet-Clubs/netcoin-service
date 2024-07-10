import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId, Types } from 'mongoose';
import { Equipment } from './equipment.schema';
import { Role } from './role.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class TaskList {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  taskId: Types.ObjectId;

  @Prop({ required: true, type: Boolean, default: false })
  isFinish: boolean;

  @Prop({ required: true, type: Date })
  date: Date;

  countdown?: {};
}
@Schema({
  timestamps: true,
})
// ton game 用户
export class User {
  // tg 用户id
  @Prop({ required: true, type: String })
  telegramId: string;

  // 姓
  @Prop({ required: true, type: String })
  firstName: string;

  // 名
  @Prop({ type: String })
  lastName?: string;

  // 用户语言
  @Prop({ type: String })
  languageCode?: string;

  // 用户名
  @Prop({ type: String })
  username?: string;

  // 金币
  @Prop({ required: true, default: 0 })
  gold: number;

  // 历史收益金币
  @Prop({ required: true, default: 0 })
  historicalGold: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Equipment',
  })
  equipment: Equipment;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Role',
  })
  rank: Role;

  // 被动收益，时间， 每次领取更新
  @Prop({ required: true, type: String })
  claimAt: string;

  // 是否telegram vip
  @Prop({ required: true, type: Boolean, default: false })
  isVip: boolean;

  @Prop({ required: true, type: [TaskList], default: [] })
  tasks: TaskList[];
}

export const UserSchema = SchemaFactory.createForClass(User);
