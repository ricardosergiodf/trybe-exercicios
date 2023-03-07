import React from "react";

class About extends React.Component {
    render() {
      return (
        <div>
          <h1>
            {'Ricardo Sérgio Duarte Filho'}
          </h1>
          <p>
            {'23 anos, aluno da Trybe'}
          </p>
          <h2>Minhas Habilidades</h2>
          <ul>
            <li>{'HTML'}</li>
            <li>{'Javascript'}</li>
            <li>{'Testes Unitários'}</li>
            <li>{'Introdução ao React'}</li>
          </ul>
        </div>
      );
    }
  }
  
  export default About;