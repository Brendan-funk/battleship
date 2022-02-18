const generateBoard = function () {
  const board = new Array(10);
  for (const row of board) {
    row = new Array(10);
    row.fill(0);
  }
  return board;
};