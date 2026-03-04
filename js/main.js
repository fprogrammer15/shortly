const elUrlShortenerForm = document.querySelector('.js-url-shortener-form');
const elUrlShortenerResults = document.querySelector('.url-shortener-results');

elUrlShortenerForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    elUrlShortenerResults.classList.add('url-shortener__results--open');
});