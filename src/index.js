import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import Pedido from "./Pedido.js";
import Cartao from "./Cartao.js";
import FeedBack from "./FeedBack.js";

const App = () => {
  const textoOK = 'Já chegou'
  const textoNOK = 'Ainda não chegou'
  const funcaoOK = () => alert('Agradecemos a confirmação')
  const funcaoNOK = () => alert('Verificaremos o ocorrido')
  const componenteFeedBack = 
    <FeedBack textoOK={textoOK} textoNOK={textoNOK} funcaoOK={funcaoOK} funcaoNOK={funcaoNOK}/>
        
  return (
    <div className="container border mt-2 py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-5 text-center">Seus pedidos</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-12 col-xl-4 border py-5">
          <Cartao cabecalho="22/04/2024">
            <Pedido
              icone="fa-solid fa-hard-drive fa-shake fa-3x"
              titulo="SSD"
              descricao="SSD Kingston"
            />
            {componenteFeedBack}
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-12 col-xl-4 border py-5">
          <Cartao cabecalho="24/06/2024">
            <Pedido
              icone="fa-solid fa-computer-mouse fa-beat fa-3x"
              titulo="Mouse"
              descricao="Mouse Razer Viper Mini"
            />
             {componenteFeedBack}
          </Cartao>
        </div>
        <div className="col-sm-12 col-lg-12 col-xl-4 border py-5">
          <Cartao cabecalho="15/09/2024">
            <Pedido
              icone="fa-solid fa-headset fa-fade fa-3x"
              titulo="HeadSet"
              descricao="HeadSet Logitech G Pro X 2"
            />
             {componenteFeedBack}
          </Cartao>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));
