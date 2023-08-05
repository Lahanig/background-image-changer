let background = localStorage.getItem("background")

if (!background) {
    localStorage.setItem("background", "null")
}

class Storage {
    constructor() {
        this.backgroundUrl = localStorage.getItem("background")
    }

    setBackground() {
        if (this.backgroundUrl === "null") return

        let body = document.querySelector("body"),
            imageUrl = localStorage.getItem('background')

        body.style.background = `url(data:image/png;base64,${imageUrl}) no-repeat center`
        body.style.backgroundSize = "cover"
    }

    updateBackground() {
        let body = document.querySelector("body"),
            url = document.querySelector("#urlInput")

        url.addEventListener('change', (e) => {
            const file = e.target.files[0],
                 reader = new FileReader()
            reader.onloadend = () => {
                // convert file to base64 String
                const base64String = reader.result.replace('data:', '').replace(/^.+,/, '')
                // store file
                localStorage.setItem('background', base64String)
            }
            reader.readAsDataURL(file)
        })

        let imageUrl = localStorage.getItem('background')

        // display image
        body.style.background = `url(data:image/png;base64,${imageUrl}) no-repeat center`
        body.style.backgroundSize = "cover"
    }
}

const Store = new Storage()

window.onload = () => {
    Store.setBackground()
}