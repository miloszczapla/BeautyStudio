interface Props {
  title: string;
  price: number;
  setModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Label = ({ title, price, setModal }: Props) => {
  return (
    <div
      className='text-primarymain cursor-pointer p-2 text-xl '
      onClick={() => (setModal ? setModal(true) : '')}
    >
      <div className='capitalize flex justify-between'>
        <h1>{title}</h1>
        <div className='flex justify-between w-20'>
          <p>-</p>
          <p>{price + 'zł'}</p>
        </div>
      </div>
      <div className='service-line w-full  bg-black '></div>
    </div>
  );
};
