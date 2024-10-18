import React, {useState} from 'react'

const LembreteEntrada = ({onAdicionar}) => {
    const[lembrete, limpaTermo] = useState('')


    const onFormSubmit = (event) => {
        event.preventDefault()
        onAdicionar(lembrete)
        limpaTermo('')
    }

    return(
        <form onSubmit={onFormSubmit} className="mb-3">
            <div className="input-group">
                <input type="text" className="form-control" value={lembrete} onChange={(e) => limpaTermo(e.target.value)}
                placeholder="Digite um novo lembrete" />
                <button className="btn btn-primary" type="submite">Adicionar</button>
            </div>

        </form>
    )
}
export default LembreteEntrada