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
  const [selectedCell, setSelectedCell] = useState({ row: null, col: null });

  // Функція для вибору клітинки
  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  // Функція для зміни значення вибраної клітинки
  const handleKeyPress = (event) => {
    const { row, col } = selectedCell;
    if (row !== null && col !== null && event.key >= '1' && event.key <= '9') {
      const newBoard = [...board];
      newBoard[row][col] = parseInt(event.key, 10);
      setBoard(newBoard);
    }
  };

  return (
      <div className="sudoku-board" onKeyDown={handleKeyPress} tabIndex="0">
        {board.map((row, rowIndex) => (
            <div key={rowIndex} className="sudoku-row">
              {row.map((cellValue, colIndex) => (
                  <SudokuCell
                      key={colIndex}
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
