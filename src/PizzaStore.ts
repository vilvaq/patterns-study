import { VeggiePizza, MargherittaPizza, BarbecuePizza } from './Pizza'

abstract class PizzaStore {
  abstract factory: PizzaFactory;

  orderPizza(kind?: string) {
    const pizza = this.factory.createPizza(kind);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export class ValenciaPizzaStore extends PizzaStore {
  factory: PizzaFactory;

  constructor() {
    super();
    this.factory = new ValenciaPizzaFactory();
  }
}

interface PizzaFactory {
  createPizza: (kind?: string) => Pizza;
}

class ValenciaPizzaFactory implements PizzaFactory {
  createPizza(kind: string = "margheritta") {
    if (kind === "veggie")
      return new VeggiePizza();
    if (kind === "bbq")
      return new BarbecuePizza();
    return new MargherittaPizza();
  }
}
