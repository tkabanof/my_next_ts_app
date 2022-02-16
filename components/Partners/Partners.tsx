import s from "./Partners.module.scss"
import {partners} from "../../demo_state/store";
import Partner from "./Partner/Partner";


const Partners = () => {
    return (<div >
        <div className={s.ourPartners}><p>Наши партнеры</p></div>
        <div className={s.partner_type_switcher}><p>Застройщики | банки</p></div>
        <div className={s.partnersLayOut}>
            {partners.slice(0, 8).map((i) => <Partner key={i.id} image={i.image}/>)}
        </div>
    </div>)
}
export default Partners