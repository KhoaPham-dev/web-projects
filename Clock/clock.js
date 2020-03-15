function updateTime(){
	let currentTime = new Date();
	let currentHours = currentTime.getHours();
	let currentMinutes = currentTime.getMinutes();
	let currentSeconds = currentTime.getSeconds();
	currentSeconds = (currentSeconds < 10) ? '0' + currentSeconds : currentSeconds; 
	currentMinutes = (currentMinutes < 10) ? '0' + currentMinutes : currentMinutes;
	let timeOfDay = (currentHours < 12) ? 'AM' : 'PM';
	currentHours = (currentHours > 12) ? currentHours -  12 : currentHours;
	let time = `${currentHours}:${currentMinutes}:${currentSeconds} ${timeOfDay}`;
	document.getElementById("clock").firstChild.nodeValue = time;
	console.log(1);
}
 updateTime();
 setInterval(updateTime, 1000);