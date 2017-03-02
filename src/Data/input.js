import {action, computed, observable} from 'mobx'

import Inputs from '../App/command/inputs/inputs';
import handleInput from '../Handler/Handler'

class keyinput {
    constructor() {
        window.addEventListener('keydown', e => {
            if (e.code == 'Space') {
                this
                    .lists[this.i]
                    .inputkeys
                    .push(e.key)
                return
            }
            let banarr = [
                9,
                19,
                27,
                45,
                36,
                33,
                34,
                35,
                46,
                17,
                18,
                17,
                18,
                91,
                37,
                39,
                123,
                122,
                121,
                120,
                119,
                118,
                117,
                116,
                115,
                114,
                113,
                112
            ]
            for (let i = 0; i < banarr.length; i++) {
                if (e.keyCode == banarr[i]) {
                    return
                }
            }
            if (e.location == 1 || e.location == 2) {
                return
            }
            // ToDo previous command
            if (e.keyCode == 38) {
                return
                //
                // this.lists[this.i].inputkeys=this.lists[this.i-1]?this.lists[this.i-1].inputk
                // e ys:''
            }
            // ToDo next command
            if (e.keyCode == 40) {
                return
            }
            if (e.key.indexOf('Lock') > 0) {
                return
            }
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
                let reply = handleInput(this.lists[this.i].inputkeys.join('').trim(), this.lists[this.i].path)
                if (typeof(reply) === 'string') {
                    this.lists[this.i].reply = reply
                    this.i++;
                    this
                        .lists
                        .push({
                            key: this.i,
                            inputkeys: [],
                            path: this.lists[this.i - 1].path
                        })
                } else {
                    this.i++;
                    this
                        .lists
                        .push({key: this.i, inputkeys: [], path: reply[0]})
                }
            }
        }, false)
    }
    i = 0
    @observable inputkeys = []
    @observable lists = [
        {
            key: this.i,
            inputkeys: this.inputkeys,
            reply: '',
            path: '~'
        }
    ]
    @action.bound
    pre(input) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this
                    .lists[0]
                    .inputkeys
                    .push(input)
                    resolve()
            }, 200)
        })
    }
}

export default new keyinput()