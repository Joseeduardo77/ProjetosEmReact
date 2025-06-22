
import "./Cards.css"
export default function Cards({title,description}){

    return(<>
    <div id="main_cards">
       <h1>{title}</h1>
       <p>{description}</p>
    </div>
    </>)
}