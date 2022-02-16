import React from 'react';
import s from "./Contacts.module.scss"
import {social_list} from "./assets/social_list";
import Image from 'next/image'

const Contacts = () => {
    return (
        <div className={s.contacts_layout}>
            <div className={s.contacts_head}>
                <p>Контакты</p>
            </div>
            <div className={s.block}>
                <p className={s.grey_type}>Адрес</p>
                <p className={s.bold_type}>Санкт-Петербург, Малый пр. ВО, 62 к.1</p>
                <p>Построить маршрут</p>
            </div>

            <div className={s.block}>
                <p className={s.grey_type}>Связаться с нами</p>
                <p className={s.bold_type}>info@realty-department.ru</p>
                <p className={s.bold_type}>8 800 333 55 33</p>
            </div>

            <div>
                <p className={s.grey_type}>Подписывайтесь</p>
                <div className={s.social_links}>
                    {social_list.map((i) => <Image
                        key={i.id}
                        src={i.icon}
                        alt={i.name}
                        width="20px"
                        height = "20px"
                    />)}
                </div>
            </div>
        </div>
    );
};

export default Contacts;