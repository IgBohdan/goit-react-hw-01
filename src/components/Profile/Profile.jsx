import style from "./profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={style.block}>
      <div className={style.userblock}>
        <img className={style.userphoto} src={image} alt="User avatar" />
        <p className={style.username}>Petra Marica</p>
        <p className={style.usertag}>@pmarica</p>
        <p className={style.userlocation}>Salvador, Brasil</p>
      </div>

      <ul className={style.list}>
        <li className={style.listiteam}>
          <span className={style.listhead}>Followers</span>
          <span className={style.listvalue}>1000</span>
        </li>
        <li className={style.listiteam}>
          <span className={style.listhead}>Views</span>
          <span className={style.listvalue}>2000</span>
        </li>
        <li className={style.listiteam}>
          <span className={style.listhead}>Likes</span>
          <span className={style.listvalue}>3000</span>
        </li>
      </ul>
    </div>
  );
}
