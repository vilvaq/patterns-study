import { VeggiePizza, MargherittaPizza, BarbecuePizza, Pizza } from './Pizza'

abstract class PizzaStore {
  orderPizza(kind?: string) {
    const pizza = this.createPizza(kind);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  abstract createPizza(kind?: string): Pizza;
}

export interface Supplier {
  getVeggies: () => string[]
  getSauce: () => string
  getCheese: () => string
  getDough: () => string
  getBacon: () => string
}

class ValenciaSupplier implements Supplier {
  getVeggies(){
    return ["zuccini", "onion", "tomato"]
  }

  getSauce(){
    return "tomato sauce"
  }

  getCheese(){
    return "mozarella"
  }

  getDough(){
    return "thin dough"
  }

  getBacon(){
    return "bacon"
  }
}

export class ValenciaPizzaStore extends PizzaStore {
  supplier: Supplier;

  constructor() {
    super();
    this.supplier = new ValenciaSupplier()
  }

  createPizza(kind: string = "margheritta") {
    if (kind === "veggie") return new VeggiePizza(this.supplier);
    if (kind === "bbq") return new BarbecuePizza(this.supplier);
    return new MargherittaPizza(this.supplier);
  }
}