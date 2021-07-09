import { useState } from 'react';
import { Payload } from '../helpclasses/interfaces';
import { Label } from './Label';
import Modal from './Modal';

const Service = ({ description, price, title }: Payload) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Label {...{ title, price, setModal }} />
      {modal ? (
        <Modal setModal={setModal} payload={{ description, price, title }} />
      ) : (
        ''
      )}
    </>
  );
};

export default Service;
