class Animal{
    constructor(name,age){
        console.log("object created!",name,age)
    }
}
var dog = new Animal("puppy",23);

var inputText = document.getElementsByClassName("myInput")
console.log(inputText[0].value);