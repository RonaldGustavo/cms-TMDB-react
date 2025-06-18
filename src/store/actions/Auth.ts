import { IS_LOADING, GET_DATA_USER } from '../../constants';
import { setCookie } from 'utilities/cookiesHelper';

export const loginAction = (userName: string) => {
  return (dispatch: any) => {
    try {
      dispatch({
        type: IS_LOADING,
        payload: true,
      });

      setCookie(
        'key_token',
        'value_token',
        3000
      );

      dispatch({
        type: GET_DATA_USER,
        payload: {
          dataUser: {
            user_name: userName,
          },
        }
      })

      setTimeout(() => {
        dispatch({
          type: IS_LOADING,
          payload: false,
        });

        window.location.href = '/popularmovie';
      }, 1000);
    } catch (error: any) {
      throw error;
    }
  };
};
