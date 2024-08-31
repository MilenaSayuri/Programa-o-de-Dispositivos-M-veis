import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            estacao: null,
            data: null,
            icone: null
        }
    }
    ObterEstacao = (data, latitude) => {
        const anoAtual = data.getFullYear()
        const d1 = new Date(anoAtual, 5, 21)
        const d2 = new Date(anoAtual, 8, 24)
        const d3 = new Date(anoAtual, 11, 22)
        const d4 = new Date(anoAtual, 2, 21)
        const estouNoSul = latitude < 0
        if(data >= d1 && data < d2)
            return estouNoSul ? 'Inverno' : 'Verao'
        if(data >= d2 && data < d3)
            return estouNoSul ? 'Primavera' : 'Outono'
        if (data >= d3 || data < d4)
            return estouNoSul ? 'Verão' : 'Inverno'
          return estouNoSul ? 'Outono' : 'Primavera'
    }
    render(){
        return (
            <div>App</div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)

export default App