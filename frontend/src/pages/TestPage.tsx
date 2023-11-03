import { useState } from "react"
import { api } from "../services/api"

export default function TestPage() {

  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [telefone, setTelefone] = useState('');
  const [portfolio, setPortfolio] = useState('');

  const sendData = async () => {
    await api.post('/finish', {nome, email, level, linkedin, github, telefone, portfolio})
    .then((response) => response.data)
      .catch((error: { response: { data: any; }; }) => {
        console.log(error.response.data);
      });
  }
  return (
    <div>
      <h1>
        PÁGINA TESTE
      </h1>
      <section>
        <form>
          <label htmlFor="Nome">Nome</label>
          <input type="text" id="Nome" onChange={ ({ target }) => setName(target.value) } />
          <label htmlFor="Email">Email</label>
          <input type="text" id="Email" onChange={ ({ target }) => setEmail(target.value) } />
          <label htmlFor="Level">Level</label>
          <input type="text" id="Level" onChange={ ({ target }) => setLevel(target.value) } />
          <label htmlFor="Linkedin">Linkedin</label>
          <input type="text" id="Linkedin" onChange={ ({ target }) => setLinkedin(target.value) } />
          <label htmlFor="Github">Github</label>
          <input type="text" id="Github" onChange={ ({ target }) => setGithub(target.value) } />
          <label htmlFor="Telefone">Telefone</label>
          <input type="text" id="Telefone" onChange={ ({ target }) => setTelefone(target.value) } />
          <label htmlFor="Portfolio">Portfolio</label>
          <input type="text" id="Portfolio" onChange={ ({ target }) => setPortfolio(target.value) } />
        </form>
        <button type="submit" onClick={() => { console.log(nome, email, level, linkedin, github, telefone, portfolio);
         sendData()}}> Enviar candidatura</button>
      </section>
    </div>
  )
}
