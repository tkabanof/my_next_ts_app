import s from "./Member.module.scss"
import Image from "next/image"

type thisProps = {
    image: StaticImageData,
    name1: string,
    name2: string,
    ph: string
}
const Member = (props: thisProps) => {
    return (<div className={s.member}>
        <Image src={props.image}/>
        <div className={s.member_info}>
            <p>{props.name1 + ' ' + props.name2}</p>
            <div className={s.greyText}><p>Брокер первичной недвижимости</p></div>
            <div className={s.greyText}
                 style={{marginTop: "43px"}}
            ><p>Телефон: {props.ph}</p></div>
        </div>
    </div>)
}
export default Member