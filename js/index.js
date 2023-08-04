let background = localStorage.getItem("background")

if (!background) {
    localStorage.setItem("background", JSON.stringify(null))
}

class Storage {
    constructor() {
        this.backgroundUrl = JSON.parse(localStorage.getItem("background"))
    }

    setBackground() {
        if (this.backgroundUrl === null) return

        let body = document.querySelector("body")

        body.style.background = `url("${this.backgroundUrl}") no-repeat center`
        body.style.backgroundSize = "cover"
    }

    updateBackground() {
        let body = document.querySelector("body"),
            url = document.querySelector("#urlInput").value

        body.style.background = `url("${url}") no-repeat center`
        body.style.backgroundSize = "cover"

        localStorage.setItem("background", JSON.stringify(url))

        document.querySelector("#urlInput").value = ""
    }
}

const Store = new Storage()

window.onload = () => {
    Store.setBackground()
}