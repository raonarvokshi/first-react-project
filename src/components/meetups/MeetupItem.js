import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card"
import FavoritesContext from "../../store/Favorite-context";

function MeetupItem(props) {
    const favoriteCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)

    function handleToggleFavoriteStatus() {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id);
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.img,
                address: props.address
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.img} alt={props.title} />
                </div>

                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>

                <div className={classes.actions}>
                    <button onClick={handleToggleFavoriteStatus}>
                        {itemIsFavorite ? "Remove from favorites" : "To Favorites"}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;