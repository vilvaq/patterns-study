import { Supplier } from "./PizzaStore";

export abstract class Pizza {
  kind: string;
  ingredients: string[];

  constructor() {
    this.kind = "UNKNOWN PIZZA";
    this.ingredients = [];
  }

  prepare() {
    console.log("preparing...");
  }

  bake() {
    console.log("baking...");
  }

  cut() {
    console.log("cutting...");
  }

  box() {
    console.log("boxing...");
  };

  reveal() {
    return this.kind;
  }

  checkIngredients() {
    return this.ingredients;
  }
}

export class MargherittaPizza extends Pizza {
  constructor(supplier: Supplier) {
    super();
    this.kind = "Margheritta";
    this.ingredients = [
      supplier.getDough(),
      supplier.getCheese(),
      supplier.getSauce()];
  }
}

export class VeggiePizza extends Pizza {
  constructor(supplier: Supplier) {
    super();
    this.kind = "Veggie";
    this.ingredients = [
      supplier.getDough(),
      supplier.getCheese(),
      ...supplier.getVeggies()];
  }
}

export class BarbecuePizza extends Pizza {
  constructor(supplier: Supplier) {
    super();
    this.kind = "BBQ";
    this.ingredients = [
      supplier.getDough(),
      supplier.getCheese(),
      supplier.getBacon()];
  }
}
