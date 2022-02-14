import s from "./FIndRealty.module.scss"
import Link from "next/link";
import Image from "next/image";
import img from "../../public/img.png";

const FindRealty = () => {
    return (<div className={s.first_block}>
        <div>
            <p>Агентво недвижимости</p>
            <p style={{fontSize: "3em"}}>Департамент красивой жизни</p>
            <p>Мы агентство недвижимости, работающее на рынке Санкт-Петербурга, самостоятельный брокер
                объектов первичного и вторичного рынка, аккредитованный партнерский отдел продаж
                крупнейших застройщиков и партнер ведущих банков Российской Федерации</p>

            <Link href="/realty"><p style={{textDecoration: "underline"}}>Узнать больше о компании</p>
            </Link>
            <button className={s.buttonSeek}>Поиск недвижимости</button>
        </div>
        <div>
            <Image src={img}
                   width="465px"
                   height="400px"
            />
        </div>
    </div>)
}

export default FindRealty