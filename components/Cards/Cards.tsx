import s from "./Cards.module.scss"
import {cards} from "../../demo_state/store";
import Card from "./Card/Card";
const Cards = () => {
    return (<div>
        <div className={s.cards}>
            {cards.map((i) => {
                return <Card key={i.key} head={i.a} middle={i.b} bottom={i.c} type={i.type} image = {i.backGroundImage}/>
            })}
        </div>
        <div className={s.add_else}>
            <button className={s.buttonAdd}>Загрузить еще</button>
        </div>
    </div>)
}
export default Cards