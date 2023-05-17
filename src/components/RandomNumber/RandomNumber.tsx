import React from 'react';
interface IRandomNumber {
    number: number;
}

const RandomNumber: React.FC<IRandomNumber> = (props) => {
    return (
        <div className="ball">
            <span>{props.number}</span>
        </div>
    );
};
export default RandomNumber;