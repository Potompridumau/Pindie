import { getGamesByCategory } from "./data/data-utils.js";

import Banner from "./components/Home/Banner/Banner";
import Promo from "./components/Home/Promo/Promo";
import CardsList from "./components/Home/CardList/CardList";

export default function Home() {

  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");

  return (
    <main className="main">
      <Banner />
      <CardsList id='popular'
        title='Популярное'
        data={popularGames}>
      </CardsList>
      <CardsList id='new'
        title='Новинки'
        data={newGames}>
      </CardsList>
      <Promo />
    </main>
  );
}
