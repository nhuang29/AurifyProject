import React from 'react';

export default function Wager({balance, wagerAmount, wage, multiplier, handleMultiplier }) {
    return (
        <>
            <div className='wager'>
                <button disabled={balance <= 0 || wagerAmount === 1} onClick={wage}>Wage</button>
                <select disabled={wagerAmount === 0} value={multiplier} onChange={handleMultiplier}>
                    <option disabled={1 * wagerAmount > balance} value="1">1x</option>
                    <option disabled={2 * wagerAmount > balance} value="2">2x</option>
                    <option disabled={3 * wagerAmount > balance} value="3">3x</option>
                    <option disabled={4 * wagerAmount > balance} value="4">4x</option>
                    <option disabled={5 * wagerAmount > balance} value="5">5x</option>
                    <option disabled={6 * wagerAmount > balance} value="6">6x</option>
                    <option disabled={7 * wagerAmount > balance} value="7">7x</option>
                    <option disabled={8 * wagerAmount > balance} value="8">8x</option>
                    <option disabled={9 * wagerAmount > balance} value="9">9x</option>
                    <option disabled={10 * wagerAmount > balance} value="10">10x</option>
                </select>
            </div>

            <div className="wager-information">
                <p>Wager amount: ${wagerAmount} </p>
                <p>Multiplier: {multiplier ? multiplier + "x" : "1x"}</p>
            </div>
        </>
    );
}