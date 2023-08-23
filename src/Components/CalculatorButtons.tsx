import React, { MouseEvent } from 'react';

// void - это тип данных в TypeScript, который указывает на отсутствие значения. Когда функция имеет тип void, это означает, что она не возвращает никакого значения.

// В контексте определения свойств и функций в интерфейсе или типе, ключевое слово void указывает на то, что данная функция не возвращает результат или значение, а просто выполняет какое-либо действие.
interface CalculatorButtonsProps {
    clear: () => void;
    backspace: () => void;
    updateCalc: (e: MouseEvent<HTMLButtonElement>) => void;
    changeTheme: () => void;
    dark: boolean;
    calculate: () => void;
}

const CalculatorButtons: React.FC<CalculatorButtonsProps> = ({ clear, backspace, updateCalc, changeTheme, dark, calculate }) => {
    return (
        <div className='Calculator-buttons'>
            <button onClick={clear} className='Calculator-operator'>
                C
            </button>
            <button onClick={backspace} className='Calculator-operator'>
                Del
            </button>
            <button name='%' onClick={updateCalc} className='Calculator-operator'>
                &#37;
            </button>
            <button name='/' onClick={updateCalc} className='Calculator-operator'>
                &#247;
            </button>
            <button name='7' onClick={updateCalc} className='Calculator-digit'>
                7
            </button>
            <button name='8' onClick={updateCalc} className='Calculator-digit'>
                8
            </button>
            <button name='9' onClick={updateCalc} className='Calculator-digit'>
                9
            </button>
            <button name='*' onClick={updateCalc} className='Calculator-operator'>
                &#215;
            </button>
            <button name='4' onClick={updateCalc} className='Calculator-digit'>
                4
            </button>
            <button name='5' onClick={updateCalc} className='Calculator-digit'>
                5
            </button>
            <button name='6' onClick={updateCalc} className='Calculator-digit'>
                6
            </button>
            <button name='-' onClick={updateCalc} className='Calculator-operator'>
                -
            </button>
            <button name='1' onClick={updateCalc} className='Calculator-digit'>
                1
            </button>
            <button name='2' onClick={updateCalc} className='Calculator-digit'>
                2
            </button>
            <button name='3' onClick={updateCalc} className='Calculator-digit'>
                3
            </button>
            <button name='+' onClick={updateCalc} className='Calculator-operator'>
                +
            </button>
            <button onClick={changeTheme}>{dark ? 'To light' : 'To dark'}</button>
            <button name='0' onClick={updateCalc} className='Calculator-digit'>
                0
            </button>
            <button name='.' onClick={updateCalc} className='Calculator-digit'>
                .
            </button>
            <button onClick={calculate} className='Calculator-operator'>
                =
            </button>
        </div>
    );
};

export default CalculatorButtons;
