import classes from './App.module.css'
import Card from './Card';
import { useState } from 'react';

function App() {

  const [isLeaveCard, setIsLeaveCard] = useState(false)

  const leaveCardHandler = (type) => {
    setIsLeaveCard(type)
  }

  

  return (
    <div className={classes.main}>
      {isLeaveCard && <span className={classes.title}>Ты сегодня покормил кота?</span>}
      <div className={classes.container}>
        <Card taste='с фуа-гра' weight='0,5'
        text='Чего сидишь? Порадуй котэ,'
        link='купи.' isAvailable={true} quantity='10' present='мышь в подарок'
        leaveCard={leaveCardHandler}></Card>
        <Card taste='с рыбой' weight='2'
        text='Головы щучьи с чесноком да свежайшая сёмгушка.'
        link='' isAvailable={true} quantity='40' present='2 мыши в подарок'
        leaveCard={leaveCardHandler}></Card>
        <Card taste='с курой' weight='5'
        text='Печалька, с курой закончился.'
        link='' isAvailable={false} quantity='100' present='5 мышей в подарок'
        leaveCard={leaveCardHandler}></Card>
      </div>
    </div>
  );
}

export default App;
