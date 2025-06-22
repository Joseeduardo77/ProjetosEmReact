import Header from "./components/Header/Header"
import Cards from "./components/Cards/Cards"
import Footer from "./components/Footer/Footer"
import "./App.css"
export default function App(){
return(<>
   <Header/>
   <div id="areaCards">
<Cards title={"Formula1"} description={"A corrida de formula 1 é a mais assistida de todos os tempos, os pilotos são extremamentes profissionais e passam por muitos treinamentos pra ter uma melhor performance em corrida."}/>
<Cards title={"Props??"} description={"Esses cartões, eu adicionei Props para eu poder reutilizar ele quantas vezes eu quiser, no caso ai são 4 cartões iguais, mas somente o textos foram alterados."}/>
<Cards title={"Jailson"} description={"O melhor professor que passou pela minha vida, aprendi bastante coisa com ele, ele me ensinou a ser mais feliz, a aproveitar mais a vida, ele foi como um pai pra mim ❤️"}/>
<Cards title={"Uma simples demontração"} description={"Esse projeto, foi somente uma simples demonstração do que eu aprendi, mas o que eu realmente aprendi vai bem além disso, nunca achei que um dia eu chegaria como estou hoje! obrigado JAJA, obrigado PROA!"}/>
   </div>
   <Footer/>
</>)

}