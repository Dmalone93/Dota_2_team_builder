document.addEventListener('DOMContentLoaded', () => {

  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', submitButton);

  const deleteCharacterButton = document.querySelector('#delete-character');
  deleteCharacterButton.addEventListener('click', deleteClick);

});

//--------------------------------------------------------

const submitButton = function (event) {
  event.preventDefault();
  const singleCharacter = createSingleCharacter(event.target);
 team = (event.target.team.value === "Dire") ? 'team-dire' : ' team-radient';
 const teamDiv = document.getElementsByClassName(team)[0];
 teamDiv.appendChild(singleCharacter);

 event.target.reset();
};

//----------------------------------------------------------

const createSingleCharacter = function (event) {

const singleCharacter = document.createElement('ul');
singleCharacter.classList.add('character-list-item');

const title = document.createElement('h2');
title.textContent = event.title.value;
singleCharacter.appendChild(title);

const type = document.createElement('h3');
type.textContent = event.type.value;
singleCharacter.appendChild(type);

return singleCharacter;
}

//----------------------------------------------------------

const deleteClick = function (event) {
  const teamDiv = document. querySelector('#character-list');
  teamDiv.innerHTML = ''
console.log(teamDiv)
}

//----------------------------------------------------------
