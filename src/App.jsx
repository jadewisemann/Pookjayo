import { Routes, Route, useLocation } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import {
  DetailsPage,
  CheckoutPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  PaymentPage,
  SignupPage,
  UserInfoPage,
  WishlistPage,
  OrderConfirm,
  ReservationDetailPage,
  TestPage,
  SearchResultPage,
  MyPage,
  FindPasswordPage,
} from './pages';
// @ test page
import LoginTestPage from './pages/@test/LoginTestPage';
import ModalTestPage from './pages/@test/ModalTestPage';
import ReservationTestPage from './pages/@test/ReservationTestPage';
import SearchTestPage from './pages/@test/SearchTestPage';
import UserTestPage from './pages/@test/UserTestPage';

import ModalProvider from './components/modal/ModalProvider';
import ToastProvider from './components/ToastProvider';

// CSS
import './App.css';
import 'swiper/css';
import 'swiper/css/pagination';

import TopButton from './components/TopButton';

const App = () => {
  const location = useLocation();

  // 페이지별로 bottom 값 설정
  const bottomValue = () => {
    if (location.pathname.startsWith('/details/')) return 16;
    if (location.pathname.startsWith('/checkout/')) return 144;
    if (location.pathname.startsWith('/reservation-detail/')) return 108;
  };

  return (
    <>
      <ModalProvider />
      <ToastProvider />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/details/:hotelId' element={<DetailsPage />} />

        <Route path='/order-confirm' element={<OrderConfirm />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/user-info' element={<UserInfoPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route
          path='/reservation-detail/:roomId/:reservationId'
          element={<ReservationDetailPage />}
        />
        <Route path='/test' element={<TestPage />} />
        <Route path='/search-result' element={<SearchResultPage />} />

        {/* 로그인이 되어 있으면 접근 방지할 페이지*/}
        <Route element={<PublicRoute />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/find-password' element={<FindPasswordPage />} />
        </Route>

        {/* 로그인 해야만 접근 가능한 페이지를 위치시킬 곳 */}
        <Route element={<PrivateRoute />}>
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/checkout/:roomId' element={<CheckoutPage />} />
        </Route>

        {/* test pages */}
        <Route path='/test/search' element={<SearchTestPage />} />
        <Route path='/test/modal' element={<ModalTestPage />} />
        <Route path='/test/login' element={<LoginTestPage />} />
        <Route path='/test/reservation' element={<ReservationTestPage />} />
        <Route path='/test/user' element={<UserTestPage />} />

        {/* 404 */}
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      <TopButton bottom={bottomValue()} />
    </>
  );
};

export default App;
