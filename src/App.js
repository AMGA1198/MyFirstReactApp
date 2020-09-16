import React from "react";
import logo from "./logo.png";
import "./App.css";
import * as ReactBootstrap from "react-bootstrap";

function App() {
  var members = [
    { name: "Alvaro Mauricio", lastname: "Galarza Almanza", codigo: "C7474-8" },
    { name: "Dayana Stefka", lastname: "Ledezma Bohorquez", codigo: "A19083-7" },
    { name: "Morelia", lastname: "Hidalgo Caceres", codigo: "C7504-3" }
  ];

  const renderTable = (member, index) => {
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{member.name}</td>
        <td>{member.lastname}</td>
        <td>{member.codigo}</td>
      </tr>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Ingenieria Web</code>
        </p>
        <a
          className="App-link"
          rel="noopener noreferrer"
        >
          Example with Jenkins for CI / CD
        </a>
      </header>
      <body>
        <ReactBootstrap.Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Codigo</th>
            </tr>
          </thead>
          <tbody>
            {members.map(renderTable)}
          </tbody>
        </ReactBootstrap.Table>
      </body>
    </div>
  );
}

export default App;
