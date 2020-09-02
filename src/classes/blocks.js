import {col, row} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('Проверка...')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        let styles = this.options.styles
        return row(col(`
        <h1>${this.value}</h1>
    `), styles)
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        let styles = this.options.styles
        return row(col(`
        <p>${this.value}</p>
    `), styles)
    }
}

export class ImgBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {alt, styles, imageStyles} = this.options
        const html = `<img src=${this.value} alt=${alt} style="${imageStyles}">`
        return row(html, styles)
    }
}

export class TextColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        let styles = this.options.styles
        const html = this.value.map(e => col(e))
        return row(html.join(""), styles)
    }
}