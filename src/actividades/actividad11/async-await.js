export const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching Pokémon with ID ${id}: ${data.message}`);
  }

  const data = await response.json();
  return data.name;
};
