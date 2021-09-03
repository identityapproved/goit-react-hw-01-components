import './App.css';
import userData from 'components/Profile/user.json';
import statisticData from 'components/StatisticSection/statistical-data.json';
import friendsData from 'components/FriendList/friends.json';
import transactionsData from 'components/TransactionHistory/transactions.json';
import { ProfileCard } from 'components/Profile/ProfileCard/ProfileCard';
import { StatisticSection } from '../StatisticSection/Section/StatisticSection';
import { Container } from './App.styled';
import { FriendList } from 'components/FriendList/ListEl/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <Container>
      <ProfileCard data={userData} />
      <StatisticSection stats={statisticData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionsData}/>
    </Container>
  );
};
