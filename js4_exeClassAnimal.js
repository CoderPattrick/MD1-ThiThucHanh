let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
console.log(objAnimal1.toString());

let objAnimal2 = new Animal('name',1);
objAnimal2.setName('Mouse');
let nameOfObj2 = objAnimal2.getName();
let weightOfObj2 = objAnimal2.getWeight();
console.log(nameOfObj2);
console.log(weightOfObj2);