import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from 'store/actions/Auth';
import * as Yup from 'yup';
import { IS_LOADING } from '../../../constants';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showText, setShowText] = useState<any>({});

  const { isLoading } = useSelector((state: any) => state.Master);
  const dispatch: any = useDispatch();

  const showTextPassword = (key: any) => {
    setShowText({
      ...showText,
      [key]: !showText[key],
    });
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailSchema = Yup.string().email('Invalid email format');

    try {
      dispatch({
        type: IS_LOADING,
        payload: true,
      });
      await emailSchema.validate(username);
      if (
        username.toLowerCase() === 'ronald@gmail.com' &&
        password.toLowerCase() === 'admin'
      ) {
        dispatch(loginAction(username));
      } else {
        setTimeout(() => {
          dispatch({
            type: IS_LOADING,
            payload: false,
          });
          toast.error('Email: Ronald@gmail.com, Pass: admin', {
            theme: 'colored',
          });
        }, 500);
      }
    } catch (error: any) {
      setTimeout(() => {
        dispatch({
          type: IS_LOADING,
          payload: false,
        });
        toast.error(`Error Login`, { theme: 'colored' });
      }, 500);
    }
  };

  return (
    <>
      <div
        style={{
          background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%)',
          border: '1px solid #c7d7fd',
          borderRadius: '10px',
          padding: '16px 20px',
          marginBottom: '24px',
        }}
      >
        <div className="d-flex align-items-center mb-3">
          <span
            style={{
              background: '#3b5bdb',
              borderRadius: '6px',
              padding: '3px 10px',
              fontSize: '11px',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '0.5px',
              marginRight: '8px',
            }}
          >
            DEMO
          </span>
          <span style={{ fontWeight: 600, color: '#1a1a2e', fontSize: '13px' }}>
            Demo Account
          </span>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '8px',
              padding: '8px 12px',
              border: '1px solid #dce3f9',
            }}
          >
            <div style={{ fontSize: '10px', color: '#6c757d', fontWeight: 600, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Email
            </div>
            <div style={{ fontSize: '12px', color: '#3b5bdb', fontWeight: 600 }}>
              ronald@gmail.com
            </div>
          </div>
          <div
            style={{
              background: '#fff',
              borderRadius: '8px',
              padding: '8px 12px',
              border: '1px solid #dce3f9',
            }}
          >
            <div style={{ fontSize: '10px', color: '#6c757d', fontWeight: 600, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Password
            </div>
            <div style={{ fontSize: '12px', color: '#3b5bdb', fontWeight: 600 }}>
              admin
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={login}>
        <div className="form w-100">
          <div className="fv-row mb-10">
            <label className="form-label fs-6 fw-bolder text-dark">Email</label>
            <input
              data-testid="email-input"
              placeholder="Email"
              className="form-control form-control-lg form-control-solid"
              name="email"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="fv-row mb-7">
            <div className="d-flex justify-content-between mt-n5">
              <div className="d-flex flex-stack mb-2">
                <label className="form-label fw-bolder text-dark fs-6 mb-0">
                  Password
                </label>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                data-testid="password-input"
                type={showText.password ? 'text' : 'password'}
                className="form-control form-control-lg form-control-solid"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                data-testid="icnMata-icon"
                className="input-group-text"
                style={{ border: 'none' }}
                onClick={() => showTextPassword('password')}
              >
                <FontAwesomeIcon
                  data-testid="icnMata-icon"
                  icon={showText['password'] ? faEyeSlash : faEye}
                  onClick={() => showTextPassword('password')}
                />
              </span>
            </div>
          </div>

          {/* <div data-testid="lupa-password" className="mb-5">
            <Link
              to="/auth/forgot-password"
              className="link-primary fs-6 fw-bolder"
              style={{ marginLeft: '5px' }}
            >
              Forgot Password ?
            </Link>
          </div> */}

          <div data-testid="btn-login" className="text-center">
            <button
              data-testid="btn-login"
              type="submit"
              className="btn btn-lg btn-primary w-100 mb-5"
              disabled={isLoading}
            >
              {!isLoading && <span className="indicator-label">Login</span>}
              {isLoading && (
                <span
                  className="indicator-progress"
                  style={{ display: 'block' }}
                >
                  Please wait...
                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
