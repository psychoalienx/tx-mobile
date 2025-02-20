import { BehaviorSubject, Observable } from 'rxjs';


export interface AppShareDataServiceDef<T> {
  data: T;
  callbacks?: {
    modify?: (oldInstance: any, newInstance: any) => void,
    select?: (selected: any) => void,
    add?: (newInstance: any) => void,
    delete?: (instance: any) => void
  };
}

const defaultData = {
  data: undefined,
  callbacks: {}
};

export class DataShareService {

  static data: AppShareDataServiceDef<any>[] = [];

  private static subject = {
    type: {
      behavior: BehaviorSubject
    }
  };

  private static subjects$: BehaviorSubject<any>[] = [];

  public static subjects = {
    create: (key: any, data: any, type = DataShareService.subject.type.behavior): Observable<any> => {
      if (!DataShareService.subjects$[key]) {
        DataShareService.subjects$[key] = new type(data);
      } else {
        DataShareService.subjects$[key].next(data);
      }
      return DataShareService.subjects.get(key);
    },
    delete: (key: string) => {
      // TODO:
    },
    get: (key: any): Observable<any> => {
      if (DataShareService.subjects$[key]) {
        return DataShareService.subjects$[key].asObservable();
      } else {
        return DataShareService.subjects.create(key, {});
      }
    },
    next: (key: any, data: any): void => {
      if (DataShareService.subjects$[key]) {
        DataShareService.subjects$[key].next(data);
      }
    },
    getValue: (key: any): undefined | any => {
      // Chequear tipo de subject ya que ".value" funciona sólo para Behavior
      if (DataShareService.subjects$[key]) {
        return DataShareService.subjects$[key].value;
      } else {
        return undefined;
      }
    }
  };

  private subjects = DataShareService.subjects;
  constructor() { }

  static setData(key: any, data: AppShareDataServiceDef<any>) {
    this.data[key] = data;
  }

  static getData(key: any, keepData?: boolean) {
    const retval = this.data[key];
    if (!keepData) {
      DataShareService.setData(key, defaultData);
    }
    return retval ? retval : JSON.parse(JSON.stringify(defaultData));
  }

}
