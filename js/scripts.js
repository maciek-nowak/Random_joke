var url = 'http://api.icndb.com/jokes/random',
	button,
	paragraph;

function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function() {
		var response = JSON.parse(xhr.response);
		paragraph.innerText = response.value.joke;
	});
	xhr.send();
};

getJoke();
button = document.getElementById('get-joke');
button.addEventListener('click', function() {
	getJoke();
});
paragraph = document.getElementById('joke');