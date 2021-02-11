const otworz = document.getElementById('open')
const zamknij = document.getElementById('close')
const drzwi1 = document.querySelector('.drzwi1')
const drzwi2 = document.querySelector('.drzwi2')
const display = document.querySelector('.display')
const btn = document.querySelectorAll('.btn')

let tablica = [0]

const otwieranieDrzwi = () => {
  drzwi1.style.width = '0'
  drzwi2.style.width = '0'
}
const zamykanieDrzwi = () => {
  drzwi1.style.width = `154px`
  drzwi2.style.width = `154px`
}


function animateUp(display, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    display.innerHTML = Math.floor(progress * (end - start) + start) + `<i class="fas fa-arrow-up"></i>`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

function animateDown(display, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    display.innerHTML = Math.floor(progress * (end - start) + start) + `<i class="fas fa-arrow-down"></i>`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
  
}

const winda = () => {
  btn.forEach((element) => {
    element.addEventListener('click', () => {
     otworz.onclick=null
      zamykanieDrzwi()
      tablica.push(element.textContent)

      for (i = 0; i < tablica.length; i++) {
        if (tablica[tablica.length - 1] > tablica[tablica.length - 2]) {
          animateUp(display, parseInt(tablica[tablica.length - 2]), parseInt(tablica[tablica.length - 1]), 5000);
          setTimeout(otwieranieDrzwi, 5000)
       
        }
        if (tablica[tablica.length - 1] < tablica[tablica.length - 2]) {
          animateDown(display, parseInt(tablica[tablica.length - 2]), parseInt(tablica[tablica.length - 1]), 5000);
          setTimeout(otwieranieDrzwi, 5000)
         
        }
        
        
      }
    })
  })
  
}
winda()