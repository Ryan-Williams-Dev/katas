const ingredientCheck = function(bakery, ingList) {
  for (let i = 0; i < bakery.length; i++) {
    if (ingList.includes(bakery[i])) {
      return true;
    }
  }
  return false;
}

/* I tried the following method below first, but could not get it to work.
I could only get it to return to me 'undefinded' and I cannot see the reason
it would not work. Seemed to work easier in a for loop for me, unsure what i got wrong in the forEach method.
*/

// const chooseRecipe = function(bakeryA, bakeryB, recipes) {
//   recipes.forEach(function(element) {
//     if (ingredientCheck(bakeryA, element.ingredients) && ingredientCheck(bakeryB, element.ingredients)) {
//       return element.name;
//     }
//   });
// }

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let i = 0; i < recipes.length; i++) {
    if (ingredientCheck(bakeryA, recipes[i].ingredients) && ingredientCheck(bakeryB, recipes[i].ingredients)) {
      return recipes[i].name;
    }
  }
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));