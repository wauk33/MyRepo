const cont = document.getElementById("container");
const img1 = document.querySelector(".item1");
const img2 = document.querySelector(".item2");
const arrow = document.querySelector(".arrow");

arrow.addEventListener('click', function(){
    img1.classList.toggle('hide')
    
    if(img1.classList.contains('hide')){
        arrow.style.transform = "rotate(0deg)"
    }else
    arrow.style.transform = "rotate(-180deg)"
});

cont.addEventListener('click', function(){

    if(img1.classList.contains('hide')){
    img1.classList.toggle('hide')
    arrow.style.transform = "rotate(180deg)"
    }

})
 /* funckja strzałkowa */

const test = x => 
console.log(x)
test("Tak")

const add = (a, b) => a * b;

console.log(add(50, 50));

const arr = ['p', 'aff', 'gegeg']

arr.forEach(function(index){
        console.log(index)
})

const arrfat = arr.forEach(index => console.log(index))



const hello = (name = 'użytkowniku') => 'Cześć ' + name + ', jak u Ciebie?'

console.log(hello())


//spread
const array = ['el1', 'el2', 'el3']
console.log(...array)

//rest + strzałkowa

const numbers = (x, y, o, ...z) => {
    console.log( ...z); 
    
}









/* call apply bind */

// const movie = {
//     title : 'Avengers',
//     price : 23,
// };
// console.log(this.title).call(movie)

// const showMovie = cinema => console.log('Film: ' + this.title + ', bilet: ' + this.price + 'zl, kino: ' + cinema)

// showMovie.call(movie);

function Movie(title, year) {
    this.title = title;
    this.year = year;
};

function ActionMovie(title, year) {
    console.log(this);
    Movie.call(this, title, year);
    this.category = "Akcja";
};

const newMovie = new ActionMovie('Superman', 35)

function CreateMeleeWeaponStats(name, atk, def, oz) {
    this.name = name;
    this.attack = atk;
    this.defense = def;
    this.oz = oz;

    console.log(this)
};

function SwordMaker(name, atk, def, oz) {

    CreateMeleeWeaponStats.call(this, name, atk, def, oz);
    this.category = "Sword";
};

function AxeMaker(name, atk, def, oz) {

    CreateMeleeWeaponStats.call(this, name, atk, def, oz);
    this.category = "Axe";
};

const Sword_Excaliburgh = new SwordMaker('Excaliburgh', 53, 12, 24.44);
const Axe_SodiumAxe = new AxeMaker('Sodium Axe', 66, 6, 34.12);

function oadd(...el) {
console.log(el);
let result = 0;
for (let i=0; i<el.length; i++) {
result = result + el[i];
};
return result;
};

const store = oadd.apply(null, [1, 4, 6, 8, 10]);
console.log(store);

//call & apply ^
// .call(obiekt, argumenty)
// .apply(obiekt, tablica) 
// (lub (null, args))

const user = {
    name: 'Lilly',
    age: 23,
    'fav-color': 'niebieski',
    car: {
        brand: 'Audi',
    }
}

function print() {
    console.log(this.name + ' ma ' + this.age + ' lata, a jej ulutbiony kolor to ' + this['fav-color'])
};
function printCar(color) {
    console.log("Jezdzi samochodem marki " + this.car.brand + ". Samochod jest koloru " + color)
};
print.bind(user)();



function Food(name, price) { // konstruktor
    this.name = name;
    this.price = price;
}

const sandwich = new Food('Sandwich',  4); //tworzenie obiektu
console.log(sandwich);

 function showMeal() {
    console.log(this.name + " kosztuje " + this.price + " zł");
}

showMeal.bind(sandwich)(); //odwołanie do stworzonego obiektu

//LUB

Food.prototype.showMeal3 = function() {
    console.log(this.name + " kosztuje " + this.price + " zł");
}
sandwich.showMeal3();
////////////////////////////////////////////////////////
//class 


class Fooder {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    showMeal2() {
        console.log(this.name + " kosztuje " + this.price + " zł");
    }

}


const burger = new Fooder('Hamburger', 5);
const potato = new Fooder('Ziemniaki', 10);
potato.showMeal2();
console.log(burger);
burger.showMeal2();



class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    say(){
        console.log(this.name + " have " + this.age + " years old. He's a " + this.sex);
    }
};
class Driver extends Person {
    constructor(name, age, sex, license, status, date) {
        super(name, age, sex)
        this.license = license;
        this.status = status;
        this.date = date;
    }

    isDriver(){
        if(this.status == 1) {
        console.log(this.name + " ma prawo jazdy od " + (2020 - this.date) + " lat. Kategoia: " + this.license)
    }

        else{
        console.log(this.name + " nie posiada prawa jazdy.");
    }
    }
};

const player1 = new Driver('Adam', 24, 'male');
const player2 = new Driver('Robert', 22, 'male', 'B', 1, 2014)
console.log(player1);
console.log(player2);
player1.say();
player2.say();
player2.isDriver();
player1.isDriver();



const persona = {
    name: "Lilly",
    age: 24
}

const pet = {
    name: 'Drops',
    type: 'dog'
}

const obj = Object.assign({}, persona, pet);
console.log(pet);
console.log(obj);
console.log(persona);


const specs = {
    fuel: "ON",
    type: "4x4"
}
let car = {
    brand: 'Audi',
    year: 2015,
    color: 'silver'
}

const mojcar = Object.assign({}, specs, car);
car = Object.assign({}, car, specs);
mojcar.brand = "Lambo"
console.log(mojcar);
console.log(car);

const city = {
    name: 'Newark',
    location: 'USA',

    get cityName(){
        return this.name;
    },

    set cityName(newCity){
        return this.name = newCity;
    }
}

const userr = {
    name: 'Lily',
    age: 23,
    job: 'dj',
    car: {
        brand: 'Dodge',
        model: 'Viper'
    }
}
//destrukturyzacja      const {klucze} = obiekt;
const about = () => {
    const {name, age, job} = userr;
    console.log("S" + name + age + job)
}
about()

const aboutMe = ({name, age, job}) => { // destrukturyzacja przez argumenty( args!)
    console.log(name + ' ma ' + age + ' i pracuje jako ' + job);
}

aboutMe(userr);


const aboutMe2 = ({car:{brand, model}}) => { //destrukturyzacja obiektu w obiekcie
    console.log('Jej samochód to ' + brand + ' ' + model)
}

aboutMe2(userr)


//fetch api       ==========
const dogAPIurl = 'https://dog.ceo/api/breeds/image/random'
const button = document.querySelector('button');
const img = document.querySelector('img');
button.addEventListener('click', () => {
    fetch(dogAPIurl)   //fetch().then().catch()
    .then(resp => resp.json()) //convert na json
    .then(resp => {
        img.setAttribute('src', resp.message)
        img.style.width = "900px";
        img.style.height = "500px"
        img.style.position = 'center';
    }) //przypisanie odpowiedzi do img
    .catch(error => console.log(error))
})

