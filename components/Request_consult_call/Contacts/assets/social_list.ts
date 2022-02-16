import tg from "./social_icons/Telegram.svg"
import fb from "./social_icons/Facebook.svg"
import google from "./social_icons/Google.svg"
import inst from "./social_icons/Instagram.svg"
import youtube from "./social_icons/YouTube.svg"

type social = {
    id: number,
    name: string,
    link: string,
    icon: any
}

export let social_list: Array<social> = [
    {
        id: 1,
        name: "telegramm_icon",
        link: "",
        icon: tg
    },
    {
        id: 2,
        name: "fb_icon",
        link: "",
        icon: fb

    },
    {
        id: 3,
        name: "goo_icon",
        link: "",
        icon: google
    },
    {
        id: 4,
        name: "inst_icon",
        link: "",
        icon: inst
    },
    {
        id: 5,
        name: "yt_icon",
        link: "",
        icon: youtube
    }
]