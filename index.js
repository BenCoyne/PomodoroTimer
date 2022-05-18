const countdown = document.getElementById("countdown");
const startStopButton = document.getElementById("start-stop");
const resetButton = document.getElementById("reset");
const pomodoroButton = document.getElementById("pomodoro");
const shortBreakButton = document.getElementById("short-break");
const longBreakButton = document.getElementById("long-break");
const titleText = document.getElementById("title");

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

const changeCountdownAmount = (mins, text) => {
	startingMinutes = mins;
	time = startingMinutes * 60;
	titleText.innerHTML = text;
	timerActive = false;
	displayTime();
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

const clickResetButton = () => {
	startStopButton.innerHTML = "Start";
	time = startingMinutes * 60;
	timerActive = false;
	displayTime();
};

const clickPomodoroButton = () => {
	changeCountdownAmount(25, "Pomodoro");
};

const clickShortBreakButton = () => {
	changeCountdownAmount(5, "Short Break");
};

startStopButton.addEventListener("click", clickStartStopButton);
resetButton.addEventListener("click", clickResetButton);
shortBreakButton.addEventListener("click", clickShortBreakButton);
pomodoroButton.addEventListener("click", clickPomodoroButton);
