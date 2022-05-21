const countdown = document.getElementById("countdown");
const startStopButton = document.getElementById("start-stop");
const resetButton = document.getElementById("reset");
const pomodoroButton = document.getElementById("pomodoro");
const shortBreakButton = document.getElementById("short-break");
const longBreakButton = document.getElementById("long-break");
const titleText = document.getElementById("title");
const timeDisplayBox = document.getElementById("time-display");

let startingMinutes = 25;
let time = startingMinutes * 60;
let timerActive = true;

const displayTime = () => {
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;
	countdown.innerHTML = `${minutes < 10 ? "0" + minutes : minutes} : ${
		seconds < 10 ? "0" + seconds : seconds
	}`;
};

const checkTime = () => {
	return time >= 0;
};

const activateTimer = () => {
	timerActive = true;
};

const updateTime = () => {
	displayTime();
	time--;
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

const clickResetButton = () => {
	startStopButton.innerHTML = "Start";
	time = startingMinutes * 60;
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

const clickPomodoroButton = () => {
	changeCountdownAmount(25, "Pomodoro");
	startStopButton.innerHTML = "Start";
	timeDisplayBox.style.boxShadow = "2px 2px 2px 2px rgba(249, 15, 101, 0.804)";
};

const clickShortBreakButton = () => {
	changeCountdownAmount(5, "Short Break");
	startStopButton.innerHTML = "Start";
	timeDisplayBox.style.boxShadow = "2px 2px 2px 2px rgba(88, 166, 255, 0.804)";
};

const clickLongBreakButton = () => {
	changeCountdownAmount(10, "Long Break");
	startStopButton.innerHTML = "Start";
	timeDisplayBox.style.boxShadow = "2px 2px 2px 2px rgba(189, 80, 222, 0.804)";
};

startStopButton.addEventListener("click", clickStartStopButton);
resetButton.addEventListener("click", clickResetButton);
pomodoroButton.addEventListener("click", clickPomodoroButton);
shortBreakButton.addEventListener("click", clickShortBreakButton);
longBreakButton.addEventListener("click", clickLongBreakButton);
