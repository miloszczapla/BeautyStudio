import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginPassInput = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTreatment: Treatment;
  updateTreatment?: Maybe<Treatment>;
  deleteTreatment: Scalars['Boolean'];
  register: UserResponce;
  login: UserResponce;
};


export type MutationCreateTreatmentArgs = {
  price: Scalars['Float'];
  description: Scalars['String'];
  section: Scalars['String'];
  title: Scalars['String'];
};


export type MutationUpdateTreatmentArgs = {
  price?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeleteTreatmentArgs = {
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  options: RegisterPassInput;
};


export type MutationLoginArgs = {
  options: LoginPassInput;
};

export type Query = {
  __typename?: 'Query';
  treatments: Array<Treatment>;
  treatment?: Maybe<Treatment>;
  me?: Maybe<User>;
};


export type QueryTreatmentArgs = {
  id: Scalars['Float'];
};

export type RegisterPassInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  policyAgreement: Scalars['Boolean'];
  advertisingAgreement: Scalars['Boolean'];
};

export type Treatment = {
  __typename?: 'Treatment';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
  section: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  surName: Scalars['String'];
  phone: Scalars['String'];
  smsNotification: Scalars['Boolean'];
  emailNotification: Scalars['Boolean'];
  userImage: Scalars['String'];
  policyAgreement: Scalars['Boolean'];
  advertisingAgreement: Scalars['Boolean'];
  note: Scalars['String'];
  specialistNote: Scalars['String'];
};

export type UserResponce = {
  __typename?: 'UserResponce';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type LoginMutationVariables = Exact<{
  login: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponce' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'phone' | 'email' | 'surName' | 'name'>
    )> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  policyAgreement: Scalars['Boolean'];
  advertisingAgreement: Scalars['Boolean'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponce' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'createdAt' | 'updatedAt' | 'email' | 'name' | 'surName' | 'phone' | 'smsNotification' | 'userImage'>
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'phone' | 'email' | 'name' | 'surName' | 'smsNotification' | 'emailNotification' | 'userImage' | 'note'>
  )> }
);

export type TreatmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type TreatmentsQuery = (
  { __typename?: 'Query' }
  & { treatments: Array<(
    { __typename?: 'Treatment' }
    & Pick<Treatment, 'id' | 'title' | 'section' | 'description' | 'price'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($login: String!, $password: String!) {
  login(options: {login: $login, password: $password}) {
    errors {
      field
      message
    }
    user {
      phone
      email
      surName
      name
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      login: // value for 'login'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($name: String!, $password: String!, $email: String!, $phone: String!, $policyAgreement: Boolean!, $advertisingAgreement: Boolean!) {
  register(
    options: {email: $email, password: $password, name: $name, phone: $phone, policyAgreement: $policyAgreement, advertisingAgreement: $advertisingAgreement}
  ) {
    errors {
      field
      message
    }
    user {
      id
      createdAt
      updatedAt
      email
      name
      surName
      phone
      smsNotification
      userImage
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *      phone: // value for 'phone'
 *      policyAgreement: // value for 'policyAgreement'
 *      advertisingAgreement: // value for 'advertisingAgreement'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    phone
    email
    name
    surName
    smsNotification
    emailNotification
    userImage
    note
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const TreatmentsDocument = gql`
    query Treatments {
  treatments {
    id
    title
    section
    description
    price
  }
}
    `;

/**
 * __useTreatmentsQuery__
 *
 * To run a query within a React component, call `useTreatmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTreatmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTreatmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTreatmentsQuery(baseOptions?: Apollo.QueryHookOptions<TreatmentsQuery, TreatmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TreatmentsQuery, TreatmentsQueryVariables>(TreatmentsDocument, options);
      }
export function useTreatmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TreatmentsQuery, TreatmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TreatmentsQuery, TreatmentsQueryVariables>(TreatmentsDocument, options);
        }
export type TreatmentsQueryHookResult = ReturnType<typeof useTreatmentsQuery>;
export type TreatmentsLazyQueryHookResult = ReturnType<typeof useTreatmentsLazyQuery>;
export type TreatmentsQueryResult = Apollo.QueryResult<TreatmentsQuery, TreatmentsQueryVariables>;