import React, { useState } from 'react';
import RandomNumber from "./components/RandomNumber/RandomNumber";
import './App.css';

const App= () => {
    const [numbers, setNumbers] = useState<number[]>([]);

    const createRandomNumbers = () => {
        const numbers = new Set<number>();
        while(Array.from(numbers).length !== 5){
            const randomNumber = Math.floor(Math.random() * 32) + 5;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    };
    const setRandomNumber = () => {
        setNumbers(createRandomNumbers());
    };

    return (
        <div className="App">
            <div className="container">
                <button className="btn" onClick={setRandomNumber}>New numbers</button>
                <div className="number-container">
                    <RandomNumber number={numbers[0]} />
                    <RandomNumber number={numbers[1]} />
                    <RandomNumber number={numbers[2]} />
                    <RandomNumber number={numbers[3]} />
                    <RandomNumber number={numbers[4]} />
                </div>
            </div>
        </div>
    );
};

export default App;