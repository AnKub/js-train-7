//Завдання 1: Функція для створення символу
function createSymbol() {
  let user = Symbol();
  return user;
}

console.log("Завдання 1 ====================================");
console.log(createSymbol()); // Виведе Symbol()

//Завдання 2: Функція для створення символу з описом та виведення опису
function createSymbolWithDescription(property) {
  let user = Symbol(property);
  return user;
}

console.log("Завдання 2 ====================================");
console.log(createSymbolWithDescription("My symbol")); // Виведе My symbol

// Завдання 3: Створення властивостей об'єкту з використанням Symbol
// В даному завданні ми створимо властивість об'єкту, ключ якої буде символом.

// Створимо функцію, яка створює об'єкт з властивістю, ключ якої є символом
function createSymbolProperty(property) {
  let sym = Symbol();
  let obj1 = {};
  obj1['Symbol()']= (property);
  return obj1;
  // Створимо змінну sym яка дорівнює символу без опису
  // Створимо пустий об'єкт
  // Додамо властивість до об'єкту, ключем якої буде наш символ, а значенням буде аргумент property
  // Повертаємо об'єкт
}

console.log("Завдання 3 ====================================");
console.log(
  createSymbolProperty("Це властивість об'єкту з використанням символу")
); //Виведе { [Symbol()]: "Це властивість об'єкту з використанням символу" }

// Завдання 4. Перевіримо чи є символи унікальними
// Функція для створення двох символів з однаковим описом та порівнянням
function createAndCompareTwoSymbols(value) {
  // Створюємо два символи з однаковим описом value, та повертаємо результат порівняння двох символів
  let rer = Symbol(value);
  let rer1 = Symbol(value);
  return rer===rer1;
}

console.log("Завдання 4 ====================================");

console.log(createAndCompareTwoSymbols("My Symbol")); // Виведе false

// Завдання 5: Створення символу з використанням Symbol.for()

// Функція createSymbolForKey створює новий символ за допомогою Symbol.for() та повертає його
function createSymbolForKey(key) {
  let symbol = Symbol.for(key);
  return symbol;
  // Використовуємо Symbol.for() для створення нового символу symbol зі значенням key
  // Symbol.for() шукає символ в глобальному реєстру символів. Якщо символ з таким ключем вже існує, він повертає його, в іншому випадку створює новий символ з даним ключем та додає його в реєстр
  // Повертаємо створений символ
}

// Функція compareSymbolsForKey порівнює два символи за допомогою оператора '==='
function compareSymbolsForKey(symbol1, symbol2) {
  return symbol1 === symbol2;
  // Використовуємо оператор '===' для порівняння двох символів
  // Якщо два символи однакові, він поверне true, в іншому випадку - false
}

console.log("Завдання 5 ====================================");
let symbol5 = createSymbolForKey("myKey"); // Створюємо новий символ
let symbol6 = createSymbolForKey("myKey"); // Створюємо новий символ
console.log(compareSymbolsForKey(symbol5, symbol6)); //Виведе: true

// Завдання 6: Використання Symbol.keyFor(sym)

// Функція getSymbolKey приймає символ як аргумент та повертає ключ, який був використаний для його створення
function getSymbolKey(symbol) {
  let sym = Symbol.keyFor(symbol);  
  return symbol;
}

console.log("Завдання 6 ====================================");
let symbolForKey = Symbol.for("myKey"); // Створюємо новий символ або отримуємо існуючий з глобального реєстру символів
console.log(getSymbolKey(symbolForKey)); // Виводимо ключ символу. Виведе: myKey

// Завдання 7: Використання Symbol.toString

function useSymbolToStringTag() {
  let myObject = {};
  myObject[Symbol] = 'CustomObject';
  return myObject[Symbol].toString();
}

console.log("Завдання 7 ====================================");
console.log(useSymbolToStringTag()); //Виведе CustomObject

// Завдання 8: Використання Symbol.description

// Функція useSymbolDescription використовує властивість Symbol.description для отримання опису символу.

function useSymbolDescription() {
    let mySymbol = Symbol('mySymbol');
    let symbolDescription = mySymbol;
    return symbolDescription.description;
}

console.log("Завдання 8 ====================================");
console.log(useSymbolDescription()); //Виведе mySymbol

// Завдання 9: Використання Symbol.iterator

// Об'єкт "myObject" представляє значення   from: 1, to: 7, які можна перебрати

let rangeObject = {
  from:1,
  to:7,
 [Symbol.iterator](){
  this.current=this.from;
  return this;
 }, 
 next(){
   return this.current<=this.to?{done:false,value:this.current++}:{done:true};
 }
 };
 function useSymbolIterator(obj) {
   let result=[];
   for(let value of obj){
   // Додаємо кожне значення до масиву "result"
   result=[...result,value]};
   return result;
  }

console.log("Завдання 9 ====================================");
console.log(useSymbolIterator(rangeObject)); //Виведе [ 1, 2, 3, 4, 5, 6 ]

// Завдання 10: Використання Symbol.iterator

// Оголошення об'єкта "myObject" з властивістю "category"
let myObject = {
  category: [
    { id: 1, name: "apple" }, // Об'єкт категорії з ідентифікатором 1 та назвою "apple"
    { id: 2, name: "banana" }, // Об'єкт категорії з ідентифікатором 2 та назвою "banana"
    { id: 3, name: "orange" }, // Об'єкт категорії з ідентифікатором 3 та назвою "orange"
    { id: 4, name: "grape" }, // Об'єкт категорії з ідентифікатором 4 та назвою "grape"
    { id: 5, name: "mango" }, // Об'єкт категорії з ідентифікатором 5 та назвою "mango"
  ],
  currentIndex:0, 
   [Symbol.iterator](){
    return this;
   },
    next(){ 
    if(this.currentIndex <this.category.length){
    //Створюємо змінну value якій присвоємо властивість name елемента масиву category з індексом currentIndex
    const value=this.category[this.currentIndex].name;
    this.currentIndex++;
    return {value,done:false}; 
   }
    else{return {done:true}}
   },
};

console.log("Завдання 10 ====================================");
console.log(useSymbolIterator(myObject)); //Виведе [ 'apple', 'banana', 'orange', 'grape', 'mango' ]
