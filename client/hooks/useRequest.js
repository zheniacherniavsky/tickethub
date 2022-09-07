import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      const response = await axios[method](url, body);
      setErrors(null);
      return response.data;
    } catch (err) {
      setErrors(
        <div className='alert alert-danger'>
          <div className='d-flex justify-content-between'>
            <h4>Ooops...</h4>
            <button
              type='button'
              className='btn-close'
              aria-label='Close'
              onClick={() => setErrors(null)}
            ></button>
          </div>
          <ul className='my-0'>
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>,
      );
    }
  };

  return { doRequest, errors };
};
