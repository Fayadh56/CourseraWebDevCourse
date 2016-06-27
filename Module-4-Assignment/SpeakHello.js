// Fayadh Ahmed - Coursera Assignment 4 - 27-June-2016

(function (window) {
	// create obj helloSpeaker, with the function speak(name) inside of it
	var helloSpeaker = {
		speak(name) : console.log(speakWord + " " + name)
		
	}
	// expose it to global, using window
	window.helloSpeaker = helloSpeaker;
	var speakWord = "Hello";
})(window);

