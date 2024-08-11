import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile({
    name, tag, location, image, stats: { followers, views, likes } })
{
    return (
        <div className={clsx(css.container)}>
            <div className={clsx(css.wrapper)}>
                <img className={clsx(css.image)}
                    src={image}
                    alt={name}
                />
                <p className={clsx(css.name)}>{name}</p>
                <p className={clsx(css.tag)}>@{tag}</p>
                <p className={clsx(css.text)}>{location}</p>
            </div>
            
            <ul className={clsx(css.list)}>
                <li className={clsx(css.item)}>
                    <span className={clsx(css.text)}>Followers</span>
                    <span className={clsx(css.value)}>{followers}</span>
                </li>

                <li className={clsx(css.item)}>
                    <span className={clsx(css.text)}>Views</span>
                    <span className={clsx(css.value)}>{views}</span>
                </li>
                
                <li className={clsx(css.item)}>
                    <span className={clsx(css.text)}>Likes</span>
                    <span className={clsx(css.value)}>{likes}</span>
                </li>
            </ul>
        </div>
    )
}
