// BACKGROUND
bg = document.querySelector('.background');

//BUTTON
rollBtn = document.querySelector('.btn-roll');

// MODAL START
modal = document.querySelector('.modal');
twoPlayers = document.querySelector('.two-players');
threePlayers = document.querySelector('.three-players');
fourPlayers = document.querySelector('.four-players');

// TABLE
table = document.querySelector('.table');
diceDiv = document.querySelector('.dice-div');
diceImg = document.querySelector('.dice-img');

pos1 = document.querySelector('.pos-1');

// P1 SQUARE
p1Square = document.querySelector('.p1-square');

p1_1 = document.querySelector('.p1-1');
p1_2 = document.querySelector('.p1-2');
p1_3 = document.querySelector('.p1-3');
p1_4 = document.querySelector('.p1-4');

let p1_1StepCounter = 1;
let p1_2StepCounter = 1;
let p1_3StepCounter = 1;
let p1_4StepCounter = 1;

// P2 SQUARE
p2Square = document.querySelector('.p2-square');

p2_1 = document.querySelector('.p2-1');
p2_2 = document.querySelector('.p2-2');
p2_3 = document.querySelector('.p2-3');
p2_4 = document.querySelector('.p2-4');

// P3 SQUARE
p3Square = document.querySelector('.p3-square');

p3_1 = document.querySelector('.p3-1');
p3_2 = document.querySelector('.p3-2');
p3_3 = document.querySelector('.p3-3');
p3_4 = document.querySelector('.p3-4');

// P4 SQUARE
p4Square = document.querySelector('.p4-square');

p4_1 = document.querySelector('.p4-1');
p4_2 = document.querySelector('.p4-2');
p4_3 = document.querySelector('.p4-3');
p4_4 = document.querySelector('.p4-4');

p1Figures = document.getElementsByTagName('figure1');
p2Figures = document.getElementsByTagName('figure2');
p3Figures = document.querySelectorAll('.figure3');
p4Figures = document.querySelectorAll('.figure4');

// PLAYER SELECT

gameStart2 = function() {
  modal.classList.add('hidden');
  table.classList.remove('hidden');
  p1Square.classList.remove('hidden');
  p2Square.classList.remove('hidden');
  p3Square.classList.remove('hidden');
  p4Square.classList.remove('hidden');
  diceDiv.classList.remove('hidden');
  rollBtn.classList.remove('hidden');
  p1Square.classList.add('turn');
  if (p1Square.classList.contains('turn')) {
    bg.style.background = 'linear-gradient(135deg, #B22331 0%, #871B26 100%)';
  } else if (p2Square.classList.contains('turn')) {
    bg.style.background = 'linear-gradient(135deg, #0575E6 0%, #248FFA 100%)';
  }

  p3Figures.forEach(figure =>{
    figure.classList.add('disabled');
  })
  p4Figures.forEach(figure =>{
    figure.classList.add('disabled');
  })
  }


gameStart3 = function() {
  modal.classList.add('hidden');
  table.classList.remove('hidden');
  p1Square.classList.remove('hidden');
  p2Square.classList.remove('hidden');
  p3Square.classList.remove('hidden');
  p4Square.classList.remove('hidden');
  diceDiv.classList.remove('hidden');
  rollBtn.classList.remove('hidden');
  p1Square.classList.add('turn');
  if (p1Square.classList.contains('turn')) {
    bg.style.background = 'linear-gradient(135deg, #B22331 0%, #871B26 100%)';
  } else if (p2Square.classList.contains('turn')) {
    bg.style.background = 'linear-gradient(135deg, #0575E6 0%, #248FFA 100%)';
  }

  p4Figures.forEach(figure =>{
    figure.classList.add('disabled');
  })
}

gameStart4 = function() {
  modal.classList.add('hidden');
  table.classList.remove('hidden');
  p1Square.classList.remove('hidden');
  p2Square.classList.remove('hidden');
  p3Square.classList.remove('hidden');
  p4Square.classList.remove('hidden');
  rollBtn.classList.remove('hidden');
  diceDiv.classList.remove('hidden');

  p1Square.classList.add('turn');
  if (p1Square.classList.contains('turn')) {
    bg.style.background = 'linear-gradient(135deg, #B22331 0%, #871B26 100%)';
  } else if (p2Square.classList.contains('turn')) {
    bg.style.background = 'linear-gradient(135deg, #0575E6 0%, #248FFA 100%)';
  }
}

twoPlayers.addEventListener('click', gameStart2);
threePlayers.addEventListener('click', gameStart3);
fourPlayers.addEventListener('click', gameStart4);



// DICE ROLL

rollBtn.addEventListener('click', function() {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `images/dice${dice}.png`;

  if (dice === 6 && p1_1.classList.contains('in')) {
      p1_1.addEventListener('click', ()=>{
        p1_1.style.left='200px';
        p1_1.style.bottom = '60px'
        p1_1.classList.remove('in');
        p1_1.classList.add('out');
      })
    } else if(dice !== 6 && p1_1.classList.contains('out')){
      p1_1.addEventListener('click', ()=>{
        p1_1.style.transform = `translateY(${dice * (-35)}px)`
      })
    }

  if(dice === 6 && p1_1.classList.contains('out')){
    p1_2.addEventListener('click', ()=>{
      p1_2.style.left='200px';
      p1_2.classList.remove('in');
      p1_2.classList.add('out');
    })
  }

  if(dice === 6 && p1_2.classList.contains('out')){
    p1_3.addEventListener('click', ()=>{
      p1_3.style.left='200px';
      p1_3.style.bottom='60px';
      p1_3.classList.remove('in');
      p1_3.classList.add('out');
    })
  }

  if(dice === 6 && p1_3.classList.contains('out')){
    p1_4.addEventListener('click', ()=>{
      p1_4.style.left='200px';
      p1_4.style.bottom='60px';
      p1_4.classList.remove('in');
      p1_4.classList.add('out');
    })
  }





















})

  // if(dice === 2) {
  //     if (p1_1.classList.contains('out')) {
  //         p1_1.addEventListener('click', () => {
  //         p1_1.style.bottom = "30px"
  //       })
  //     }
  //   }
  // })
