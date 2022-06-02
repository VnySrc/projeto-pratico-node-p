import { useState } from "react"
import * as C from "./styled"

export const WarningWindow = ({closeWindow, message}) => {

    return (
        <C.mainContainer>
            <C.title>
            <h3>Aviso</h3>
            </C.title>
            <p>{message}</p>
           <button onClick={closeWindow}> Confirmar </button>
        </C.mainContainer>
    )
}