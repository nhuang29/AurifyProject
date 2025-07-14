import React from 'react';

export default function Slot({slots, wagerAmount, multiplier, spinSlots}) {

    return (
        <div className="slot-output">
            <button className="spin" disabled={wagerAmount === 0 || multiplier === ''} onClick={spinSlots}>SPIN!</button>
            {
                slots.map((symbol, index) => (
                    <div key={index} className="slot">{symbol}</div>
                ))
            }
        </div>
    );
}