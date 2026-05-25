import { toast } from 'react-toastify';

export const VerifyToken = (params: string) => {
  if (params === 'token tidak sesuai') {
    localStorage.removeItem('key_token');
    toast.error(`${params}`);
    setTimeout(() => {
      window.location.href = `/`;
    }, 2000);
  }
};
