import s from './Card.module.scss'
import Image from 'next/image'

type CardProps = {
    head: string,
    middle: string,
    bottom: string,
    type: number,
    image?: StaticImageData
}

const Card = (props: CardProps) => {
    let style_front = props.type === 1 ? s.cardGreen : s.cardYellow
    style_front = !!props.image ? s.cardWhite : style_front
    let style_back = props.type === 1 ? s.card_background_green : s.card_background_yellow
    return (
        <div className={s.card_layout}>
            <div className={style_front}>
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
            </div>
            <div className={style_back}>
                {props.image && <Image
                    src={props.image}
                    width="300px"
                    height="300px"
                />}
            </div>

        </div>)
}

export default Card