const randomNumber = Math.random();
const randomNumberHundred =Math.floor((randomNumber * 100))
const body = document.querySelector(`body`)
const h2 = document.querySelector(`#h2`)
// const par2 = document.querySelector(`#par2`)
// console.log(randomNumberHundred);
// console.log(randomNumber);
// console.log(randomNumberHundred);

const input = document.querySelector(`#input`);
const button = document.querySelector(`#button`);
const par = document.querySelector(`#par`);
// console.log(par);
// console.log(input);
// console.log(button);

let counter = 0
let denemehakki = 3

button.addEventListener(`click`, function () {
//   console.log(input.value);
  console.log(randomNumberHundred);

  if (input.value === ``) {
     h2.innerHTML = `Adam akıllı sayi gir`
     h2.style.color = `black`
    // console.log(`sayı giriniz`);

  } else if (randomNumberHundred < input.value) {
    h2.innerHTML = `Biraz daha küçük`
    body.style.backgroundColor = `red`
    body.style.transition = `1s`
    counter++ 
    input.value = ` `
    denemehakki--
    // console.log(`aşağı`);

  } else if (randomNumberHundred > input.value) {
    h2.innerHTML = `Biraz daha büyük`
    body.style.backgroundColor = `blue`
    body.style.transition = `1s`
    counter++
    input.value = ` `
    // console.log(`yukarı`);

  } else if (randomNumberHundred == input.value) {
    h2.innerHTML = `Bulduuunn`
    body.style.backgroundColor = `orange`
    body.style.transition = `1s`
    // console.log(`helal sana`);
    counter++
    par.innerHTML = `Bu kadar denedin ama buldun :${counter}`
    input.value = ` `
    counter = 0
  }
  else{
    h2.innerHTML = `Dostum sayi girecen sayi`
    body.style.backgroundColor = `pink`
    input.value = ` `
  }
});


window.addEventListener(`keydown`, function(e){
    if(e.key === `Enter`){
        button.click()
    }
})

window.addEventListener(`load`,function(){
    input.focus()

})
