import s from "./ResultBlock.module.scss"
import {results} from "../../demo_state/quade_data";

const ResultBlock = () => {
    return (<div className={s.resultBlock}>
        <p style={{marginTop: "1em"}}>{results.head}</p>
        <p style={{marginTop: "1em"}}>{results.text}</p>
        <div className={s.blocks} style={{marginTop: "1em"}}>
            {results.blocks.map((i) => {
                return (<div key={i.id}>
                    <p>{i.name}</p>
                    <p>{i.value}</p>
                </div>)
            })}
        </div>
    </div>)
}
export default ResultBlock