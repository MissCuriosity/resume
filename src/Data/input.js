import {computed, observable} from 'mobx'

import Inputs from '../App/command/inputs/inputs';

class keyinput {
    constructor() {
        window.addEventListener('keydown', e => {
            if (e.key === 'Backspace') {
                this
                    .lists[this.i]
                    .inputkeys
                    .pop()
            } else if (e.key !== 'Enter' && e.key !== 'NumpadEnter') {
                this
                    .lists[this.i]
                    .inputkeys
                    .push(e.key)
            } else {
                this.i++
                this.lists.push({key: this.i, inputkeys: []})
            }
        }, false)
    }
    i = 0
    @observable inputkeys = []
    @observable lists = [
        {
            key: this.i,
            inputkeys: this.inputkeys
        }
    ]
}
export default new keyinput()
