import Titulo from "../../components/Titulo"

export default function usandoTitulo() {
    return (

        <div>
            <Titulo
                principal="Página de cadastro"
                secundario="Incluir, alterar, excluir coisas!"
            />
            <Titulo
                principal="Página de login"
                secundario="Informe seu login e senha!"
                pequeno={true}
            />
            <Titulo
                principal="Página de login"
                secundario="Informe seu login e senha!"
                pequeno //nao precisa passar como true, se tiver já é true, senao é branco
            />
        </div>
    )
}