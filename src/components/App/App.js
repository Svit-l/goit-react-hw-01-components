import './App.css';
import user from '../Profile/user.json';
import { Profile } from '../Profile/Profile';
import data from '../Statistics/data.json';
import { Statistics } from '../Statistics/Statistics';
import friendsData from '../FriendList/friends.json';
import { FriendList } from '../FriendList/FriendList';
import transactions from '../TransactionHistory/transactions.json';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

export function App() {
  // console.log(data);
  return (
    <>
      <div>
        <h1>Profile</h1>
        <Profile
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics stats={data} />
      </div>
      <div>
        <h1>FriendList</h1>
        <FriendList friends={friendsData} />
      </div>
      <div>
        <h1>Transaction History</h1>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
}
