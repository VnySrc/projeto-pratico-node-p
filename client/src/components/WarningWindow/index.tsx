import { useState } from "react"
import * as C from "./styled"

export const DeleteWindow = ({fnDelete, fnConfirmDelete}) => {

    const handleDelete = () => {
        fnConfirmDelete()
    }

    return (
        <C.mainContainer>
            <C.title>
            <h3> Deletar </h3><span onClick={fnDelete}>X</span>
            </C.title>
            <p>Confirmar exclusão do usuario?</p>
           <button onClick={handleDelete}> Confirmar </button>
        </C.mainContainer>
    )
}