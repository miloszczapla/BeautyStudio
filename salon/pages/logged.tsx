import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import FormikField from '../components/FormikField';
import Wrapper from '../components/Wrapper';
import * as Yup from 'yup';
import { MeContext } from '../helpclasses/contexts';
import NoteField from '../components/NoteField';
import SliderField from '../components/SliderField';
import ImageDropZone from '../components/ImageDropZone';
import { useLogoutMutation } from '../generated/graphql';
import router from 'next/router';

// interface InitialValues {
//   name: string | undefined;
//   surName: string | undefined;
//   email: string | undefined;
//   phone: string | undefined;
//   note: string | undefined;
//   smsNotification: boolean | undefined;
//   emailNotification: boolean | undefined;
//   userImage: string | undefined;
// }

const Logged = () => {
  const [isEditable, setIsEditable] = useState(false);
  const me = useContext(MeContext);
  console.log('logged me: ', me);

  const [logout] = useLogoutMutation();

  // const [initialValues, setinitialValues] = useState<InitialValues>({
  //   name: me?.name,
  //   surName: me?.surName,
  //   email: me?.email,
  //   phone: me?.phone,
  //   note: me?.note,
  //   smsNotification: me?.smsNotification,
  //   emailNotification: me?.emailNotification,
  //   userImage: me?.userImage,
  // });

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <Wrapper>
      {me && (
        <Formik
          initialValues={{
            name: me.name,
            surName: me.surName,
            email: me.email,
            phone: me.phone,
            note: me.note,
            smsNotification: me.smsNotification,
            emailNotification: me.emailNotification,
            userImage: me.userImage,
          }}
          onSubmit={
            () => {}

            //  async (values, { setErrors }) => {
            //   if (!values.login.includes('@') && !values.login.startsWith('+'))
            //     values.login = '+48' + values.login;

            //   const response = await login({ variables: values });

            //   // error validation on server side
            //   if (response.data?.login.errors) {
            //     setErrors(toErrorMap(response.data.login.errors));
            //   } else if (response.data?.login.user) {
            //     //everything is ok
            //     router.push('/');
            //   }
            // }
          }
          //validation on client side
          validationSchema={Yup.object({
            login: Yup.string().required('pole wymagane'),
            password: Yup.string().required('pole wymagane'),
          })}
          render={(formProps) => {
            return (
              <Form className=' flex flex-col gap-5 text-xs'>
                <ImageDropZone isEditable={isEditable} />
                {/* {TODO: add user image section} */}
                <FormikField
                  name='name'
                  placeholder='Adam'
                  formProps={formProps}
                  isEditable={isEditable}
                />
                <FormikField
                  name='surName'
                  placeholder='Nowak'
                  formProps={formProps}
                  isEditable={isEditable}
                />
                <FormikField
                  name='email'
                  placeholder='login@poczta.com'
                  formProps={formProps}
                  isEditable={isEditable}
                />
                <NoteField
                  name='note'
                  formProps={formProps}
                  isEditable={isEditable}
                  label='Notka:'
                  placeholder='Stresuje się, nie lubie rozmaiwac podczas zabiegu...'
                />
                <div className='flex justify-center items-center text-3xl'>
                  <h2>Przypomnienie</h2>
                </div>
                <div className='flex justify-around relative'>
                  <SliderField
                    name='smsNotification'
                    isEditable={isEditable}
                    label='SMS'
                  />
                  <SliderField
                    name='emailNotification'
                    isEditable={isEditable}
                    label='email'
                  />
                </div>
                {isEditable ? (
                  <button
                    type='submit'
                    className='submit-btn'
                    onClick={() => setIsEditable(false)}
                    // onClick={() => console.log('wartości pól', formProps.values)}
                  >
                    zapisz
                  </button>
                ) : (
                  <button
                    type='button'
                    className='submit-btn'
                    onClick={() => {
                      setIsEditable(true);
                      console.log('wartości pól', formProps.values);
                    }}
                  >
                    edytuj
                  </button>
                )}

                {/* logout button */}
                <p
                  onClick={handleLogout}
                  className='text-xl text-contrast underline cursor-pointer px-3 my-3'
                >
                  Wyloguj się
                </p>
              </Form>
            );
          }}
        ></Formik>
      )}
    </Wrapper>
  );
};
export default Logged;
