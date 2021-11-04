let formTitle = document.querySelector('#form-title');
let formDescription = document.querySelector('#form-description');
let formImg = document.querySelector('#form-url');
let btn = document.querySelector('#btn');

btn.addEventListener('click', add_movie);


function add_movie(event) {
    event.preventDefault();

    let new_div = document.createElement('div');
    new_div.setAttribute("class", "movie");
    last_div = document.getElementsByClassName('movies-grid')[0].appendChild(new_div);

    let img = document.createElement('img');
    img.setAttribute('class', 'thumbnail');
    img.setAttribute('src', formImg.value);
    document.getElementById('movies-grid').lastChild.appendChild(img);

    let title = document.createElement('h1');
    title.setAttribute('class', 'movie-title');
    title.innerText = formTitle.value;
    document.getElementById('movies-grid').lastChild.appendChild(title);

    let description = document.createElement('p');
    description.setAttribute('class', 'movie-description');
    description.innerText = formDescription.value;
    document.getElementById('movies-grid').lastChild.appendChild(description);
}

// criando o addEventListener com a arrow function dentro do parâmetro
// btn.addEventListener('click', (event) => { event.preventDefault();});