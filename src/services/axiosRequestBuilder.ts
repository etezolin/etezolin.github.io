import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class AxiosRequestBuilder {
  private instance: AxiosInstance;

  private config: AxiosRequestConfig;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    this.config = {};
    this.configureInterceptors();
  }

  /* eslint-disable no-param-reassign */
  private configureInterceptors() {
    this.instance.interceptors.request.use((config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    /* eslint-enable no-param-reassign */
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          localStorage.clear();
          if (typeof process.env.REACT_APP_LOGOUT === 'string') {
            window.location.href = process.env.REACT_APP_LOGOUT;
          } else {
            console.error('URL de logout não definida');
          }
        }
        return Promise.reject(error);
      }
    );
  }

  setMethod(method: 'get' | 'post' | 'put' | 'delete' | 'patch'): this {
    this.config.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.config.url = url;
    return this;
  }

  setBody<T>(body: T): this {
    this.config.data = body;
    return this;
  }

  setHeaders(headers: Record<string, string>): this {
    this.config.headers = { ...this.config.headers, ...headers };
    return this;
  }

  setParams<T>(params: Record<string, T>): this {
    this.config.params = params;
    return this;
  }

  setTimeout(timeout: number): this {
    this.config.timeout = timeout;
    return this;
  }

  setResponseType(
    responseType:
      | 'arraybuffer'
      | 'blob'
      | 'document'
      | 'json'
      | 'text'
      | 'stream'
  ): this {
    this.config.responseType = responseType;
    return this;
  }

  async send<T>(): Promise<AxiosResponse<T>> {
    return this.instance.request<T>(this.config);
  }
}
