import s from './Card.module.scss'

type CardProps = {
    head: string,
    middle: string,
    bottom: string,
    type: number,
    image?: StaticImageData
}

const Card = (props: CardProps) => {
    let style = props.type === 1 ? s.cardGreen : s.cardYellow
    return (
        <div className={style}>
            <div className={s.card_head}>
                <p>{props.head}</p>
            </div>
            <div className={s.card_middle}>
                <p>{props.middle}</p>
            </div>
            {Array.isArray(props.bottom) ? <div className={s.card_bottom}>
                    {props.bottom.map((i) =>
                        <p key={i.id}>{i.value}</p>)}
                </div> :
                <p className={s.card_bottom}>{props.bottom}</p>}
        </div>)
}

export default Card