import {ImgBlock, TextBlock, TitleBlock} from "./blocks";

export class Sidebar {
    constructor(selector, update) {
        this.el = document.querySelector(selector)
        this.update = update
        this.init()
    }

    init () {
        this.el.addEventListener("submit", this.addBlock.bind(this))
        this.el.innerHTML = this.template
    }

    get template () {
        return [
            block("text"),
            block("title"),
            block("img")
        ].join("")
    }

    addBlock (event) {
        event.preventDefault()
        const type = event.target.name
        let value = event.target.value.value
        const styles = event.target.styles.value

        let Constructor
        function chooseConstructor() {
            switch (type) {
                case "text":
                    return Constructor = TextBlock
                case "title":
                    return Constructor = TitleBlock
                case "img":
                    value = event.target.value.files[0].name
                    console.log(value)
                    return Constructor = ImgBlock
                default:
                    return Constructor = TextBlock
            }
        }
        chooseConstructor()
        const newBlock = new Constructor(value, {styles})
        this.update(newBlock)

        event.target.value.value = ""
        event.target.styles.value = ""
    }
}

function block(type) {
    switch (type) {
        case "img":
            return `<form name="${type}">
        <h5>Создать "${type}" блок.</h5>
        <div class="form-group">
            <input type="file" class="form-control form-control-sm" name="value" placeholder="value">
        </div>
        <div class="form-group">
            <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Создать</button>
    </form>
    <hr />
    `
        default:
            return `<form name="${type}">
        <h5>Создать "${type}" блок.</h5>
        <div class="form-group">
            <input class="form-control form-control-sm" name="value" placeholder="value">
        </div>
        <div class="form-group">
            <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Создать</button>
    </form>
    <hr />
    `
    }
}