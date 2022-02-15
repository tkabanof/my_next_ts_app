import s from "./Member.module.scss"
import Image from "next/image"

type thisProps = {
    image: StaticImageData,
    firstName: string,
    secondName: string,
    phone: string
}
const Member = (props: thisProps) => {
    return (<div className={s.member}>
        <Image src={props.image}/>
        <div className={s.member_info}>
            <p>{props.firstName + ' ' + props.secondName}</p>
            <div className={s.greyText}><p>Брокер первичной недвижимости</p></div>
            <div className={s.greyTextSecond}><p>Телефон: {props.phone}</p></div>
        </div>
    </div>)
}
export default Member