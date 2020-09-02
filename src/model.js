import image from "./img/image.png"
import {ImgBlock, TextBlock, TextColumnsBlock, TitleBlock} from "./classes/blocks"

export const model = [
    new TitleBlock ( "Конструктор сайтов на чистом JS", {
        styles: "text-align: center; color: #6Cf; text-shadow: 0 -1px 0 rgba(0,0,0,0.4); background: black"
    }),
    new TextBlock ("Сделай свой сайт всего в 2 клика.", {
        styles: "text-align: center; color: white; text-shadow: 0 -1px 0 rgba(0,0,0,0.4); background: black"
    }),
    new ImgBlock (image, {
        styles: "padding 2rem 0;",
        alt: "some img",
        imageStyles: "width: 1200px"
    }),
    new TextColumnsBlock ( [
        "Простой интерфейс",
        "Огромное количество разных опций",
        "Отличный результат"], {
        styles: "text-align: center; color: white; text-shadow: 0 -1px 0 rgba(0,0,0,0.4); background: black"
    })
]