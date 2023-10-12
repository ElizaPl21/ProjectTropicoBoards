// const BASE_URL= 'https://pokeapi.co/api/v2/';
const pokemonContainer = document.querySelector(".pokemon-container");
const division = document.querySelector(".list-group.list-group-flush ");


//Fetch no async
function fetchPokemon(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res=>res.json()
        )
        .then(data=>{
            crearPokemon(data);
        });     
}

function fetchPokemons(number){
    for (let i = 1; i <= number; i++ ){
        fetchPokemon(i);
    }
}

function crearPokemon(pokemon){
    const card = document.createElement('div');
    card.style.setProperty('width', '18rem','card-container');
    card.classList.add('card');

   

    const sprite = document.createElement('img');
    sprite.classList.add("card-img-top","imagencss");
    sprite.alt = "..."; 
    sprite.src = pokemon.sprites.front_default;

    const number = document.createElement('li');
    number.classList.add('list-group-item');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;


    const name = document.createElement('li');
    name.classList.add('list-group-item');
    name.textContent = pokemon.name

    
    card.appendChild(sprite);
    card.appendChild(number);
    card.appendChild(name);
   
   division.appendChild(card) 
   pokemonContainer.appendChild(division);
   
}
fetchPokemons(10);

// function createCard (pikachu){
//     document.getElementById('name').textContent= "nombre: " + pikachu.name;
//      document.getElementById('id').textContent= "numero de pokemon: " + pikachu.id;
//      document.getElementById('weigh').textContent= "peso: " + pikachu.weight;
//      document.getElementById('img').src= pikachu.sprites.front_shiny_female;
//  } 