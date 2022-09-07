import { useState } from 'react';
import axios from 'axios';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const emailOnChangeHandler = (e) => setEmail(e.target.value);
  const passwordOnChangeHandler = (e) => setPassword(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/users/signup', {
        email,
        password,
      });

      console.log(response.data);
    } catch (err) {
      setErrors(err.response.data.errors);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className='form-group'>
        <label>Email</label>
        <input
          value={email}
          onChange={emailOnChangeHandler}
          className='form-control'
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          value={password}
          onChange={passwordOnChangeHandler}
          type='password'
          className='form-control'
        />
      </div>
      {errors.length > 0 && (
        <div className='alert alert-danger'>
          <h4>Ooops...</h4>
          <ul className='my-0'>
            {errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      )}
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default SignUpPage;
