import s from "./ResultBlock.module.scss"
import {results} from "../../demo_state/store";

const ResultBlock = () => {
    return (<div className={s.resultBlock}>
        <div className={s.result_first_element}>
            <p>{results.head}</p>

        </div>
        <div className={s.result_second_element}>
            <p>{results.text}</p>
        </div>
        <div className={s.blocks}>
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