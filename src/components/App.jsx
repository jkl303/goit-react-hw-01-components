import { GlobalStyle } from './GlobalStyle';

import { Profile } from './profile/Profile';
import user from 'user.json';

import { Statistics } from './statistics/Statistics';
import data from 'data.json';

import { FriendList } from './friendList/FriendList';
import friends from 'friends.json';

import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </>
  );
};
