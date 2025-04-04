import { Link } from 'react-router-dom';

const Anchor = ({ type, children, className }) => {
  const getLabel = () => {
    switch (type) {
      case 'find-password':
        return '닉네임 / 비밀번호 찾기';
      case 'signup':
        return '회원가입';
      default:
        return children;
    }
  };

  return (
    <Link
      to={
        type === 'find-password'
          ? '/find-password'
          : type === 'signup'
            ? '/signup'
            : `/${type}`
      }
      className={`font-inter text-base text-violet-600 underline underline-offset-4 dark:text-violet-400 ${type === 'signUp' ? 'font-bold tracking-tight' : ''} ${className} hover:opacity-70`}
    >
      {getLabel()}
    </Link>
  );
};

export default Anchor;

// 사용법
// <Anchor type='searchPassword'/>
// <Anchor type='signUp'/>
// 추후에 다른 앵커로 만들고 싶다면
// type에 페이지 링크 children에 텍스트 넣으면 됩니다
// ex ) <Anchor type='login' children={로그인 하기}/>
