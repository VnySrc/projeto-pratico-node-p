import * as C from "./styled"

export const Footer = ({action, clean}) => {
    return (
        <C.mainContainer>
            <C.buttonAdd onClick={action}>Adicionar Dados</C.buttonAdd>
            <C.buttonClear onClick={clean}> Limpar </C.buttonClear>
        </C.mainContainer>
    )
}