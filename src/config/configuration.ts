import { ConnectOptions } from 'mongoose';

export interface Configuration {
  port: number;
  mongodb: {
    uri: string;
    opts: ConnectOptions;
  };
}

export default () =>
  ({
    port: parseInt(process.env.PORT, 10) || 3000,
    mongodb: {
      uri: process.env.MONGO_URI,
      opts: {
        directConnection: true,
        serverSelectionTimeoutMS: 2000,
        authSource: 'admin',
      },
    },
  }) as Configuration;
