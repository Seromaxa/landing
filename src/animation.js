export default class Anima {
    constructor(el, className) {
        this.el = document.getElementById(el)
        this.className = className
        this.scroll()

    }
    scroll() {
        if (this.isPartVis()) {
            return this.el.classList.add(this.className)
        } else {
            return this.el.classList.remove(this.className)
        }
    }

    isPartVis() {
        if(window.outerWidth < 577){
            return
        }else{
        const bounded = this.el.getBoundingClientRect()
        
        let top = bounded.top
        let bottom = bounded.bottom
        let height = bounded.height
        console.log(top + height , bottom)
        return ((top + height  >= 0) && (height + window.innerHeight >= bottom))
        }
    }
}