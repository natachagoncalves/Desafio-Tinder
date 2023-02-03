const cardArea = document.querySelector('#cardArea');

const getUsers = async (quantity) => {
    const url = `https://randomuser.me/api/?results=${quantity}`;
 
    const res = await fetch(url);
    const {results} = await res.json();
    results.forEach(item => {
        buildCard(item.name.first, item.name.last, item.dob.age, item.picture.large);
    });
}

const buildCard = (firstName, lastName, age, picture) => {
	const cardTemplate = document.getElementById('cardTemplate');
	const newCard = cardTemplate.content.cloneNode(true);

	newCard.querySelector('.user-picture').src = picture;
	newCard.querySelector('.user-info').textContent = `${firstName} ${lastName}, ${age} `;

	cardArea.insertBefore(newCard, cardArea.firstElementChild);
}

function dislike() {
	const card = this.event.target.parentElement.parentElement;
	card.classList.add('card-dislike');
	setTimeout(() => card.parentElement.removeChild(card), 500);
	getUsers(1);
}

function like() {
	const card = this.event.target.parentElement.parentElement;
	card.classList.add('card-like');
	setTimeout(() => card.parentElement.removeChild(card), 500);
	getUsers(1);
}

getUsers(5);

