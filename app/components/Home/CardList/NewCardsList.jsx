import NewCardsFragment from './NewCardsFragment';

import Styles from './CardLists.module.css'

const NewCardsList = () => {
    return (
        <section className={Styles["list-section"]}>
            <h2 className={Styles["list-section__title"]} id="new">
                Новинки
            </h2>
            <ul className={Styles["cards-list"]}>
                <NewCardsFragment/>
            </ul>
        </section>
    )
}

export default NewCardsList;