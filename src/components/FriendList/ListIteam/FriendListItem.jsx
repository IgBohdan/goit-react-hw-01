import style from "./iteam.module.css";
export default function FriendListItem({ data }) {
  return (
    <div className={style.block}>
      <img className={style.img} src={data.avatar} alt="Avatar" width="48" />
      <p className={style.name}>{data.name}</p>
      <p
        className={`${style.status} ${
          data.isOnline ? style.online : style.offline
        }`}
      >
        {data.isOnline ? "online" : "offline"}
      </p>
    </div>
  );
}
