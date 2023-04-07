function GridChecker(grid) {
    // Attributes ------------------------------------------------------------------------------------------------------
    this.grid = grid;

    // Methods ---------------------------------------------------------------------------------------------------------
    this.checkHorizontal = function (row, column, color) {
        let count = 0;
        for (let i = -3; i < 4; i++) {
            if (0 <= column + i && column + i < this.grid.width) {
                if (this.grid.cells[row][column + i] === color) {
                    count++;
                    if (count === 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }
    }
    this.checkVertical = function (row, column, color) {
        let count = 0;
        for (let i = -3; i < 4; i++) {
            if (0 <= row + i && row + i < this.grid.height) {
                if (this.grid.cells[row + i][column] === color) {
                    count++;
                    if (count === 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }
    }
    this.checkDiagonalBottomLeftTopRight = function (row, column, color) {
        let count = 0;
        for (let i = -3; i < 4; i++) {
            if (0 <= row - i && row - i < this.grid.height && 0 <= column + i && column + i < this.grid.width) {
                if (this.grid.cells[row - i][column + i] === color) {
                    count++;
                    if (count === 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }
    }
    this.checkDiagonalTopRightBottomLeft = function (row, column, color) {
        let count = 0;
        for (let i = -3; i < 4; i++) {
            if (0 <= row + i && row + i < this.grid.height && 0 <= column + i && column + i < this.grid.width) {
                if (this.grid.cells[row + i][column + i] === color) {
                    count++;
                    if (count === 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }
    }

    this.checkDraw = function () {
        for (let column = 0; column < this.grid.width; column++) {
            if (!this.grid.isColumnFull(column)) {
                return false;
            }
        }
        this.isGameOver = true;
        return true;
    }
}
