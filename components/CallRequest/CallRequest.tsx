import s from "./CallRequset.module.scss"

type callRequestItems = {
    id: number,
    value: string
}

const callRequestItems: Array<callRequestItems> = [
    {
        id: 1,
        value: "Инвестиционную стратегию по Вашим условиям"
    },
    {
        id: 2,
        value: "Бесплатное одобрение ипотеки"
    },
    {
        id: 3,
        value: "Расчет нескольких наиболее подходящих объектов"
    },
    {
        id: 4,
        value: "Бесплатное бронирование и сопровождение сделки"
    },
    {
        id: 5,
        value: "Аналитика роста цены после сделки"
    },
    {
        id: 6,
        value: "Сервис отслеживания цены и своевременной продажи"
    },

]

const CallRequest = () => {
    return (<div className={s.get_call_card}>
        <div className={s.make_appointment}>
            <p className={s.bookFreeConsult}>Запишитесь на бесплатную консультацию по инвестициям в
                недвижимости</p>
            <button>Записаться</button>
        </div>
        <div>
            <p className={s.what_you_will_get}>Что вы получите:</p>
            {callRequestItems.map((i) => <p key={i.id}>{i.value}</p>)}
        </div>
    </div>)
}
export default CallRequest