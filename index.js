const countdown = document.getElementById("countdown");
const startButton = document.getElementById("start");

let startingMinutes = 25;
let time = startingMinutes * 60;

const displayTime = () => {
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;
	countdown.innerHTML = `${minutes < 10 ? "0" + minutes : minutes} : ${
		seconds < 10 ? "0" + seconds : seconds
	}`;
};

const updateTime = () => {
	displayTime();
	time--;
};

const startCountdown = () => {
	setTimeout(
		() => {
			updateTime();
			startCountdown();
		},

		1000
	);
};

startButton.addEventListener("click", startCountdown);
