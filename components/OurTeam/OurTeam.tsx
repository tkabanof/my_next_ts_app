import {members} from "../../demo_state/quade_data";
import Member from "./Member/Member";
import s from './OurTeam.module.scss'


const OurTeam = () => {
    return (<div className={s.ourTeam}>
        <div className={s.members_head}>
            <div>
                <p style={{fontSize: "20px"}}>Наша команда</p>
                <div className={s.ourTeamText}>
                    <p>Наша команда - это наша гордость. Компания представлена несколькими департаментами,
                        работающими по высочайшим стандартам</p>
                </div>
            </div>
            <div className={s.dropDown}>
                Отдел первичной недвижимости
            </div>
        </div>
        <div className={s.members}>
            {members.map((i) => <Member key={i.id}
                                        image={i.image}
                                        name1={i.name1}
                                        name2={i.name2}
                                        ph={i.ph}
            />)}
        </div>

    </div>)
}
export default OurTeam