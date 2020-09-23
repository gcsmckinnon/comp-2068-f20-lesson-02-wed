import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HelloWorld() {
  return (
    <Fragment>
      <Container>
        <Jumbotron
          className="mt-5"
          style={{
            background: '#007bff',
            color: '#fff'
          }}
        >
          <h1 className="display-1">Hello World</h1>
          <hr/>
          <p>Goodbye</p>
        </Jumbotron>
      </Container>
    </Fragment>
  );
}

ReactDOM.render(
  <HelloWorld />,
  document.querySelector('#root')
);
