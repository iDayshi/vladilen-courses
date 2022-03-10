import { getTimeDonat } from './time'
import { totalDonat } from './totaldonat'

export class Donat {
    #donatesContainer
    #sumDonat

    constructor () {
        this.#donatesContainer = document.querySelector('.donates-container__donates')
        this.#sumDonat = document.querySelector('#total-amount')
    }

    addDonatToStoradge() {
        const donatValue = Number(document.querySelector('.donate-form__donate-input').value)
        if (donatValue > 0 && donatValue <= 100 ){
            localStorage.setItem(getTimeDonat(new Date), donatValue)
        }
    }

    renderAllDonat(){
        Object.keys(localStorage).sort().map((value) => {
            console.log(value)
            let newDonatItem = document.createElement('div')
            let coastDonat = document.createElement('b')
            newDonatItem.className = 'donate-item'
            newDonatItem.innerText = value
            console.log(Object(localStorage)[value])
            coastDonat.innerText = Object(localStorage)[value] + '$'
            newDonatItem.append(coastDonat)
            this.#donatesContainer.append(newDonatItem)
        })
        this.#sumDonat.innerText = totalDonat() + '$'
    }
}
