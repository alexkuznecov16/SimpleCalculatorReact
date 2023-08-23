import React, { useState, useEffect, KeyboardEvent, MouseEvent } from 'react';
import * as math from 'mathjs';
import CalculatorDisplay from './Components/CalculatorDisplay';
import CalculatorButtons from './Components/CalculatorButtons';
import Footer from './Components/footer';
import './App.css';

const App: React.FC = () => {
    const [result, setResult] = useState<string>('');
    const [dark, setDark] = useState<boolean>(true);

    const handleKeyDown = (event: KeyboardEvent<any>): void => {
        const key = event.key;
        if ((/[0-9]/.test(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) && !event.ctrlKey && !event.metaKey) {
            event.preventDefault();
            setResult(result + key);
        } else if (key === 'Enter') {
            event.preventDefault();
            calculate();
        } else if (key === 'Backspace') {
            event.preventDefault();
            backspace();
        }
    };

    useEffect(() => {
        // @ts-ignore
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            // @ts-ignore
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [result]);

    const updateCalc = (e: MouseEvent<HTMLButtonElement>): void => {
        const value = e.currentTarget.name;
        setResult(result.concat(value));
    };

    const clear = (): void => {
        setResult('');
    };

    const backspace = (): void => {
        setResult(result.slice(0, -1)); // remove last element
    };

    const calculate = (): void => {
        try {
            const calculatedResult = math.evaluate(result);
            setResult(calculatedResult.toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const changeTheme = (): void => {
        if (dark) {
            setDark(false);
            document.body.classList.add('light-theme');
        } else {
            setDark(true);
            document.body.classList.remove('light-theme');
        }
    };
    return (
        <div className='Calculator'>
            <div className='Calculator__block'>
                <CalculatorDisplay result={result} />
                <CalculatorButtons clear={clear} backspace={backspace} updateCalc={updateCalc} changeTheme={changeTheme} dark={dark} calculate={calculate} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
