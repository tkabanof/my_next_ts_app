import s from "./JoinOurTeam.module.scss"

const JoinOurTeam = () => {
    return (<div className={s.join_form_layoult}>
        <div className={s.join_form}>
            <p>Хочешь стать частью нашей команды?</p>
            <p>Отправь свое резюме нам на почту</p>
            <label>
                <input style={{display: "none"}} type="file" accept="/*"/>
                <a className={s.addFileLabel}>Прикрепить фаил</a>
            </label>
            <input type="email" placeholder="Email" className={s.email_input}/>
            <button className={s.button}>Отправить</button>
        </div>
    </div>)
}
export default JoinOurTeam