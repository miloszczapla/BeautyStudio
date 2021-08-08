import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { icons } from '../helpclasses/getImageByKey';

interface Props {
  isEditable: boolean;
}

function ImageDropZone({ isEditable }: Props) {
  const [isLocal, setIsLocal] = useState(true);
  const [profilImage, setProfilImage] = useState('../assets/PROFIL.svg');
  const acceptedFiles = '.jpg,.jpeg,.png,.gif';

  const onDrop = useCallback(async (acceptedFiles) => {
    const imageFile = acceptedFiles[0];
    const blob = new Blob([imageFile], { type: 'image/jpg' });

    console.log('blob', blob);

    const imageUrl = URL.createObjectURL(imageFile);

    // console.log('blob img', imageUrl);

    // const importFile = await import(imageUrl);

    // console.log(importFile);
    setIsLocal(false);
    setProfilImage(imageUrl);

    // Do something with the files
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    disabled: !isEditable,
    accept: acceptedFiles,
  });

  // console.log('url to image ', profilImage);
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isLocal ? (
        <Image src={icons.profilImg} alt='Zdjęcie profilowe' />
      ) : (
        <img src={profilImage} alt='Zdjęcie profilowe' className='w-20 h-20' />
      )}
    </div>
  );
}

export default ImageDropZone;
