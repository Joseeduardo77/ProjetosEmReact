import Hobbies from "./Hobbies";
export default function App(){
  const Nome = "José Eduardo Lins";
  const sobreMim = "Sou um estudante do Sistemas de Informação e do Instituto Proa, estou buscando aprimorar meus conhecimentos em Banco de Dados e no Back-End."

return(<>
<h1>{Nome}</h1>
<p>{sobreMim}</p>
<Hobbies/>
</>)

}