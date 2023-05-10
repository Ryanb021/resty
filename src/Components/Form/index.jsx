import { useState } from 'react';
// import React from 'react';

import './Form.scss';

const Form = (props) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method,
      url,
    };
    props.handleApiCall(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span data-testid='get-span'>URL: </span>
          <input
            name='url'
            data-testid='url-input'
            type='text'
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type='submit' data-testid='submit-button'>
            GO!
          </button>
        </label>
        <label className='methods'>
          <span
            className={method === 'GET' ? 'active' : 'inactive'}
            id='get'
            onClick={() => setMethod('GET')}>
            GET
          </span>
          <span
            className={method === 'POST' ? 'active' : 'inactive'}
            id='post'
            onClick={() => setMethod('POST')}>
            POST
          </span>
          <span
            className={method === 'PUT' ? 'active' : 'inactive'}
            id='put'
            onClick={() => setMethod('PUT')}>
            PUT
          </span>
          <span
            className={method === 'PATCH' ? 'active' : 'inactive'}
            id='put'
            onClick={() => setMethod('PATCH')}>
            PATCH
          </span>
          <span
            className={method === 'DELETE' ? 'active' : 'inactive'}
            id='delete'
            onClick={() => setMethod('DELETE')}>
            DELETE
          </span>
        </label>
      </form>
    </>
  );
};

export default Form;
// const Form = props => {
//   const handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };

//     props.handleApiCall(formData);
//   };

//     return (
//       <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <span>URL: </span>
//           <input name='url' type='text' />
//           <button className="button" type ="submit">GO!</button>
//         </label>
//         <label className="methods">
//           <span id="get">GET </span>
//           <span id="post">POST </span>
//           <span id="put">PUT </span>
//           <span id="delete">DELETE </span>
//         </label>
//       </form>
//       </>
//     );
//   };
