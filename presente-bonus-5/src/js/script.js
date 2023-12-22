/* eslint-disable linebreak-style */


var tmin = 7;
var tseg = 30;
  
var tpitch = (tmin * 60000) + (tseg * 1000);
setTimeout('show()', tpitch);
console.log('pitch em:', tpitch,'ms - totalizando',tmin,'min','e',tseg,'seg'); 
function show(){
var list = document.getElementsByClassName('ocultar');
for (var i = 0; i < list.length; i++) {
    list[i].style.visibility = 'visible';
    list[i].style.display = 'block';
    }
}


const animateSpin = () => {
  const roleta2 = document.querySelector('#roleta2');
  if (roleta2) {
    roleta2.classList.remove('spinner');
    roleta2.classList.add('wheel__spinner_animated-1');

    // Play the audio
    const rouletteAudio = document.getElementById('rouletteAudio');
    if (rouletteAudio) {
      rouletteAudio.play();
    }

    // Show the pop-up after 12 seconds
    setTimeout(() => {
      roleta2.classList.remove('wheel__spinner_animated-1');

      // Show the pop-up
      showPopup();

      const winAudio = document.getElementById('winAudio');
      if (winAudio) {
        winAudio.play();
      }

      const btn = document.getElementById
      ("button-roulette")
      if(btn){
        btn.style.display = "none"
      }

      // // Your existing code
      // const formElem = document.querySelector('form');
      // const pageContent = document.querySelector('#page-content');
      // if (formElem) formElem.classList.remove('hide-me');
      // if (pageContent) pageContent.classList.add('page-content');
    }, 12000);
  }
};
const animateSteps = (number) => {
  const stepLoaded = document.querySelector(`.step-loaded.step${number}`);
  const barLoaded = document.querySelector(`.bar-loaded.step${number}`);
  if (stepLoaded) stepLoaded.classList.add('loaded');
  setTimeout(() => {
    if (barLoaded) barLoaded.classList.add('loaded');
  }, 12000);
};

const addSpinAnimation = (element) => {
  element.addEventListener('click', () => {
    animateSpin();
    animateSteps(1);

    // setTimeout(() => {
    //   try {
    //     // Get the elements by their class name
    //     const section01 = document.querySelector('.section-01');
    //     const section02 = document.querySelector('.section-02');

    //     // Change the display property
    //     if (section01 && section02) {
    //       section01.style.display = 'none';
    //       section02.style.display = 'block';
    //     }
    //   } catch (error) {
    //     console.error("Error changing section displays: ", error);
    //   }
    // }, 6100);
  });
};

// Function to show the pop-up
function showPopup() {
  // Customize the pop-up content and styles as needed
  const popup = document.getElementById('popup');
  if (popup) {
    popup.style.display = 'flex';

    // Add a click event listener to the pop-up
    popup.addEventListener('click', () => {
      // Get the elements by their class name
      const section01 = document.querySelector('.section-01');
      const section02 = document.querySelector('.section-02');

      // Change the display property
      if (section01 && section02) {
        section01.style.display = 'none';
        section02.style.display = 'block';
      }

      // Close the pop-up (optional)
      popup.style.display = 'none';
    });
  }
}
// Add event listener to all elements with the class .runSpin
document.querySelectorAll('.runSpin').forEach(addSpinAnimation);
