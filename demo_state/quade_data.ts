export let cards: Array<any> = [
    {
        a: "Ипотека",
        b: "0,01%",
        c: "Втб банк",
        backGroundImage: null
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
        backGroundImage: ""
    },
    {
        a: "Как продавать элитную нежвижимость",
        b: null,
        c: "Здесь должна стрелка-ссылка"
    },
    {
        a: "Личный кабинет",
        b: "картинка",
        c: "Trend Agent"
    },
    {
        a: "Ипотека",
        b: "Бизнес",
        c: "Втб банк"
    },
    {
        a: "Ипотека",
        b: "Бизнес",
        c: "Втб банк"
    },
    {
        a: "Ипотека",
        b: "Бизнес",
        c: "Втб банк"
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
    image: string,
    value: string
}

export let directions: Array<direction> = [
    {
        id: 1,
        image: "",
        value: "Строящаяся недвижимость"
    },
    {
        id: 2,
        image: "",
        value: "Вторичная недвижимость"
    },
    {
        id: 3,
        image: "",
        value: "Элитная недвижимость"
    },
    {
        id: 4,
        image: "",
        value: "Инвестиционная недвижимость"
    },
    {
        id: 5,
        image: "",
        value: "Ипотека"
    }
]