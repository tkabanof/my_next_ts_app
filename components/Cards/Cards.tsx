import s from "./Cards.module.scss"
import {cards} from "../../demo_state/quade_data";
import Card from "./Card/Card";

const Cards = () => {
    return (<div>
        <div className={s.cards}>
            {cards.map((i) => {
                return <Card key={i.key} a={i.a} b={i.b} c={i.c} type={i.type} image = {i.backGroundImage}/>
            })}
        </div>
        <div style={{display: "flex", justifyContent: "Center", marginTop: "2em"}}>
            <button className={s.buttonAdd}>Загрузить еще</button>
        </div>
    </div>)
}
export default Cards