import { useState } from 'react';
import axios from 'axios';
import useRequest from '../../hooks/useRequest';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password,
    },
  });

  const emailOnChangeHandler = (e) => setEmail(e.target.value);
  const passwordOnChangeHandler = (e) => setPassword(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();

    doRequest();
  };

  return (
    <div className='container my-4'>
      <form onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            id='email'
            name='email'
            value={email}
            onChange={emailOnChangeHandler}
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            id='password'
            name='password'
            value={password}
            onChange={passwordOnChangeHandler}
            type='password'
            className='form-control'
          />
        </div>
        {errors}
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
