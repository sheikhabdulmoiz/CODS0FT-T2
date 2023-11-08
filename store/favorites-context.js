import {createContext, useState} from 'react';

export const FavoritesContext = createContext({
  favorites: [],
  resetIcon: undefined,
  addFavorites: () => {},
  resetIconHandler: () => {},
  updateState: () => {},
});

function FavoritesContextProvider({children}) {
  const [favorites, setFavorites] = useState([]);
  const [resetIcon, setResetIcon] = useState(undefined);
  const [updateStateFunction, setUpdateStateFunction] = useState(null);

  const updateState = stateUpdater => {
    setUpdateStateFunction(() => stateUpdater);
  };

  function addFavorites(favorites) {
    setFavorites(favorites);
  }

  function resetIconHandler(ico) {
    setResetIcon(ico);
  }

  // function onResetIcon(def) {
  //   return def;
  // }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorites,
        resetIconHandler,
        updateState,
        updateStateFunction,
        resetIcon
      }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;

// \\ value = {
//   favorites: favorites,
//   addFavorites: addFavorites,
//   onResetIcon: onResetIcon,
// };
