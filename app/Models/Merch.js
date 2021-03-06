import { generateId } from "../Utils/generateId.js";

export class merchItem {
    constructor(data) {
        this.name = data.name,
            this.quantity = data.quantity,
            this.price = data.price,
            this.imgUrl = data.imgUrl,
            this.id = generateId()
    }


    get Template() {
        return `<div class="col-6 my-2 p-2  d-flex ">
            <div class="bg-white justify-content-center rounded shadow p-3 ">
              <img class="img-fluid merch-img pb-1"
                src="${this.imgUrl}"
                alt="">
              <div class="d-flex justify-content-evenly">
                <p>${this.name} - $${this.price}</p>
              </div>
            </div>
          </div>`
    }


}

