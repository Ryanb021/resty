import React from 'react';
import JSONPretty from 'react-json-pretty';
import './Results.scss';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');


// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

const Results = (props) => {
  return (
    <section>
      {
        props.loading
          ? <p>Loading...</p>
          : <pre data-testid="json">
            {
              props.data
                ? <JSONPretty data={props.data} theme={JSONPrettyMon}></JSONPretty>
                : null
            }
          </pre>
      }

    </section>
  );
}

export default Results;
