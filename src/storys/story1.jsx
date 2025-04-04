
  import { create } from 'zustand'



const usePokemonStore = create((set) => ({
    favorites: [],
    removeFavorite: (pokemonToRemove) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (pokemon) => pokemon.name !== pokemonToRemove.name
          ),
        })),
    addFavorite: (pokemon) =>
      set((state) => {
        if (state.favorites.find((fav) => fav.name === pokemon.name))
          return state;
        return { favorites: [...state.favorites, pokemon] };
      }),
  }));
  

  export default usePokemonStore;
