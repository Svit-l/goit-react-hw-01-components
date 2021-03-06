import s from './App.module.css';
import user from '../Profile/user.json';
import { Profile } from '../Profile';
import data from '../Statistics/data.json';
import { Statistics } from '../Statistics';
import friendsData from '../FriendList/friends.json';
import { FriendList } from '../FriendList';
import transactions from '../TransactionHistory/transactions.json';
import { TransactionHistory } from '../TransactionHistory';

export function App() {
  // console.log(data);
  return (
    <>
      <div>
        <div className={s.container}>
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
        <div className={s.container} style={{ background: '#fff' }}>
          <h1>Statistics</h1>
          <Statistics stats={data} title="Upload stats" />
        </div>
        <div className={s.container}>
          <h1>FriendList</h1>
          <FriendList friends={friendsData} />
        </div>
        <div className={s.container} style={{ background: '#fff' }}>
          <h1>Transaction History</h1>
          <TransactionHistory items={transactions} />
        </div>
      </div>
    </>
  );
}
