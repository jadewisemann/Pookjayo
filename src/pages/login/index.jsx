import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import useAuthStore from '../../store/authStore';
import useToastStore from '../../store/toastStore';

import Anchor from '../../components/Anchor';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import MetaData from '../../components/MetaData';
import SubHeader from '../../components/SubHeader';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const { googleLogin, login } = useAuthStore();
  const { showToast } = useToastStore();
  const from = location.state?.from?.pathname || '/';

  // 일반 로그인
  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate(from, { replace: true }); // 원래 가려던 경로로 이동
    } catch (error) {
      handleAuthError(error);
    }
  };

  // 구글 로그인
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate(from, { replace: true });
    } catch (error) {
      handleAuthError(error);
    }
  };

  // 토스트 에러 메시지
  const handleAuthError = error => {
    if (error.message.includes('auth/popup-closed-by-user')) {
      showToast('');
    } else if (error.message.includes('auth/invalid-credential')) {
      showToast('존재하지 않는 회원 정보입니다.');
      setEmail('');
      setIsEmailValid(false);
      setPassword('');
      setIsPasswordValid(false);
    } else if (error.message.includes('auth/too-many-requests')) {
      showToast('로그인 시도가 너무 많습니다. 나중에 다시 시도해주세요.');
    } else {
      showToast('로그인에 실패했습니다.');
    }
  };

  return (
    <>
      <MetaData
        title='로그인 | 푹자요'
        description='푹자요 계정으로 로그인하세요. 로그인 후 더 많은 서비스를 이용하실 수 있습니다.'
        keywords='로그인, 계정, 회원'
        ogTitle='로그인 | 푹자요'
        ogDescription='푹자요 계정으로 로그인하세요. 로그인 후 더 많은 서비스를 이용하실 수 있습니다.'
        ogImage='/src/assets/img/bg_logo.svg'
      />

      <SubHeader hasShadow={false} zIndex={10} />

      <div className='flex h-screen flex-col px-6 pt-18 dark:bg-neutral-800'>
        <div className='mb-10 flex flex-col gap-5'>
          <h2 className='text-4xl font-bold text-violet-600'>로그인</h2>
          <p>
            지금 로그인하여 추가 할인 정보를 <br />
            받아 보세요!
          </p>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className='mb-6 flex flex-col gap-5'>
            {/* 인풋 */}
            <Input
              inputType='email'
              value={email}
              onChange={setEmail}
              onValidChange={setIsEmailValid}
            />
            <Input
              inputType='password'
              value={password}
              onChange={setPassword}
              onValidChange={setIsPasswordValid}
            />
          </div>

          {/* 앵커 */}
          <div className='mb-7 flex flex-col gap-7'>
            <Anchor type='find-password' />

            {/* 로그인 버튼 */}
            <Button
              color='prime'
              size='full'
              type='submit'
              content='로그인'
              childrenClassName='font-bold'
              disabled={!isEmailValid || !isPasswordValid}
            />
          </div>
        </form>
        {/* 구글 로그인 */}
        <div className='dark:neutral-400 border-t-1 border-neutral-300 pt-7'>
          <Button
            color='line'
            size='full'
            className='mb-7 inline-flex items-center justify-center gap-2'
            onClick={handleGoogleLogin}
          >
            <Icon name='google_colored' />
            <span className='font-bold dark:text-neutral-50'>
              Google로 로그인
            </span>
          </Button>
        </div>

        {/* 회원가입 앵커 */}
        <div className='flex justify-center gap-1'>
          아직 계정이 없으신가요?
          <Anchor type='signup' />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
