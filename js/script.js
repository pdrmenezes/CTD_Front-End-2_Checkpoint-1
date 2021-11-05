let formTitle = document.querySelector('#form-title');
let formDescription = document.querySelector('#form-description');
let formImg = document.querySelector('#form-url');
let formWatched = document.querySelector('input[type=\'checkbox\']');
let formMovieShow = document.querySelectorAll('input[type=\'radio\']');
let btn = document.querySelector('#btn');

btn.addEventListener('click', add_movie);



function add_movie(event) {
    event.preventDefault();

    // creating div with class 'movie' and appending after template div
    let new_div = document.createElement('div');
    new_div.setAttribute("class", "movie");
    last_div = document.getElementsByClassName('movies-grid')[0].appendChild(new_div);

    // creating an 'img' object with class 'thumbnail', attributing the url from the form as its 'src' value and placing it inside the created div on the html
    let img = document.createElement('img');
    img.setAttribute('class', 'thumbnail');
    img.setAttribute('src', formImg.value);
    document.getElementById('movies-grid').lastChild.appendChild(img);

    // checking which radio button was selected and getting its value 'movie' or 'show'
    let movieOrShow;
    for (let i = 0; i < formMovieShow.length; i++) {
        if (formMovieShow[i].checked) {
            movieOrShow = formMovieShow[i].value;
            break;
        }
    }
    // creating the 'span' element, giving it a 'movie-tag' class, inserting the text based on the radio button selected into it and placing it after the image in the html
    let tag = document.createElement('span');
    tag.setAttribute('class', 'movie-tag');
    tag.innerText = movieOrShow;
    document.getElementById('movies-grid').lastChild.appendChild(tag);

    // creating the 'h1' element, giving it a 'movie-title' class, inserting the text captured from the form and adding it in the html
    let title = document.createElement('h1');
    title.setAttribute('class', 'movie-title');
    title.innerText = formTitle.value;
    document.getElementById('movies-grid').lastChild.appendChild(title);

    // creating the 'p' element, giving it a 'movie-description' class, inserting the text captured from the form and adding it in the html
    let description = document.createElement('p');
    description.setAttribute('class', 'movie-description');
    description.innerText = formDescription.value;
    document.getElementById('movies-grid').lastChild.appendChild(description);

    // attributing a text based on whether or not the box is checked to the 'p' element with a 'movie-watched' class and inserting the text in the html
    let watchedTxt;
    formWatched.checked ? watchedTxt = '✅ Watched' : watchedTxt = '❌ Not watched';
    let watched = document.createElement('p');
    watched.setAttribute('class', 'movie-watched');
    watched.innerText = watchedTxt;
    document.getElementById('movies-grid').lastChild.appendChild(watched);
}

// creating the addEventListener with an arrow function as a paramater
// btn.addEventListener('click', (event) => { event.preventDefault();});