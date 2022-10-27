abstract class Pizza {
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
  constructor() {
    super();
    this.kind = "Margheritta";
    this.ingredients = ['mozarella', "tomato"];
  }
}

export class VeggiePizza extends Pizza {
  constructor() {
    super();
    this.kind = "Veggie";
    this.ingredients = ["zuccini", "onion", "tomato"];
  }
}

export class BarbecuePizza extends Pizza {
  constructor() {
    super();
    this.kind = "BBQ";
    this.ingredients = ["bacon", "onion", "bbq sauce"];
  }
}
