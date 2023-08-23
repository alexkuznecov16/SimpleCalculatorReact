import React from 'react';

interface CalculatorDisplayProps {
    result: string;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ result }) => {
    return (
        <div className='Calculator__display'>
            <span>{result ? result : '0'}</span>
        </div>
    );
};

export default CalculatorDisplay;
