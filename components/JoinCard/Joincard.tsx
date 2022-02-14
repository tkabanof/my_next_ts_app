import s from "./Joincard.module.scss"

const Joincard = () => {
    return ( <div className={s.join_vip_club}>
        <div>
            <p style={{fontSize: "1.5em"}}>Вступайте в клуб привилегий Департамента Красивой Жизни!</p>
            <p>Участники клуба получают особенные условия. А также подарки, приглашения на мероприятия и многое другое.</p>
        </div>
        <div>
            <button>Вступить в клуб</button>
        </div>
    </div>)
}
export default Joincard