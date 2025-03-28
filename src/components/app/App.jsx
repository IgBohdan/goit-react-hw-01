import friendsData from "../../data/friendsData.json";
import transactionsData from "../../data/transactionsData.json";
import userData from "../../data/userData.json";
import FriendList from "../FriendList/FriendList";
import Profile from "../Profile/Profile";
import Transaction from "../Transactions/Transaction";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <Transaction iteams={transactionsData} />
    </>
  );
}
