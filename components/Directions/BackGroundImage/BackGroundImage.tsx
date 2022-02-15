
import Image from 'next/image'
import s from "./BackGroundImage.module.scss"
type thisProps = {
    image: StaticImageData | string
}
const BackGroundImage = (props: thisProps) => {
    return (<div className={s.image}>
        <Image src = {props.image}/>
    </div>)
}
export default BackGroundImage