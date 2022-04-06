function geraLista(final = 10) {
    const lista = []
    for (let i = 1; i <= final; i++) {
        lista.push(<span>{i},</span>)
    }
    return lista
}

export default function lista2() {
    return (
        <div>
            <div>
                {geraLista(20)}
                <br />
            </div>
            <div>
                <br />
                {geraLista(40)}
            </div>
        </div>
    )
}