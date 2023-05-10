import { useEffect, useReducer } from 'react';
import axios from 'axios';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';

const initialState = {
  data: null,
  requestParams: {},
  history: [],
};

const requestReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'START_REQUEST':
      return {
        ...state,
        requestParams: payload,
      };
    case 'FINISH_REQUEST':
      return {
        ...state,
        data: payload,
        history: [
          ...state.history,
          { request: state.requestParams, data: payload },
        ],
      };
    case 'SHOW_HISTORY':
      return {
        ...state,
        data: payload.data,
        request: payload.request,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(requestReducer, initialState);

  const callApi = (requestParams) => {
    const action = {
      type: 'START_REQUEST',
      payload: requestParams,
    };

    dispatch(action);
  };

  const showHistory = (entry) => {
    const action = {
      type: 'SHOW_HISTORY',
      payload: entry,
    };
    dispatch(action);
  };

  useEffect(() => {
    const getData = async () => {
      if (state.requestParams.url) {
        const response = await axios({
          method: state.requestParams.method,
          url: state.requestParams.url,
        });
        const action = {
          type: 'FINISH_REQUEST',
          payload: response.data,
        };
        dispatch(action);
      }
    };
    getData();
  }, [state.requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {state.data ? (
        <History history={state.history} showHistory={showHistory} />
      ) : null}
      {/* <History history={state.history} showHistory={showHistory} /> */}
      {state.data ? 
      <Results data={state.data} /> : null}
      <Footer />
    </>
  );
};

export default App;

// const App =() => {
//   let [data, setData] = useState(null);
//   let [requestParams, setRequestParams] = useState({});
//   const [loading, setLoading] = useState(false);

//   const callApi = (requestParams) => {
//     // mock output
//     setTimeout(() => {
//       const data = {
//         count: 2,
//         results: [
//           { name: 'fake thing 1', url: 'http://fakethings.com/1' },
//           { name: 'fake thing 2', url: 'http://fakethings.com/2' },
//         ],
//       }
//       setData(data);
//       setRequestParams(requestParams);
//       setLoading(false);
//     }, 1000);
//   }

//   useEffect(() => {
//     const getData = async () => {
//       if(requestParams.method && requestParams.url) {
//         setLoading(true);
//         const response = await axios(requestParams);
//         const data = response.data;
//         setData(data);
//         setLoading(false);
//       }
//     }

//     getData();
//   }, [requestParams]);

//   return (
//     <>
//       <Header />
//       <div>Request Method: {requestParams.method ? requestParams.method.toUpperCase() : ''}</div>
//       <div>URL: {requestParams.url}</div>
      
//       <Form handleApiCall={callApi} />
//       <div>Data: {requestParams.data}</div>
//       <Results data={data} loading={loading} />
//       <Footer />
//     </>
//   )
// };

// export default App;
