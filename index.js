let homescoreEl = document.getElementById("home-score");
let guestscoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;



function add1HomePoint() {
	homeScore += 1
	homescoreEl.textContent = homeScore;
}

function add2HomePoint() {
	homeScore += 2
	homescoreEl.textContent = homeScore;
}

function add3HomePoint() {
	homeScore += 3
	homescoreEl.textContent = homeScore;
}


function add1GuestPoint() {
	guestScore += 1
	guestscoreEl.textContent = guestScore;
}

function add2GuestPoint() {
	guestScore += 2
	guestscoreEl.textContent = guestScore;
}

function add3GuestPoint() {
	guestScore += 3
	guestscoreEl.textContent = guestScore;
}