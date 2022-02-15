import image1 from "./assets/Rectangle77.png"
import image2 from "./assets/Rectangle 77-1.png"
import image3 from "./assets/Rectangle 77-2.png"
import image4 from "./assets/Rectangle 77-3.png"
import image5 from "./assets/Rectangle 77-4.png"

import mem1image from "./assets/members/mem1.png"
import mem2image from "./assets/members/mem2.png"

export let cards: Array<any> = [
    {
        a: "Ипотека",
        b: "0,01%",
        c: "Втб банк",
        backGroundImage: "",
        type: 1
    },
    {
        a: "Элитная недвижимость",
        b: "Бизнес",
        c: [
            {
                id: 1,
                value: "Клубный дом Factorium "
            }, {
            id: 2,
                value: "Гороховая ул., д. 8/13"
            }],
        backGroundImage: image1,
        type: 2
    },
    {
        a: "Как продавать элитную нежвижимость",
        b: null,
        c: "Здесь должна стрелка-ссылка",
        type: 1
    },
    {
        a: "Личный кабинет",
        b: "картинка",
        c: "Trend Agent",
        type: 2
    },
    {
        a: "Ипотека",
        b: "Бизнес",
        c: "Втб банк",
        type: 2
    },
    {
        a: "Ипотека",
        b: "Бизнес",
        c: "Втб банк",
        type: 1
    },
    {
        a: "Ипотека",
        b: "Бизнес",
        c: "Втб банк",
        type: 2
    },
    {
        a: "Ипотека",
        b: "Бизнес",
        c: "Втб банк",
        type: 1
    }
]

type result = {
    head: string,
    text: string,
    blocks: Array<{ id: number, name: string, value: string }>
}
export let results: result = {
    head: "Результаты нашей компании",
    text: "Компания “Департамент Красивой Жизни. Недвижимость” - это агентство недвижимости, работающее на рынке " +
        "Санкт-Петербурга, самостоятельный брокер объектов первичного и вторичного рынка, аккредитованный " +
        "партнерский отдел продаж крупнейших застройщиков и партнер ведущих банков Российской Федерации",
    blocks: [
        {
            id: 1,
            name: "Инвестиционных сделок",
            value: "200+"
        },
        {
            id: 2,
            name: "Сумма инвестиционных сделок",
            value: "1,3 млрд. "
        },
        {
            id: 3,
            name: "Средняя доходность инвестициооных портфелей",
            value: "51%"
        }
    ]
}

type direction = {
    id: number,
    image: StaticImageData,
    value: string
}

export let directions: Array<direction> = [
    {
        id: 1,
        image: image1,
        value: "Строящаяся недвижимость"
    },
    {
        id: 2,
        image: image2,
        value: "Вторичная недвижимость"
    },
    {
        id: 3,
        image: image3,
        value: "Элитная недвижимость"
    },
    {
        id: 4,
        image: image4,
        value: "Инвестиционная недвижимость"
    },
    {
        id: 5,
        image: image5,
        value: "Ипотека"
    }
]

export let members:Array<any> = [
    {
        id: 1,
        image: mem1image,
        name1: "Александр",
        name2: "Клиничев",
        ph: "+7 911 000 00 00"
    },
    {
        id: 2,
        image: mem2image,
        name1: "Александра",
        name2: "Клиничев",
        ph: "+7 911 000 00 00"
    },
    {
        id: 3,
        image: mem1image,
        name1: "Александр",
        name2: "Клиничев",
        ph: "+7 911 000 00 00"
    },
    {
        id: 4,
        image: mem2image,
        name1: "Александр",
        name2: "Клиничев",
        ph: "+7 911 000 00 00"
    },
    {
        id: 5,
        image: mem1image,
        name1: "Александр",
        name2: "Клиничев",
        ph: "+7 911 000 00 00"
    },
    {
        id: 6,
        image: mem2image,
        name1: "Александра",
        name2: "Клиничев",
        ph: "+7 911 000 00 00"
    },
    {
        id: 7,
        image: mem1image,
        name1: "Александр",
        name2: "Клиничев",
        ph: "+7 911 000 00 00"
    },
    {
        id: 8,
        image: mem2image,
        name1: "Александра",
        name2: "Клиничев",
        ph: "+7 911 000 00 00"
    }
]
