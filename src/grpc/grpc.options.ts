import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const CachingServiceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: process.env.GRPC_CACHING_ENDPOINT || 'localhost:30001',
    package: 'caching',
    protoPath: join(__dirname, './proto/caching.proto'),
  },
};
