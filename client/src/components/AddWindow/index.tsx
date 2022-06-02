import { useState } from "react"
import * as C from "./styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"

export const AddWindow = ({action, fnAdd}) => {
    const [quantity, setQuantity] = useState("")
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [registro, setRegistro] = useState("")
    const [beneficiaries, setBeneficiaries] = useState([{nome: "", idade: 0, registro: ""}])
    
    const addInput = (e) => {
        setBeneficiaries([...beneficiaries, {nome: "", idade: 0, registro: ""}])
    }
    const handleInputs = (e, index) => {
        switch (e.target.name) {
            case "nome":
                beneficiaries[index].nome = e.target.value
                break;
            case "idade":
                beneficiaries[index].idade = parseInt(e.target.value) 
                break;
            case "registro": 
                beneficiaries[index].registro = e.target.value
                break;
            default:
                break;
        }
            setBeneficiaries(beneficiaries)
    }

    return (
        <C.mainContainer>
            <C.title>
            <h3> Adicionar </h3><span onClick={action}>X</span>  
            </C.title>
            <C.quantityInput value={quantity} onChange={(e) => {setQuantity(e.target.value)}} type="number" min={1} placeholder="Quantidade de beneficiários"></C.quantityInput>
            <h4>Beneficiarios</h4>
           {beneficiaries.map((item, index) => {
               return (
                <C.addBeneficiary key={index}>
                <input name="nome"  onChange={(e) => {handleInputs(e, index)}} type="text" placeholder="Nome"></input>
                <input name="idade"  onChange={(e) => {handleInputs(e, index)}} type="number" placeholder="Idade"></input>
                <input name="registro" onChange={(e) => {handleInputs(e, index)}} type="text" placeholder="Registro"></input>
                </C.addBeneficiary>
               )
           })}
            <C.actionsContainer>
                <i onClick={addInput}><FontAwesomeIcon icon={faCirclePlus}/> Novo Beneficiario </i>
                <button onClick={() => {fnAdd(quantity, beneficiaries)}}>Confirmar</button>
            </C.actionsContainer>
        </C.mainContainer> 
    )
}