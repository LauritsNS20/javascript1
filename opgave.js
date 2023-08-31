const PEOPLE = [
    {
        name: "Magnus",
        age: 15,
        who: ["brother"],
    },
    {
        name: "Lilo",
        age: 4,
        who: ["dog"],
    },
    {
        name: "Filip",
        age: 19,
        who: ["friend"],
    },
    {
        name: "Andreas",
        age: 18,
        who: ["friend"],
    },
]
 
const text = document.querySelector(".text")
const text2 = document.querySelector(".text2")
const text3 = document.querySelector(".text3")
const text4 = document.querySelector(".text4")

text.innerHTML = PEOPLE[0].name 
text2.innerHTML = PEOPLE[PEOPLE.length - 1].name
text3.innerHTML = PEOPLE[1].name
text4.innerHTML = PEOPLE[2].name 








//PEOPLE.forEach(function(result)) {
 // document.innerHTML += `<h2>${result.name}</h2>`
//}

//document.body.prepend(PEOPLE[0].name
   // ," ", 
   // PEOPLE[PEOPLE.length - 1].name
   // )


//PEOPLE.forEach(function(element){
   // console.log(element.name)   
//}) 
  
// conlose.log element.name or .age

 //PEOPLE.forEach(element => console.log(element))

 //colole.log(PEOPLE[0])
 //colole.log(PEOPLE[1])
 //colole.log(PEOPLE[2])
 //colole.log(PEOPLE[3])
    