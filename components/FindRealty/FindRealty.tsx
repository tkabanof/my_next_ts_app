import s from "./FIndRealty.module.scss"
import Link from "next/link";
import Image from "next/image";
import img from "../../public/img.png";

const FindRealty = () => {
    return (<div className={s.first_block}>
        <div>
            <p>Агентво недвижимости</p>
            <div className={s.dept_buty_life}>
                <p>Департамент красивой жизни</p>
            </div>
            <div>
                <span>
                Мы агентство недвижимости, работающее на рынке Санкт-Петербурга, самостоятельный брокер
                объектов первичного и вторичного рынка, аккредитованный партнерский отдел продаж
                крупнейших застройщиков и партнер ведущих банков Российской Федерации
            </span>
            </div>
            <Link href="/realty"><p style={{textDecoration: "underline"}}>Узнать больше о компании</p>
            </Link>
            <button className={s.buttonSeek}>Поиск недвижимости</button>
        </div>
        <div>
            <Image src={img}
                   alt="Picture"
            />
        </div>
    </div>)
}

export default FindRealty