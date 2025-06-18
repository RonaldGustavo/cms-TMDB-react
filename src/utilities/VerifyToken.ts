import { toast } from 'react-toastify';
import { deleteCookie } from './cookiesHelper';

export const VerifyToken = (params: string) => {
  if (params === 'token tidak sesuai') {
    deleteCookie('key_token', () => {
      toast.error(`${params}`);
      setTimeout(() => {
        localStorage.clear();
        window.location.href = `/`;
      }, 2000);
    });
  }
};
