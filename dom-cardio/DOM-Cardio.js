// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.querySelector('body').appendChild(div);

// make an unordered list
const ul = document.createElement('ul');

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const liOne = document.createElement('li');
const liTwo = document.createElement('li');
const liThree = document.createElement('li');

liOne.innerHTML = 'one';
liTwo.innerHTML = 'two';
liThree.innerHTML = 'three';

ul.appendChild(liOne);
ul.appendChild(liTwo);
ul.appendChild(liThree);

div.appendChild(ul);

// create an image
const img = document.createElement('img');

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
img.src = 'https://picsum.photos/600/350';
img.width = '250';
img.classList.add('cute');
img.alt = 'Cute Puppy';

div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const divTwo = document.createElement('div');
const htmlString = `<p>Paragraph one.</p><p>Paragraph two.</p>`;

divTwo.innerHTML = htmlString;

div.insertAdjacentElement('afterbegin', divTwo);

// add a class to the second paragraph called warning
// remove the first paragraph
divTwo.childNodes[1].classList.add('warning');
divTwo.childNodes[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// function generatePlayerCard(name, age, height) {
// 	return [name, age, height];
// };

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
	return `
		<div class="playerCard">
			<h2>${name} — ${age}</h2>
			<p>They are ${height} and ${age} years old. In Dog years this person would be ${age*7}. That would be a tall dog!</p>
			<button class="delete" type="button">&times; Delete</button>
		</div>
	`
};


// make a new div with a class of cards
const card = document.createElement('div');
card.classList.add('cards');

// make 4 player cards using generatePlayerCard
const playerOne 	= generatePlayerCard('Rosa', 45, 1.60);
const playerTwo 	= generatePlayerCard('Silvio', 34, 1.78);
const playerThree 	= generatePlayerCard('Margarita', 25, 1.57);
const playerFour 	= generatePlayerCard('Jose', 36, 1.98);

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
card.innerHTML = playerOne + playerTwo + playerThree + playerFour;

document.querySelector('body').insertAdjacentElement('afterbegin', card);

// select all the buttons!
// make out delete function
// loop over them and attach a listener

const buttons = document.querySelectorAll('.delete');

function deleteCard(event) {
	const buttonClicked = event.currentTarget;
	// buttonClicked.parentElement.remove();
	buttonClicked.closest('.playerCard').remove();
	console.log(event.currentTarget);
};

buttons.forEach(button => button.addEventListener('click', deleteCard));
 