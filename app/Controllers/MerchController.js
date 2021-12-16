import { ProxyState } from "../AppState.js";

function _drawMerch() {
    let template = ''
    ProxyState.merchItems.forEach(m => template += m.Template)
    document.getElementById('merch').innerHTML = template
}





export class MerchItemsController {
    constructor() {

        _drawMerch()
    }

} 