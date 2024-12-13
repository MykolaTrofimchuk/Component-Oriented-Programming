import React, { useState } from 'react';
import SudokuCell from './SudokuCell';

const SudokuBoard = () => {
    const initialBoard = Array(9).fill().map(() => Array(9).fill(0));
    const [board, setBoard] = useState(initialBoard);
    const [selectedCell, setSelectedCell] = useState({ row: null, col: null });

    const handleCellClick = (row, col) => {
        setSelectedCell({ row, col });
    };

    const handleKeyPress = (event) => {
        const { row, col } = selectedCell;
        if (row !== null && col !== null && /^[1-9]$/.test(event.key)) {
            const newBoard = board.map((r, rIdx) =>
                r.map((val, cIdx) => (rIdx === row && cIdx === col ? parseInt(event.key, 10) : val))
            );
            setBoard(newBoard);
        }
    };

    return (
        <div
            className="sudoku-board"
            onKeyDown={handleKeyPress}
            tabIndex="0"
        >
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="sudoku-row">
                    {row.map((cellValue, colIndex) => (
                        <SudokuCell
                            key={`${rowIndex}-${colIndex}`}
                            value={cellValue}
                            onClick={() => handleCellClick(rowIndex, colIndex)}
                            isSelected={selectedCell.row === rowIndex && selectedCell.col === colIndex}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SudokuBoard;