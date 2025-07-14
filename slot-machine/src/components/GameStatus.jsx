import React from 'react';
import Confetti from 'react-confetti';

export default function GameStatus({ cashOutAmount, isCashedOut, didWin, amountWon, freeMoney }) {
    const hasMessage = isCashedOut || didWin || freeMoney;

    let message = null;
    if (isCashedOut) {
        message = `Congratulations, you cashed out at: $${cashOutAmount}`;
    } else if (didWin) {
        message = `Congratulations, you won: $${amountWon}`;
    } else if (freeMoney) {
        message = `Thanks for playing! Here's a gift: $10`;
    }
    
    return (
        <section aria-live="polite" className="game-status">
            {(isCashedOut || didWin) && <Confetti recycle={false} numberOfPieces={1000}/>}
            {hasMessage && <h2 className='fade-in-blinking'>{message}</h2>}
        </section>
    );
}