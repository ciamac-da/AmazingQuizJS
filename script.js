/**var questions = [
  {question:'Was ist 3 + 5',answer:"8"},
  {question:'Wo liegt Berlin',answer:'Deutschland'},
  {question:'Wo liegt Tokyo',answer:'Japan'}
]

var frageDiv = document.getElementById('frage')
var punkteDiv = document.getElementById('punkte')
var neueAufgabeButton = document.getElementById('neu')
var antwortButton = document.getElementById('go')
var antwortFeld = document.getElementById('antwort')

let frage;

function sleep () { return new Promise( (resolve,reject) => {
   setTimeout( () =>{ resolve("test2") },5555 ) })}

   function neueAufgabe(e) { new Promise((resolve,reject) =>{
  frage = questions[Math.floor(Math.random()*questions.length)];
  frageDiv.innerText = frage.question
  setTimeout ( () =>  {
    if ( antwortFeld.value.trim() === frage.answer){
      resolve(punkteDiv.innertext = Number ( punkteDiv.innertext ) + 100)
    }else
    {
      reject( punkteDiv.innerText = Number ( punkteDiv.innerText ) - 100)
    }
    antwortFeld.value=""
  }, 9999)
}
).then(neueAufgabe)
}

neueAufgabeButton.onclick = neueAufgabe
*/
var questions = [
  {question:'Was ist 3 + 5',answer:"8"},
  {question:'Wo liegt Berlin',answer:'Deutschland'},
  {question:'Wo liegt Tokyo',answer:'Japan'}
]

var frageDiv = document.getElementById('frage')
var punkteDiv = document.getElementById('punkte')
var neueAufgabeButton = document.getElementById('neu')
var antwortButton = document.getElementById('go')
var antwortFeld = document.getElementById('antwort')

let frage;

function sleep(){ return new Promise( (resolve,reject) => {
  setTimeout( ()=>{ resolve('test2') }, 1000 ) })}

function neueAufgabe (e) {
  new Promise(
    (resolve,reject)=>{
      frage = questions[Math.floor(Math.random()*questions.length)];
      frageDiv.innerText = frage.question
      setTimeout( ()=>{
        if ( antwortFeld.value.trim() === frage.answer ){
          resolve(punkteDiv.innerText = Number(punkteDiv.innerText) + 100)
        } else {
          reject(punkteDiv.innerText = Number(punkteDiv.innerText) - 100)
        }
        antwortFeld.value =""
      }, 10000 )
    }
  ).then(neueAufgabe)
}

neueAufgabeButton.onclick = neueAufgabe
