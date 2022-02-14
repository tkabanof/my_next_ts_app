import s from "./CallRequset.module.scss"

const CallRequest = () => {
    return (<div className={s.get_call_card}>
        <div style={{width: "60%"}}>
            <p style={{fontSize: "1.8em"}}>Запишитесь на бесплатную консультацию по инвестициям в
                недвижимости</p>
            <button>Записаться</button>
        </div>
        <div>
            <p style={{fontWeight: "bold"}}>Что вы получите:</p>
            <p>Инвестиционную стратегию по Вашим условиям</p>
            <p>Бесплатное одобрение ипотеки</p>
            <p>Расчет нескольких наиболее подходящих объектов</p>
            <p>Бесплатное бронирование и сопровождение сделки</p>
            <p>Аналитика роста цены после сделки</p>
            <p>Сервис отслеживания цены и своевременной продажи</p>
        </div>
    </div>)
}
export default CallRequest