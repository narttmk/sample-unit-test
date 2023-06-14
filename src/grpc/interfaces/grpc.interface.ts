import { Observable } from 'rxjs';

export interface IGrpcCachingService {
  getDevicesData(data: any): Observable<ISuccess>;
}

export interface ISuccess {
  success: boolean;
}
