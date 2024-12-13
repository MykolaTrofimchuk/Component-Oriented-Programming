import React from 'react';

const SudokuCell = ({ value, onClick, isSelected }) => {
    return (
        <div
            className={`sudoku-cell ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
        >
            {value !== 0 ? value : ''}
        </div>
    );
};

export default SudokuCell;
