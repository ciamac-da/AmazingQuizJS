const frageDiv = document.getElementById('frage')
const punkteDiv = document.getElementById('punkte')
const neueAufgabeButton = document.getElementById('neu')
const antwortButton = document.getElementById('go')
const antwortFeld = document.getElementById('antwort')

const questions = [
  {question:'What is the result of 3 + 5',answer:"8"},
  {question:'What is the capital of Germany',answer:'berlin'},
  {question:'What is the capital of Japan',answer:'tokio'},
  {question : "What is the standard distance(in meter) between the target and archer in Olympics?", answer : "70"},
  {question : "Which is the highest number on a standard roulette wheel?", answer : "36"}
]

// To focus on textarea automatically
antwortFeld.focus()

let frage;



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
