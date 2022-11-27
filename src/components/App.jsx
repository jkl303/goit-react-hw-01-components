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
      <TransactionHistory transactions={transactions} />
    </>
  );
};
