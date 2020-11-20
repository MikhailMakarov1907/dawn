const $  = (e) => document.querySelector(e),
      $$ = (e) => document.querySelectorAll(e);

function engines () {
  return {
    g: ['https://google.com/search?q=', 'Google'],
	s: ['https://soundcloud.com/search?q=', 'Soundcloud']
    m: ['https://mangasee123.com/search/?name=', 'Mangasee123'],
    y: ['https://youtube.com/results?search_query=', 'Youtube'],
	b: ['https://bato.to/search?q=', 'Bato.to']
  };
}

const { parse, stringify } = JSON;

const nodes = (elem) =>
      Array.prototype.slice.call($(elem).children);

var place = localStorage.place || 'new york';

$('.weather .edit').onclick = () =>
  $('.weather-config').classList.add('show');

$('.weather-config input').onkeyup = (e) => {
  if (e.key == 'Enter') {
    localStorage.place = e.target.value;
    window.location.reload();
  }
  else if (e.keyCode == 27)
    e.target.parentNode.classList.remove('show');
};

(function () {
  if (localStorage.getItem("todo") === null)
    localStorage.todo = '[]';
})();

new Todo().display;
new Weather(place).getWeather;
new Powerline();
