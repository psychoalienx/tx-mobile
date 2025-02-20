
const debouncers: any = {};

export class Debouncer {

  constructor() { }

  public static debounce(config: {
    key: string,
    cb: any,
    timeout?: number,
    params?: any
  }) {
    clearTimeout(debouncers[config?.key || 'default']);
    debouncers[config?.key || 'default'] = setTimeout(((params: any) => () => config?.cb(params))(config?.params), config?.timeout || 1000);
  }

  public static unDebounce(config: {
    key: string
  }) {
    clearTimeout(debouncers[config?.key || 'default']);
  }

}
