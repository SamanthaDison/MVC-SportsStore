import { ValuesController } from "./Controllers/ValuesController.js";
import { MerchItemsController } from "./Controllers/MerchController.js";


class App {
  merchItemsController = new MerchItemsController()
}

window["app"] = new App();
