import s from "./Joincard.module.scss"

const Joincard = () => {
    return (<div className={s.join_vip_club}>
        <div className={s.join_vip_club_inner}>
            <div className={s.head_text}>
                <p>Вступайте в клуб привилегий Департамента Красивой Жизни!</p>
            </div>
            <p>Участники клуба получают особенные условия. А также подарки, приглашения на мероприятия и многое
                другое.</p>
        </div>
        <div className={s.button_space}>
            <button className={s.button}>Вступить в клуб</button>
        </div>
    </div>)
}
export default Joincard