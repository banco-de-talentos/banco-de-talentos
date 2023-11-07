import { useEffect } from "react"
import { api } from "../../services/api"
import * as N from "./styles";

export default function PageNotFound() {

  useEffect(() => {
    const fetchData = async () => {
      await api.get('/404_not_found').then((response) => {
        // Se for ok
        return response.data;
      })
        .catch(error => {
          // Se tiver erro (status 404 - Not Found)
          return error.response.data;
        });
    }
    fetchData();
  })
  return (
    <N.Container>
      <div>
        <h1>404</h1>
        <h2>
          PÁGINA NÃO ENCONTRADA
        </h2>
      </div>
      <N.Button>
        <N.LinkButton to='/'>Página inicial</N.LinkButton>
      </N.Button>
    </N.Container>
  )
}
