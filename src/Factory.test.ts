class PizzaService {
  orderPizza(kind?: string) {
    const factory = new PizzaFactory()
    return factory.createPizza(kind)
  }
}

class PizzaFactory{
  createPizza(kind: string = "margheritta"){
    if (kind === "veggie") return new VeggiePizza()
    if (kind === "bbq") return new BarbecuePizza()
    return new MargherittaPizza()
  }
}

class MargherittaPizza {
  kind: string;

  constructor() {
    this.kind = "Margheritta"
  }

  reveal() {
    return this.kind
  }

  checkIngredients() {
    return ['mozarella', "tomato"]
  }
}

class VeggiePizza {
  kind: string;

  constructor() {
    this.kind = "Veggie"
  }

  reveal() {
    return this.kind
  }

  checkIngredients() {
    return ["zuccini", "onion", "tomato"]
  }
}

class BarbecuePizza {
  kind: string;

  constructor() {
    this.kind = "BBQ"
  }

  reveal() {
    return this.kind
  }

  checkIngredients() {
    return ["bacon", "onion", "bbq sauce"]
  }
}

describe("Pizza Service", () => {
  it("delivers marguerittas by default", () => {
    const service = new PizzaService()

    const defaultPizza = service.orderPizza()

    expect(defaultPizza.reveal()).toEqual("Margheritta")
    expect(defaultPizza.checkIngredients()).toEqual(["mozarella", "tomato"])
  })

  it("delivers pizzas of multiple types", () => {
    const service = new PizzaService()

    const margueritta = service.orderPizza("margheritta")
    const veggie = service.orderPizza("veggie")
    const bbq = service.orderPizza("bbq")

    expect(margueritta.reveal()).toEqual("Margheritta")
    expect(margueritta.checkIngredients()).toEqual(["mozarella", "tomato"])
    expect(veggie.reveal()).toEqual("Veggie")
    expect(veggie.checkIngredients()).toEqual(["zuccini", "onion", "tomato"])
    expect(bbq.reveal()).toEqual("BBQ")
    expect(bbq.checkIngredients()).toEqual(["bacon", "onion", "bbq sauce"])
  })
})