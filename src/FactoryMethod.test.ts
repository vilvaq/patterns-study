import { ValenciaPizzaStore } from './PizzaStore';

console.log = () => {}

describe("Pizza Service", () => {
  const pizzaShop = new ValenciaPizzaStore()

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