
import { ClientAPIService } from '../controllers/client-api.service';
import { SystemAPIService } from '../controllers/system-api.service';
import { UserAPIService } from '../controllers/user-api.service';
import { AuthService as _auth } from './auth.service';

export class ApiService {
  public static system = new SystemAPIService(ApiService);
  public static user = new UserAPIService();
  public static client = new ClientAPIService();

  public static initialized = _auth._initialized;
}
