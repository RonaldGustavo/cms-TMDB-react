import { IS_LOADING, GET_DATA_USER } from '../../constants';

export const loginAction = (userName: string) => {
  return (dispatch: any) => {
    try {
      dispatch({
        type: IS_LOADING,
        payload: true,
      });

      localStorage.setItem('key_token', 'value_token');

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
