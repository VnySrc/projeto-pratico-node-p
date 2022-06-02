import * as C from "./styled"

export const Footer = ({action}) => {
    return (
        <C.mainContainer>
            <button onClick={action}>Adicionar Cliente</button>
        </C.mainContainer>
    )
}