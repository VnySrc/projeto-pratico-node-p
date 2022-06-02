import * as C from "./styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faCompass, faIdCard } from "@fortawesome/free-regular-svg-icons"
import { faHouse, faPhotoFilm, faBook, faSheetPlastic, faPassport,faArrowDownLong} from "@fortawesome/free-solid-svg-icons"
export const SideBar = () => {
    return (
        <C.sideBar>
            <C.sideBarItems>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faHouse} />
                        <p>Home</p> 
                    </C.barItensContainer>
                </li>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faCompass} />
                        <p>Dashboard</p>
                    </C.barItensContainer>
                </li>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faSheetPlastic} />
                        <p>Planos</p>
                    </C.barItensContainer>
                </li>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faIdCard} />
                        <p>Perfil</p>
                    </C.barItensContainer>
                </li>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faPassport} />
                        <p>Endereço</p>
                    </C.barItensContainer>
                </li>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faBook} />
                        <p>RH</p>
                    </C.barItensContainer>
                </li>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faPhotoFilm} />
                        <p>Sobre</p>
                    </C.barItensContainer>
                </li>
                <li>
                    <C.barItensContainer>
                        <FontAwesomeIcon icon={faArrowDownLong} />
                        <p>Mais</p>
                    </C.barItensContainer>
                </li>
            </C.sideBarItems>
        </C.sideBar>
    )
}