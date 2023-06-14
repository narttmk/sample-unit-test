import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { CachingServiceOptions } from './grpc.options';
import { IGrpcCachingService } from './interfaces/grpc.interface';

@Injectable()
export class GRPCClientService implements OnModuleInit {
  @Client(CachingServiceOptions) private clientCaching: ClientGrpc;
  public grpcCachingService: IGrpcCachingService;

  async onModuleInit() {
    this.grpcCachingService =
      this.clientCaching.getService<IGrpcCachingService>('CachingService');
  }

  public async getDevicesData(data: any) {
    try {
      const checkSuccess = await this.grpcCachingService
        .getDevicesData({ data })
        .toPromise();
      return checkSuccess;
    } catch (error) {
      console.log(
        `ERROR: Function getDevicesData send data to caching service`,
        JSON.stringify(error),
      );
      return null;
    }
  }
}
