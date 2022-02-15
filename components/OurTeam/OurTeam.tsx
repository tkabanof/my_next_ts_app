import {members} from "../../demo_state/store";
import Member from "./Member/Member";
import s from './OurTeam.module.scss'
import JoinOurTeam from "./JoinOurTeam/JoinOurTeam";

const OurTeam = () => {
    return (<div className={s.ourTeam}>
        <div className={s.members_head}>
            <div>
                <div className={s.ourTeamHead}><p>Наша команда</p></div>
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
                                        firstName={i.name1}
                                        secondName={i.name2}
                                        phone={i.ph}
            />)}
        </div>
        <JoinOurTeam />

    </div>)
}
export default OurTeam