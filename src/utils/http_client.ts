import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const headers : Readonly<Record<string, string |
    boolean>> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

export abstract class HttpClient {
    protected readonly instance: AxiosInstance;

    public constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL
        });
    }

    protected initRequestInterceptor = () => {
        this.instance.interceptors.request.use((this.initRequestHeaders) => {
    }

    protected getTimeStamp() {
        const d = new Date();
        return d.getTime();
    }

    private initRequestHeaders(config: AxiosRequestConfig){
        config.headers = { ...config.headers, ...headers };
        return config;
    }

    request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
        return this.instance.request(config)
      }
}