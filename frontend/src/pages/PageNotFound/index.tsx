import { useEffect } from "react"
import { api } from "../../services/api"
import { Link } from "react-router-dom";

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
    <div>
      <h1>
        PÁGINA NÃO ENCONTRADA
      </h1>
      <section>
        <Link to='/'> Página inicial</Link>
      </section>
    </div>
  )
}
