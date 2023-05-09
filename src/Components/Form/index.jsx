import { useState } from 'react';
// import React from 'react';

import './Form.scss';

const Form = (props) => {
  const[method, setMethod] = useState('');
  const[url, setUrl] = useState('');
  const[data, setData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
      data,
    };

    props.handleApiCall(formData);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        <span>URL: </span>
        <input data-testid="form-url" onChange={(e) => setUrl(e.target.value)} name='url' type='text' />
        <button data-testid="button" type="submit">GO!</button>
      </label>

      <label className="methods">
        <span data-testid="get-span" onClick={(e) => setMethod(e.target.id)}>GET</span>
        <span data-testid="post-span" onClick={(e) => setMethod(e.target.id)}>POST</span>
        <span data-testid="put-span" onClick={(e) => setMethod(e.target.id)}>PUT</span>
        <span data-testid="patch-span" onClick={(e) => setMethod(e.target.id)}>PATCH</span>
        <span data-testid="delete-span" onClick={(e) => setMethod(e.target.id)}>DELETE</span>
      </label>

      <label id="textarea">
        POST / PUT Request JSON Data:
        <textarea data-testid="form-textarea" onChange={(e)=> setData(e.target.value)} rows="5" cols="50"></textarea>
      </label>

     
    </form>
    </>
  );
}

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
