const countdown = document.getElementById("countdown");
const startStopButton = document.getElementById("start-stop");

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

const checkTime = () => {
	return time >= 0;
};

const activateTimer = () => {
	timerActive = true;
};

const startCountdown = () => {
	setTimeout(() => {
		if (timerActive) {
			if (checkTime()) {
				updateTime();
				startCountdown();
			}
		}
	}, 1000);
};

const clickStartStopButton = () => {
	if (startStopButton.innerHTML === "Start") {
		startStopButton.innerHTML = "Stop";
		activateTimer();
		startCountdown();
	} else {
		startStopButton.innerHTML = "Start";
		timerActive = false;
	}
};

startStopButton.addEventListener("click", clickStartStopButton);
