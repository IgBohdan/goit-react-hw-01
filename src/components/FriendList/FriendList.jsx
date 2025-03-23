import FriendListItem from "./ListIteam/FriendListItem";
import style from "./list.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem data={friend} />
        </li>
      ))}
    </ul>
  );
}
