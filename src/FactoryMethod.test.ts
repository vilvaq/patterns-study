class PizzaService {
  private factory: PizzaFactory;
  
  constructor(pizzaFactory: PizzaFactory){
    this.factory = pizzaFactory;
  }

  orderPizza(kind?: string) {
    return this.factory.createPizza(kind)
  }
}

class PizzaFactory{
  createPizza(kind: string = "margheritta"){
    if (kind === "veggie") return new VeggiePizza()
    if (kind === "bbq") return new BarbecuePizza()
    return new MargherittaPizza()
  }
}

class Pizza {
  kind: string;
  ingredients: string[];

  constructor(){
    this.kind = "UNKNOWN PIZZA";
    this.ingredients = [];
  }

  reveal() {
    return this.kind
  }

  checkIngredients() {
    return this.ingredients
  }
}

class MargherittaPizza extends Pizza{
  constructor() {
    super()
    this.kind = "Margheritta"
    this.ingredients = ['mozarella', "tomato"]
  }
}

class VeggiePizza extends Pizza{
  constructor() {
    super()
    this.kind = "Veggie"
    this.ingredients = ["zuccini", "onion", "tomato"]
  }
}

class BarbecuePizza extends Pizza{
  constructor() {
    super()
    this.kind = "BBQ"
    this.ingredients = ["bacon", "onion", "bbq sauce"]
  }
}

describe("Pizza Service", () => {
  const pizzaFactory = new PizzaFactory()
  const pizzaShop = new PizzaService(pizzaFactory)

  it("delivers marguerittas by default", () => {
    const defaultPizza = pizzaShop.orderPizza()

    expect(defaultPizza.reveal()).toEqual("Margheritta")
    expect(defaultPizza.checkIngredients()).toEqual(["mozarella", "tomato"])
  })

  it("delivers pizzas of multiple types", () => {
    const margueritta = pizzaShop.orderPizza("margheritta")
    const veggie = pizzaShop.orderPizza("veggie")
    const bbq = pizzaShop.orderPizza("bbq")

    expect(margueritta.reveal()).toEqual("Margheritta")
    expect(margueritta.checkIngredients()).toEqual(["mozarella", "tomato"])
    expect(veggie.reveal()).toEqual("Veggie")
    expect(veggie.checkIngredients()).toEqual(["zuccini", "onion", "tomato"])
    expect(bbq.reveal()).toEqual("BBQ")
    expect(bbq.checkIngredients()).toEqual(["bacon", "onion", "bbq sauce"])
  })
})