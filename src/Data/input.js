import {computed, observable} from 'mobx'

class keyinput {
    constructor() {
        window.addEventListener('keypress', e => {
            if (e.key !== 'Enter' && e.key !== 'NumpadEnter') {
                this
                    .inputkeys
                    .push(e.key)
            } else {
               this.inputkeys = []
            }
        }, false)
    }
    @observable inputkeys = []
    @computed get finalinput(){
        return this.inputkeys.join('')
    }
}
export default new keyinput()
