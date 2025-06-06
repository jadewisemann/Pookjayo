import Icon from './Icon';

const Complete = ({ type, message, description, children }) => (
  <>
    <div className='my-11 flex flex-col items-center gap-5.5 text-center dark:text-neutral-50'>
      <Icon name='check_circle' size={50}></Icon>
      <strong className='px-10 text-lg'>{message}</strong>
      <div>
        {type === 'done'
          ? description.map((item, idx) => (
              <p key={idx} className='px-10 text-sm'>
                {item}
              </p>
            ))
          : null}
      </div>
      {type === 'notYet' ? (
        <div className='mx-10 w-full'>{children}</div>
      ) : null}
    </div>
  </>
);
export default Complete;

// 사용방법

// 예약 완료
/* <Complete
    type='done'
    message='예약이 완료되었어요!'
    description={[
        '예약이 확정 되면',
        '입력하신 이메일로 바우처를 보내드립니다.',
        '(평일, 최대 12시간 내)',
    ]}
    ></Complete> */

// 예약 없음
//   <Complete type='notYet' message='아직 예약 된 숙소가 없습니다!'>
//     <button>숙소 검색하기</button>
//   </Complete>
