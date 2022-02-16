import s from './Partner.module.scss'
import Image from 'next/image'

type partnerProps = {
    image: StaticImageData | string
}
const Partner = (props: partnerProps) => {
    return (<div className={s.partnerCard}>
        {props.image && <Image
            src={props.image}
            alt="Picture"
        />}
    </div>)
}
export default Partner