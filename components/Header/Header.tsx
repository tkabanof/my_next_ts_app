import s from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from "./../../public/logo.svg"

const links = [
    {
        id: 1,
        link: "/realty",
        name: "Новостройки"
    },
    {
        id: 2,
        link: "/realty",
        name: "Недвижимость"
    },
    {
        id: 3,
        link: "/realty",
        name: "Инвестиции"
    },
    {
        id: 4,
        link: "/realty",
        name: "Контакты"
    },
]
const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.logo}>
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Logo"
                    />
                </Link>
            </div>

            <div className={s.menu}>
                {links.map((i)=><Link key={i.id} href={i.link}><p>{i.name}</p></Link>)}
            </div>
            <button className={s.loginButton}><a>Войти</a></button>
        </div>
    )
}

export default Header
