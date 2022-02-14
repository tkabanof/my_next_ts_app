import s from "./Directions.module.scss"
import {directions} from "../../demo_state/quade_data";

const Directions = () => {
    return (<div className={s.main_directions}>
        <div className={s.main_directions_head}>
            <p>Основные направления</p>
            <p>Все направления и услуги</p>
        </div>
        <div className={s.main_directions_content}>
            {directions.map((i) => <div key={i.id} className={s.main_direction}>
                <div>
                    <div style={{backgroundColor: "aqua", height: "100px"}}>Картинка</div>
                    <div><p>{i.value}</p></div>
                </div>
            </div>)}
        </div>
    </div>)
}
export default Directions