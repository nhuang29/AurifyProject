import React from 'react';
import GameStatus from './GameStatus';
import Wager from './Wager';
import Slot from './Slot';

export default function Game() {
  const [balance, setBalance] = React.useState(0);
  const [added, setAdded] = React.useState('');
  const [isCashedOut, setIsCashedOut] = React.useState(false);
  const [wagerAmount, setWagerAmount] = React.useState(0);
  const [slots, setSlots] = React.useState(['', '', '']);
  const [didWin, setDidWin] = React.useState(false);
  const [amountWon, setAmountWon] = React.useState(0);
  const [multiplier, setMultiplier] = React.useState('1');
  const [roundsPlayed, setRoundsPlayed] = React.useState(0);
  const [showFreeMoneyMessage, setShowFreeMoneyMessage] = React.useState(false);
  const [lastBonusRound, setLastBonusRound] = React.useState(null);

  const SlotSymbols1 = ['7', '🍋', '🍫', '🍋', '🍫', '🍋'];
  const SlotSymbols2 = ['7', '🍋', '7', '🍋', '🍫', '🍫'];
  const SlotSymbols3 = ['7', '🍋', '🍋', '🍋', '🍋', '7', '🍫', '🍫'];

  const spinSlots = () => {
    if (wagerAmount <= 0) return;
  
    const mult = Number(multiplier);
    const cost = mult * wagerAmount;
  
    const newSlots = getRandomSymbols();
    setSlots(newSlots);
  
    const allEqual = (arr) => (arr[0] && arr.every(val => val === arr[0]));
  
    let winnings = 0;
    if (allEqual(newSlots)) {
      if (newSlots[0] === '7') winnings = 50;
      else if (newSlots[0] === '🍫') winnings = 5;
      else if (newSlots[0] === '🍋') winnings = 1;
  
      winnings *= mult;
      setAmountWon(winnings);
      setDidWin(true);
      setTimeout(() => setDidWin(false), 9000);
    }
  
    setBalance(prev => {
      let updated = prev - cost + winnings;
  
      const nextRound = roundsPlayed + 1;
      if (nextRound % 3 === 0 && lastBonusRound !== nextRound && !allEqual(newSlots)) {
        updated += 10;
        setShowFreeMoneyMessage(true);
        setLastBonusRound(nextRound);
      }
  
      return updated;
    });
  
    setRoundsPlayed(prev => prev + 1);
    setWagerAmount(0);
  };
  
  React.useEffect(() => {
    if (showFreeMoneyMessage) {
      const timer = setTimeout(() => {
        setShowFreeMoneyMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showFreeMoneyMessage]);

  // Random Generators
  const getRandomSymbols = () => {
    const index1 = Math.floor(Math.random() * SlotSymbols1.length);
    const index2 = Math.floor(Math.random() * SlotSymbols2.length);
    const index3 = Math.floor(Math.random() * SlotSymbols3.length);
    return [
      SlotSymbols1[index1],
      SlotSymbols2[index2],
      SlotSymbols3[index3]
    ]
  }

  const handleAddToBalance = (event) => {
    event.preventDefault();
    const amount = Number(added);
    if (!isNaN(amount)) {
      setBalance(prev => prev + amount);
    }
    setAdded('');
  };

  function wage() {
    if (balance === 0) {
      return;
    }
    setWagerAmount(prev => prev += 1);
  }

  const handleMultiplier = (event) => {
    event.preventDefault();
    setMultiplier(event.target.value);
  }

  function handleCashOut() {
    console.log(`Congrats! You cashed out $${balance}`);

    setIsCashedOut(true);

    setTimeout(() => {
      setIsCashedOut(false);
      setBalance(0);
    }, 9000);

    setWagerAmount(0);
  }

  return (
    <div className='game-box'>
      <div className='finances'>
        <p>Player Balance: ${balance}</p>
        <div className="add-cashout-box">
          <form className='add-to-balance' onSubmit={handleAddToBalance}>
            <label>Add to Balance: </label>
            <input type="number" value={added} onChange={(e) => setAdded(e.target.value)} />
            <button type="submit">Add</button>

          </form>
          <button className="cash-out-button" disabled={balance === 0} onClick={handleCashOut}>Cash Out</button>
        </div>

        <GameStatus
          cashOutAmount={balance}
          isCashedOut={isCashedOut}
          didWin={didWin}
          amountWon={amountWon}
          freeMoney={showFreeMoneyMessage}
        />

        <Wager 
          balance={balance}
          wagerAmount={wagerAmount}
          wage={wage}
          multiplier={multiplier}
          handleMultiplier={handleMultiplier}
        />

        <Slot 
          slots={slots}
          wagerAmount={wagerAmount}
          multiplier={multiplier}
          spinSlots={spinSlots}
        />
      </div>
    </div>
  );
}