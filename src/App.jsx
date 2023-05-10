import { useEffect, useState } from 'react';
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

const App =() => {
  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = (requestParams) => {
    // mock output
    setTimeout(() => {
      const data = {
        count: 2,
        results: [
          { name: 'fake thing 1', url: 'http://fakethings.com/1' },
          { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
      }
      setData(data);
      setRequestParams(requestParams);
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    const getData = async () => {
      if(requestParams.method && requestParams.url) {
        setLoading(true);
        const response = await axios(requestParams);
        const data = response.data;
        setData(data);
        setLoading(false);
      }
    }

    getData();
  }, [requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method ? requestParams.method.toUpperCase() : ''}</div>
      <div>URL: {requestParams.url}</div>
      
      <Form handleApiCall={callApi} />
      <div>Data: {requestParams.data}</div>
      <Results data={data} loading={loading} />
      <Footer />
    </>
  )
};

export default App;

// const App =() => {

//   let [data, setData] = useState(null);
//    let [requestParams, setRequestParams] = useState({});
 
//    const callApi = (requestParams) => {
//     setData(data);
// setRequestParams(requestParams);
//   }


//     return (
//       <>
     
//         <Header />
//         <div className='method'>Request Method: {requestParams.method}</div>
//         <div className='method'>URL: {requestParams.url}</div>
//         <Form handleApiCall={callApi} />
//         <Results data={data} />
//         <Footer />
//       </>
//     );  
//   }


// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }
