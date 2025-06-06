import { BsFillDoorOpenFill } from 'react-icons/bs';
import { CiLock, CiCalendar, CiSearch } from 'react-icons/ci';
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaMinus,
  FaPlus,
  FaRegUser,
  FaArrowRight,
  FaSwimmingPool,
  FaSmoking,
  FaCheck,
} from 'react-icons/fa';
import {
  FaChildReaching,
  FaBanSmoking,
  FaCircleCheck,
  FaPlus as FaPlusFa6,
  FaMinus as FaMinusFa6,
  FaArrowLeftLong,
  FaArrowLeft,
} from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import {
  IoIosWifi,
  IoIosFitness,
  IoIosArrowDown,
  IoIosArrowUp,
} from 'react-icons/io';
import {
  IoClose,
  IoShareSocialOutline,
  IoBedSharp,
  IoLocationSharp,
} from 'react-icons/io5';
import { LuArrowDownUp } from 'react-icons/lu';
import {
  MdOutlinePerson,
  MdAlternateEmail,
  MdOutlineDining,
  MdPerson,
} from 'react-icons/md';
import { MdPhoneIphone } from 'react-icons/md';
import { PiHouse } from 'react-icons/pi';
import { VscBlank, VscEye, VscEyeClosed } from 'react-icons/vsc';
const Icon = ({
  name,
  size = 24,
  color = '',
  className = '',
  strokeWidth = 1,
}) => {
  const icons = {
    // common
    home: PiHouse,
    search: CiSearch,
    email: MdAlternateEmail,
    lock: CiLock,
    profile: MdOutlinePerson,
    user: FaRegUser,
    close: IoClose,
    sort: LuArrowDownUp,
    arrow_down: IoIosArrowDown,
    phone: MdPhoneIphone,
    eye: VscEye,
    eye_close: VscEyeClosed,
    // calendar
    calendar: CiCalendar,
    arrow_right: FaArrowRight,
    // heart
    heart: FaRegHeart,
    heart_fill: FaHeart,
    // star
    star: FaRegStar,
    star_half: FaStarHalfAlt,
    star_fill: FaStar,
    // counter
    minus: FaMinus,
    plus: FaPlus,
    minus_thin: FaMinusFa6,
    plus_thin: FaPlusFa6,
    // detail
    share: IoShareSocialOutline,
    wifi: IoIosWifi,
    fitness: IoIosFitness,
    dining: MdOutlineDining,
    swimmingPool: FaSwimmingPool,
    door: BsFillDoorOpenFill,
    person: MdPerson,
    children: FaChildReaching,
    bed: IoBedSharp,
    smoke: FaSmoking,
    smoke_non: FaBanSmoking,
    location: IoLocationSharp,
    check: FaCheck,
    check_circle: FaCircleCheck,
    // sub-header
    arrow_left: FaArrowLeft,
    arrow_left_long: FaArrowLeftLong,
    blank: VscBlank,
    // button
    google_colored: FcGoogle,
    // top button
    arrow_up: IoIosArrowUp,
  };

  const IconName = icons[name];

  return (
    <IconName
      color={color}
      className={`${className ? className : 'text-violet-600'}`}
      size={size}
      style={{ strokeWidth: strokeWidth }}
    />
  );
};

export default Icon;

// 사용법

// default
// 기본 컬러 : violet-600, 기본 사이즈 : 24
// ex) <Icon name="profile"/>

// color 변경 시
// color 속성 추가
// ex) <Icon name="profile" color="red"/>

// tailwind 제공 컬러로 변경 시
// ex) <Icon name="profile" className="text-red-500"/>

// size 변경 시
// size 속성 추가
// ex) <Icon name="profile" size={18}/>

// tailwind css 추가 시
// ex) <Icon name="profile" color="red" size={24} className='bg-red-100'/>
