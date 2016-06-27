// Fayadh Ahmed - Coursera Assignment 4 - 27-June-2016

(function (window) {

	// create object byeSpeaker, attach to global, with method speak(name)
	var byeSpeaker = {
		speak(name) {
			//speak method
			console.log(speakWord + " " + name);
		}
	}
	window.byeSpeaker = byeSpeaker;
	var speakWord = "Good Bye";
})(window);
