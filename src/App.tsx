import { useState, useEffect, KeyboardEvent, MouseEvent } from 'react';
import * as math from 'mathjs';
import CalculatorDisplay from './Components/CalculatorDisplay';
import CalculatorButtons from './Components/CalculatorButtons';
import Footer from './Components/footer';
import './App.css';

function App() {
    const [result, setResult] = useState<string>('');
    const [dark, setDark] = useState<boolean>(true);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
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

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [result]);

    const updateCalc = (e: MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.name;
        setResult(result.concat(value));
    };

    const clear = () => {
        setResult('');
    };

    const backspace = () => {
        setResult(result.slice(0, -1)); // remove last element
    };

    const calculate = () => {
        try {
            const calculatedResult = math.evaluate(result);
            setResult(calculatedResult.toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const changeTheme = () => {
        if (dark == true) {
            setDark(false);
            document.body.classList.add('light-theme');
        } else if (dark == false) {
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
                <Footer/>
            </div>
    );
}

export default App;