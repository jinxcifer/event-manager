export type HttpOptions = {
  params?: any;
  data?: any;
};

export interface IHttpClient {
  get(url: string, options?: HttpOptions): Promise<any>;
  post(url: string, options?: HttpOptions): Promise<any>;
}
