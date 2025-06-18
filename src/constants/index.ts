import { getCookie } from "utilities/cookiesHelper";

//<-- CONFIG -->
export const IS_LOADING = 'IS_LOADING';
export const IS_LOADING_ROW = 'IS_LOADING_ROW';
export const IS_OPEN = 'IS_OPEN';
export const DOWNLOAD_FILE_ERROR = 'DOWNLOAD_FILE_ERROR';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const GET_BRAND_ID = 'GET_BRAND_ID';

//<-- MODAL -->
export const MODAL_CREATE = 'MODAL_CREATE';
export const MODAL_UPDATE = 'MODAL_UPDATE';
export const MODAL_UPLOAD = 'MODAL_UPLOAD';
export const MODAL_PUSHER = 'MODAL_PUSHER';

////<-- AUTH -->
export const GET_DATA_USER = 'GET_DATA_USER';



export const token = getCookie('key_token')