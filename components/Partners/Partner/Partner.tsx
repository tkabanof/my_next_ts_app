import s from './Partner.module.scss'
import Image from 'next/image'

type thisProps = {
    image: StaticImageData | string
}
const Partner = (props: thisProps) => {
    return (<div>
        <Image src={props.image} />
    </div>)
}
export default Partner