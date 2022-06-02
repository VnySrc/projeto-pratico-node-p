import * as C from "./styled"
import {useState } from "react"
//components
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { SideBar } from "../../components/SideBar"
import {AddWindow} from "../../components/AddWindow"
import { WarningWindow } from "../../components/WarningWindow"
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
//api
import { sendBeneficiariesData } from "../../api/api"

export const MainPage = () => {
    const [searchInput, setSearchInput] = useState("")
    const [showAdd, setShowAdd] = useState(false)
    const[ beneficiariesList, setBeneficiariesList] = useState([{nome: "---------------------------------------------", idade: "---------------------", plano:"-------------------", preço:" ------"}])
    const [planInfo, setPlanInfo] = useState({})
    const [showWarning, setShowWarning] = useState(false)

    const addAction = () => {
        setShowAdd(!showAdd)
    }
    const handleSubmit = async (quantity, beneficiaries) => {
        const response = await sendBeneficiariesData(quantity, beneficiaries)
        if (response.error) {
            setShowWarning(true)
        }
        else {
            setBeneficiariesList(response.beneficiarios)
            setPlanInfo(response.planos)
            setShowAdd(!showAdd)
        }
    }
    const clean = async () => {
        setBeneficiariesList([{nome: "------------------------------------------	", idade: "--------------------", plano:"------------------", preço:"R$ -------"}])
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
                                        if (searchInput == "") {
                                            return (
                                                <tr key={index}> 
                                                <td>{beneficiary.nome}</td>
                                                <td>{beneficiary.idade}</td>
                                                <td>{beneficiary.plano}</td>
                                                <td>R$ {beneficiary.preço}.00</td>
                                                </tr> 
                                            )
                                        } 
                                        else {
                                            if (beneficiary.nome.includes(searchInput)) {
                                                return (
                                                    <tr key={index}> 
                                                    <td>{beneficiary.nome}</td>
                                                    <td>{beneficiary.idade}</td>
                                                    <td>{beneficiary.plano}</td>
                                                    <td>R$ {beneficiary.preço}.00</td>
                                                    </tr> 
                                                    )    
                                                }
                                            }    
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
                                    <span>{index+1 + " - " + item.nome}</span><br/>
                                    <span>{item.preço? `R$ ` + item.preço : ""}.00</span>
                                </C.planBeneficiary>
                            )
                        })}
                            <p><strong>Preço Total: </strong>R$ {planInfo.preço_total}.00</p>  
                    </C.planData>
                }
            </C.resultGrid>    
        </C.mainContainer>
        {showAdd &&
            <AddWindow action={addAction} fnAdd={handleSubmit}/>
        }
        {showWarning &&
            <WarningWindow closeWindow={setShowWarning(false)} message=" Ocorreu um erro, porfavor tente novamente " />
        }
        <Footer action={addAction} clean={clean}/>
    </>
    )
}