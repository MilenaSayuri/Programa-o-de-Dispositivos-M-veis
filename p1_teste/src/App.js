import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LembreteEntrada from "./LembreteEntrada";//será responsável pela entrada de novos lembretes.
//import LembreteLista from "./LembreteLista";

const App = () => { //Este é o componente principal que gerencia o estado da aplicação.
  const [lembrados, setLembrados] = useState([]); //Inicializa o estado lembrados como um array vazio. lembrados armazenará os lembretes adicionados pelo usuário, e setLembrados é a função utilizada para atualizar esse estado.

  const adicionarLembrete = (lembrete) => { //Declara uma função chamada adicionarLembrete, que recebe um parâmetro lembrete. Essa função será responsável por adicionar novos lembretes ao estado.
    setLembrados([...lembrados, lembrete]);//Utiliza setLembrados para atualizar o estado lembrados, criando um novo array que inclui todos os lembretes antigos (usando o operador spread) e o novo lembrete, garantindo que o estado anterior não seja mutável.
  };

  return ( //retorno de JSX que sera renderizado na tela
    <div className="container"> ##cria uma div utilizando a classe container para aplicar o estilo e responsividade
      <div className="row"> ##cria uma div que representa uma linha para ajudar a organizar o conteudo
        <div className="col text-center"> ##cria uma div util para centralizar o titulo e o componente
          <h1>Lista de Lembretes</h1>
          <LembreteEntrada onAdicionar={adicionarLembrete} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group mt-3">
            {lembrados.map((item, index) => (
              <li key={index} className="list-group-item">{item}</li>
            ))}
          </ul>  
        </div>
      </div>
    </div>
  );
};

export default App;
