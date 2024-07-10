import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Referral, ReferralSchema } from 'src/schemas/referral.schema';
import { Task, TaskSchema } from 'src/schemas/task.schema';
import { GoldSource, GoldSourceSchema } from 'src/schemas/gold.schema';
import { Equipment, EquipmentSchema } from 'src/schemas/equipment.schema';
import { Weapon, WeaponSchema } from 'src/schemas/weapon.schema';
import { Role, RoleSchema } from 'src/schemas/role.schema';
import { Monster, MonsterSchema } from 'src/schemas/monster.schame';
import { User, UserSchema } from 'src/schemas/user.schema';
import {
  SigninReward,
  SigninRewardSchema,
} from 'src/schemas/signin_reward.schema';
import configuration, { Configuration } from './config/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get('mongodb.uri', { infer: true }),
          ...configService.get('mongodb.opts', { infer: true }),
        };
      },
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: Equipment.name, schema: EquipmentSchema },
    ]),
    MongooseModule.forFeature([{ name: Weapon.name, schema: WeaponSchema }]),
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
    MongooseModule.forFeature([{ name: Monster.name, schema: MonsterSchema }]),
    MongooseModule.forFeature([
      { name: SigninReward.name, schema: SigninRewardSchema },
    ]),
    MongooseModule.forFeature([
      { name: Referral.name, schema: ReferralSchema },
    ]),
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    MongooseModule.forFeature([
      { name: GoldSource.name, schema: GoldSourceSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
