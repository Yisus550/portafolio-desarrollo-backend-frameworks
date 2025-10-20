const getPokemonById = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url).then((response) => {
    response.json().then((pokemon) => {
      console.log(pokemon.name);
    });
  });
};

const getPokemonById2 = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  fetch(url).then((response) => {
    response.json().then((pokemon) => {
      callback(pokemon.name);
    });
  });
};

const getPokemonById3 = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  return fetch(url)
    .then((response) => response.json())
    .then((pokemon) => pokemon.name);
};
