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

// P1 SQUARE
p1Square = document.querySelector('.p1-square');

p1_1 = document.querySelector('.p1-1');
p1_2 = document.querySelector('.p1-2');
p1_3 = document.querySelector('.p1-3');
p1_4 = document.querySelector('.p1-4');

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

p1Length = p1Square.getElementsByTagName('div');
p2Length = p2Square.getElementsByTagName('div');
p3Length = p3Square.getElementsByTagName('div');
p4Length = p4Square.getElementsByTagName('div');

// PLAYER SELECT

gameStart2 = function (){
  modal.classList.add('hidden');
  table.classList.remove('hidden');
  p1Square.classList.remove('hidden');
  p2Square.classList.remove('hidden');
  p3Square.classList.remove('hidden');
  p4Square.classList.remove('hidden');
  diceDiv.classList.remove('hidden');
  rollBtn.classList.remove('hidden');
  bg.style.background = 'linear-gradient(135deg, #B22331 0%, #871B26 100%)';

  for(i = 0; i < p3Length.length; i++){
    p3Length[i].classList.add('disabled');
    p4Length[i].classList.add('disabled');
  }
}

gameStart3 = function (){
  modal.classList.add('hidden');
  table.classList.remove('hidden');
  p1Square.classList.remove('hidden');
  p2Square.classList.remove('hidden');
  p3Square.classList.remove('hidden');
  p4Square.classList.remove('hidden');
  diceDiv.classList.remove('hidden');
  rollBtn.classList.remove('hidden');
  for(i = 0; i < p3Length.length; i++){
    p4Length[i].classList.add('disabled');
  }
}

gameStart4 = function (){
  modal.classList.add('hidden');
  table.classList.remove('hidden');
  p1Square.classList.remove('hidden');
  p2Square.classList.remove('hidden');
  p3Square.classList.remove('hidden');
  p4Square.classList.remove('hidden');
  rollBtn.classList.remove('hidden');
  diceDiv.classList.remove('hidden');
}

twoPlayers.addEventListener('click', gameStart2);
threePlayers.addEventListener('click', gameStart3);
fourPlayers.addEventListener('click', gameStart4);

// DICE ROLL

rollBtn.addEventListener('click', function(){
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `images/dice${dice}.png`;

  if(dice === 6){
    console.log('congrats');
  }
})
