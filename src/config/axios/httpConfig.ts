import axios from 'axios';
import { toast } from 'react-toastify';

type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

interface callAPIProps {
  url: string;
  method: Method;
  data?: any;
  config?: any;
  auth?: {
    username: string;
    password: string;
  };
  responseType?: any;
}

export default async function callAPI({
  url,
  method,
  data,
  config,
  auth,
  responseType,
}: callAPIProps) {
  const response = await axios({
    url,
    method,
    data,
    headers: config,
    timeout: 20000,
    auth,
    responseType,
  }).catch((err) =>
    err.response === undefined ? toast.error('Server Error') : err.response
  );

  if (response.status > 300) {
    const res = {
      message: response.data.message,
      errors: response.data.error,
      httpStatus: response.status,
      data: {},
      error: true,
      response: response,
    };
    return res;
  }

  const res = {
    message: response.data.stat_msg,
    errors: '',
    httpStatus: response.status,
    data: response.data,
    error: false,
    response: response,
  };

  return res;
}

export const httpRequest = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
  timeout: 20000,
});
