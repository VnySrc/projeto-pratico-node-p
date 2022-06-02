import * as C from "./styled"
import {useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars} from "@fortawesome/free-solid-svg-icons"
export const Header = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("_token")
        navigate("/")
    }
    return (
        <>
        <C.body/>
            <C.mainContainer>
                <C.navItems>
                        <i><FontAwesomeIcon icon={faBars} /></i>
                        <h3>Clients Dashboard </h3>
                        <C.userActions>
                            <p onClick={logout}>Logout</p>
                        </C.userActions>
            </C.navItems>
            
        </C.mainContainer>
        </>
        
    )
}