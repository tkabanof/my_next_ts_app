import s from './Card.module.scss'

type thisProps = {
    a: string,
    b: string,
    c: string,
    type: 1 | 2
}

const Card = (props: thisProps) => {

    let style = props.type === 1 ? s.cardGreen : s.cardYellow

    return (<div className={style}
    >
        <p style={{paddingLeft: "5px"}}>{props.a}</p>
        <p style={{flexGrow: "5", fontSize: "30px", alignSelf: "center"}}>{props.b}</p>
        {Array.isArray(props.c) ? props.c.map((i)=><p key = {i.id} style={{paddingLeft: "5px"}}>{i.value}</p>) :
            <p style={{paddingLeft: "5px"}}>{props.c}</p>}
    </div>)
}

export default Card