import s from "./Partners.module.scss"
import {partners} from "../../demo_state/store";
import Partner from "./Partner/Partner";

const Partners = () => {
    return (<div>
        {partners.map((i) => <Partner key = {i.id} image = {i.image}/>)}
    </div>)
}
export default Partners