import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { merchItem } from "./Models/Merch.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
}

merchItems = [
  new merchItem({ name: 'Baseball Helmet', price: 30.00, imgUrl: 'https://images-ext-2.discordapp.net/external/Tpq5nWZA5rbesCsGO10VerFA4lO114PaFSD7fv3HVQ4/https/i.ebayimg.com/images/g/MhwAAOSwQlxgx4fn/s-l640.jpg' }),
  new merchItem({ name: 'Basketball', price: 45.00, imgUrl: 'https://images-ext-2.discordapp.net/external/14XChZvyFC9FXyeSeXcK0nXKSvzegmrOAl29RX6t3s8/%3FodnHeight%3D612%26odnWidth%3D612%26odnBg%3DFFFFFF/https/i5.walmartimages.com/asr/87e114a1-d54d-4918-9c10-229f3d2a83b0_1.c8e95335dea9f2d56fe74abbb2547e39.jpeg' }),
  new merchItem({ name: 'Sneakers', price: 100.00, imgUrl: 'https://images-ext-1.discordapp.net/external/tk-ggz_s_7m6xUBDbMDRK13i0fwOd-DjQ7QIn3UQNXM/%3Fitok%3DwdIDM5Xu/https/www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_zoom_medium_606x504/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/314100095604_02.599879.jpg' }),
  new merchItem({ name: 'Smart Watch', price: 200.00, imgUrl: 'https://cdn.shopify.com/s/files/1/1969/6277/products/CAC-134-M05_500x500_Dial3_620x.jpg?v=1632378868' }),
  new merchItem({ name: 'Tennis Racket', price: 90.00, imgUrl: 'https://d8mkdcmng3.imgix.net/9d8a/739718.jpg?auto=format&bg=0FFF&fit=fill&h=600&q=100&w=600&s=5c98c0cadaadb6fce3ecf82f1b1212cd' }),
  new merchItem({ name: 'Baseball Bat', price: 150.00, imgUrl: 'https://www.greatrex.com.au/assets/full/WTLW3M110A.jpg?20200711031921' })
]





export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
