import * as C from "./styled"
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
//components
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { SideBar } from "../../components/SideBar"
import {AddWindow} from "../../components/AddWindow"
//font wasome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
//api
import { sendBeneficiariesData, getPropose } from "../../api/api"

export const MainPage = () => {
    const [searchInput, setSeachInput] = useState("")
    const [showAdd, setShowAdd] = useState(false)
    const[ beneficiariesList, setBeneficiariesList] = useState([{nome: "--------------------------------------------------", idade: "---------------------", plano:"-------------------", preço:" ------"}])
    const [planInfo, setPlanInfo] = useState({})

    const addAction = () => {
        setShowAdd(!showAdd)
    }
    const handleSubmit = async (quantity, beneficiaries) => {
        const response = await sendBeneficiariesData(quantity, beneficiaries)
        if (response.error) {
            alert (response.error)
        }
        else {
            setBeneficiariesList(response.beneficiarios)
            setPlanInfo(response.planos)
        }
    }
    const clean = async () => {
        setBeneficiariesList([{nome: "--------------------------------------------------", idade: "---------------------", plano:"-------------------", preço:" ------"}])
        setPlanInfo({})
    }
    return (
        <>
        <Header/>
        <SideBar />
        <C.mainContainer>
            <C.searchArea>
            <C.title>Informações - Plano</C.title>
            <input onChange={(e) => {setSearchInput(e.target.value)}} value={searchInput} type="text" placeholder="Pesquisar nome..."/>
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </C.searchArea>
                <C.resultGrid>
                    <C.clientesHeader>
                        <h3>Beneficiários</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Plano</th>
                                <th>Preço</th>
                            </tr>
                            </thead>
                            <tbody>  
                                        {beneficiariesList.map((beneficiary, index) => {
                                            try {
                                                return (
                                                    <tr key={index}> 
                                                    <td>{beneficiary.nome}</td>
                                                    <td>{beneficiary.idade}</td>
                                                    <td>{beneficiary.plano}</td>
                                                    <td>R$ {beneficiary.preço}</td>
                                                    </tr> 
                                                )
                                               }
                                            catch {
                                                return (
                                                    <tr key={index}>
                                                    <td>--------------------------------------------------</td>
                                                    <td>---------------------</td>
                                                    <td>---------------------</td>
                                                    <td>R$ ---------------------</td>
                                                    </tr> 
                                                )
                                            }
                                        })
                                    }
                                
                            </tbody>
                        </table>      
                    </C.clientesHeader>
                    {planInfo && 
                    <C.planData>
                        <h3>Plano</h3>
                        <h4>{planInfo.plano? planInfo.plano : "Aguardadndo dados..."}</h4>
                        {beneficiariesList.map((item, index) => {
                            return (
                                <C.planBeneficiary key={index}>
                                    <span>{item.nome}</span><br/>
                                    <span>{item.preço? `R$:` + item.preço : ""}</span>
                                </C.planBeneficiary>
                            )
                        })}
                            <p><strong>Preço Total: </strong>R$: {planInfo.preço_total}</p>
                            <button onClick={clean}> Limpar </button>
                    </C.planData>
                    }
                </C.resultGrid>            
        </C.mainContainer>
        {showAdd &&
        <AddWindow action={addAction} fnAdd={handleSubmit}/>
        }
        <Footer action={addAction} />
    </>
    )
}