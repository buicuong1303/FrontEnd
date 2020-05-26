import axios from 'axios';
class AxiosService {
  constructor() {
    const instance = axios.create();
    this.instance = instance;
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
  }
  handleSuccess = (response) => {
    return response;
  };
  handleError = (error) => {
    if (401 === error.response.status) {
      throw new Error('Email or password incorrect');
    }
    return Promise.reject(error);
  };
  get(url) {
    return this.instance.get(url);
  }

  post(url, body, config = {}) {
    return this.instance.post(url, body, config);

  }
  put(url, body) {
    return this.instance.put(url, body);
  }
  delete(url) {
    return this.instance.delete(url);
  }
}

export default new AxiosService();
