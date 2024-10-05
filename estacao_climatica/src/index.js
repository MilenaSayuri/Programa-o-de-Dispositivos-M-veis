import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { EstacaoClimatica } from "./EstacaoClimatica";
import Loading from "./Loading";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>;

window.navigator.geolocation.getCurrentPosition((position) =>
  console.log(position)
);

class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null,
  };

  componentDidMount() {
    this.obterLocalizaocao();
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
  }

  ObterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear();
    const d1 = new Date(anoAtual, 5, 21);
    const d2 = new Date(anoAtual, 8, 24);
    const d3 = new Date(anoAtual, 11, 22);
    const d4 = new Date(anoAtual, 2, 21);
    const estouNoSul = latitude < 0;
    if (data >= d1 && data < d2) return estouNoSul ? "Inverno" : "Verao";
    if (data >= d2 && data < d3) return estouNoSul ? "Primavera" : "Outono";
    if (data >= d3 || data < d4) return estouNoSul ? "Verão" : "Inverno";
    return estouNoSul ? "Outono" : "Primavera";
  };

  icones = {
    Primavera: "fa-seedling",
    Verao: "fa-umbrella-beach",
    Outono: "fa-tree",
    Inverno: "fa-snowflake",
  };

  obterLocalizaocao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (posicao) => {
        let data = new Date();
        let estacao = this.ObterEstacao(data, posicao.coords.latitude);
        let icone = this.icones[estacao];
        console.log(icone);
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao,
          data: data.toLocaleTimeString(),
          icone: icone,
        });
      },
      (erro) => {
        console.log(erro);
        this.setState({ mensagemDeErro: "Tente novamente mais tarde" });
      }
    );
  };

  render() {
    console.log(this.state);
    return (
      //reponsividade, margem acima
      <div className="container mt-2">
        {/* uma linha, conteúdo centralizado, display é flex */}
        <div className="row justify-content-center">
          {/* oito colunas das doze disponíveis serão usadas para telas médias em diante */}
          <div className="col-md-8">
            {!this.state.latitude && !this.state.mensagemDeErro ? (
              <Loading mensagem="Por favor, responda à solicitação de localização" />
            ) : this.state.mensagemDeErro ? (
              <p className="border rounded p-2 fs-1 text-center">
                É preciso dar permissão para acesso à localização. Atualize a
                página e tente de novo, ajustando a configuração no seu
                navegador.
              </p>
            ) : (
              <EstacaoClimatica
                icone={this.state.icone}
                estacao={this.state.estacao}
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                obterLocalizacao={this.obterLocalizacao}
              />
            )}
            <div className="card">
              <div className="card-body">
                <div
                  className="d-flex align-items-center border rounded mb-2"
                  style={{ height: "6rem" }}
                >
                  {/* Corrigi aqui: removi as aspas duplas */}
                  <i className={`fas fa-5x ${this.state.icone}`}></i>
                  <p className="w-75 ms-3 text-center fs-1">
                    {this.state.estacao}
                  </p>
                </div>
                <div>
                  <p className="text-center">
                    {this.state.latitude
                      ? `Coordenadas: ${this.state.latitude}, ${this.state.longitude}. Data: ${this.state.data}`
                      : this.state.mensagemDeErro
                      ? `${this.state.mensagemDeErro}`
                      : `Clique no botão para saber a sua estação climática!`}
                  </p>
                </div>
                <button
                  onClick={this.obterLocalizaocao}
                  className="btn btn-outline-primary w-100 mt-2"
                >
                  Qual a minha estação?
                </button>
                <button
                  className="btn btn-outline-danger w-100 mt-2"
                  onClick={() =>
                    ReactDOM.unmountComponentAtNode(
                      document.querySelector("#root")
                    )
                  }
                >
                  Unmount
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
