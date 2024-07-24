import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Confetti from 'react-confetti';

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #333;
  position: relative;
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 60px);
  grid-gap: 5px;
  background-color: #444;
  padding: 10px;
  border-radius: 10px;
`;

const Cell = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${props => props.value === 1 ? 'red' : props.value === 2 ? 'yellow' : 'white'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const WinnerText = styled.div`
  margin-top: 20px;
  font-size: 24px;
  color: white;
  text-align: center;
`;

const RandomPhrase = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: white;
  text-align: center;
`;

const phrases = [
  "Tu dois un café à ton collègue car il faut être galant avec les perdants.",
  "Fais 10 pompes.",
  "Le perdant te doit un plateau sushi.",
  "La prochaine fois c'est café sans sucres sinon la dame blanche te dévorera pendant le sommeil.",
  "Rejoue jusqu'à demain sinon tu dois me recruter 😉.",
  "Si tu gagnes tu parles de moi au patron.",
  "😱 Félicitations tu as gagné le droit de rejouer pour voir une autre phrase.",
  "Le perdant mange un oeuf cru.",
  "Allez tu as assez joué, retourne travailler !"
];

const ConnectFour = () => {
  const emptyBoard = Array(6).fill(Array(7).fill(0));
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [dropPositions, setDropPositions] = useState({});
  const [lastMove, setLastMove] = useState(null);
  const [winner, setWinner] = useState(null);
  const [winnerPhrase, setWinnerPhrase] = useState('');

  const dropPiece = (columnIndex) => {
    if (winner) return;

    const newBoard = board.map(row => [...row]);
    for (let i = 5; i >= 0; i--) {
      if (newBoard[i][columnIndex] === 0) {
        newBoard[i][columnIndex] = currentPlayer;
        setLastMove({ row: i, column: columnIndex });
        setDropPositions({ ...dropPositions, [columnIndex]: i });
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
        setBoard(newBoard);
        checkWinner(newBoard);
        break;
      }
    }
  };

  const checkWinner = (board) => {
    const checkDirection = (row, col, rowDir, colDir) => {
      const player = board[row][col];
      if (player === 0) return false;
      for (let i = 1; i < 4; i++) {
        if (row + rowDir * i < 0 || row + rowDir * i >= 6 || col + colDir * i < 0 || col + colDir * i >= 7) return false;
        if (board[row + rowDir * i][col + colDir * i] !== player) return false;
      }
      return true;
    };

    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        if (checkDirection(row, col, 0, 1) || // Horizontal
            checkDirection(row, col, 1, 0) || // Vertical
            checkDirection(row, col, 1, 1) || // Diagonal \
            checkDirection(row, col, 1, -1)) { // Diagonal /
          setWinner(board[row][col]);
          setWinnerPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
          return;
        }
      }
    }
  };

  const resetGame = () => {
    setBoard(emptyBoard);
    setCurrentPlayer(1);
    setDropPositions({});
    setLastMove(null);
    setWinner(null);
    setWinnerPhrase('');
  };

  const animatedProps = useSpring({
    from: { transform: 'translateY(-60px)' },
    to: { transform: 'translateY(0px)' },
    config: { duration: 300 }
  });

  return (
    <BoardContainer>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h1>Puissance 4 : Amusez-vous bien !</h1>
        {winner && (
          <>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <WinnerText>Le joueur {winner} a gagné ! 🎉</WinnerText>
            <RandomPhrase>{winnerPhrase}</RandomPhrase>
          </>
        )}
        <Board>
          {board.map((row, rowIndex) =>
            row.map((cell, columnIndex) => (
              <Cell
                key={`${rowIndex}-${columnIndex}`}
                value={cell}
                onClick={() => dropPiece(columnIndex)}
              >
                {cell > 0 && (
                  <animated.div style={animatedProps}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: cell === 1 ? 'red' : 'yellow',
                      borderRadius: '50%'
                    }}></div>
                  </animated.div>
                )}
              </Cell>
            ))
          )}
        </Board>
        <Button onClick={resetGame}>Restart Game</Button>
      </div>
    </BoardContainer>
  );
};

export default ConnectFour;
