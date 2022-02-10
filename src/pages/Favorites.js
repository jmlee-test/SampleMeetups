import { useContext } from "react";

import FavoritesContext from "../store/favorites-contex";
import MeetupList from "../components/layout/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.favorites.length === 0) {
    content = <p>You got no favorites yet. Start adding some</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
