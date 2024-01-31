import { FormProps } from "../../types";
import { TopBar } from "../TopBar";
import { Sidebar } from "../Sidebar"
import * as T from "./styles";
import { useFormContext } from "../../context/useFormContext";
// import { useNavigate } from "react-router-dom";


export const Global = ({children}: FormProps) => {
  const { state } = useFormContext();
  // const navigate = useNavigate();
  // state.name !== "" ? navigate('/page2') : alert("Preenha o seu nome completo!")

  return(
    <T.Container>
      <T.Area>
        
        <TopBar />

        <T.Steps>
          <T.Sidebar>
            <Sidebar
              title="Candidato"
              description="Nome do candidato"
              icon="profile"
              path="/"
              selected={state.currentPage === 1}
            />
            <Sidebar
              title="Nível"
              description="Nível de experiência"
              icon="nivel"
              path="/page02"
              selected={state.currentPage === 2}
            />
            <Sidebar
              title="Redes"
              description="Suas redes sociais"
              icon="redes"
              path="/page03"
              selected={state.currentPage === 3}
            />
          </T.Sidebar>
          <T.Page>
            { children }
          </T.Page>
        </T.Steps>

      </T.Area>
    </T.Container>
  )
}