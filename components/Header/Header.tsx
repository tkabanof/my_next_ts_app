import s from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from "./../../public/logo.svg"

const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.logo}>
                <Link href="/">
                    <Image
                        src={logo}
                    />
                </Link>
            </div>

            <div className={s.menu}>
                <Link href="/realty">
                    <a>Новостройки</a>
                </Link>
                <Link href="/realty">
                    <a>Недвижимость</a>
                </Link>
                <Link href="/realty">
                    <a>Инвестиции</a>
                </Link>
                <Link href="/realty">
                    <a>Контакты</a>
                </Link>
                <a>Еще</a>
            </div>
            {/*<div>*/}
            {/*    <DefaultButton name = {"Войти"}/>*/}
            {/*</div>*/}
            <button className={s.loginButton}><a>Войти</a></button>
        </div>
    )
}

export default Header
