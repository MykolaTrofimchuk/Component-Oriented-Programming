import React, { useState } from 'react';
import './App.css';

// Компонент клітинки судоку
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

// Компонент для гри Судоку
const SudokuBoard = () => {
  // Ініціалізуємо 9x9 поле
  const initialBoard = Array(9).fill().map(() => Array(9).fill(0));

  // Створюємо стан для поля
  const [board, setBoard] = useState(initialBoard);


  return (
      <div className="sudoku-board" tabIndex="0">
        {board.map((row, rowIndex) => (
            <div key={rowIndex} className="sudoku-row">
              {row.map((cellValue, colIndex) => (
                  <SudokuCell
                      key={colIndex}
                      value={cellValue}
                  />
              ))}
            </div>
        ))}
      </div>
  );
};

export default SudokuBoard;
