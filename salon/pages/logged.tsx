import { Form, Formik } from 'formik';
import React, { useContext, useRef, useState } from 'react';
import FormikField from '../components/FormikField';
import Wrapper from '../components/Wrapper';
import * as Yup from 'yup';
import { MeContext } from '../helpclasses/contexts';

interface InitialValues {
  name: string | undefined;
  surName: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  note: string | undefined;
  smsNotification: boolean | undefined;
  emailNotification: boolean | undefined;
  userImage: string | undefined;
}

const Logged = () => {
  const [isEditable, setIsEditable] = useState(false);
  const me = useContext(MeContext);
  console.log('logged me: ', me);

  const [initialValues, setinitialValues] = useState<InitialValues>({
    name: me?.name,
    surName: me?.surName,
    email: me?.email,
    phone: me?.surName,
    note: me?.note,
    smsNotification: me?.smsNotification,
    emailNotification: me?.emailNotification,
    userImage: me?.userImage,
  });

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setData(me.data?.me);
  //     setinitialValues({
  //       name: data?.name,
  //       surName: data?.surName,
  //       email: data?.email,
  //       phone: data?.phone,
  //       note: data?.note,
  //       smsNotification: data?.smsNotification,
  //       emailNotification: data?.emailNotification,
  //       userImage: data?.userImage,
  //     });
  //   }, 100);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [me]);
  // useEffect(async () => {
  //  const response = await me
  // }, [])
  // const router = useRouter();

  return (
    <Wrapper>
      {me && (
        <Formik
          initialValues={{
            name: me.name,
            surName: me?.surName,
            email: me?.email,
            phone: me?.surName,
            note: me?.note,
            smsNotification: me?.smsNotification,
            emailNotification: me?.emailNotification,
            userImage: me?.userImage,
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
                <FormikField
                  name='email'
                  placeholder='login@poczta.com'
                  formProps={formProps}
                />

                {isEditable ? (
                  <button
                    type='submit'
                    className='submit-btn'
                    onClick={() => setIsEditable(true)}
                    // onClick={() => console.log('wartości pól', formProps.values)}
                  >
                    edytuj
                  </button>
                ) : (
                  <button
                    type='submit'
                    className='submit-btn'
                    // onClick={() => console.log('wartości pól', formProps.values)}
                  >
                    edytuj
                  </button>
                )}
              </Form>
            );
          }}
        ></Formik>
      )}
    </Wrapper>
  );
};
export default Logged;
