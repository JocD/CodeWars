export class Sudoku {
    private readonly _grid: Array<Array<number>>;
    private readonly _sum: number;

    public constructor(grid: Array<Array<number>>) {
        this._grid = grid;
        let size = this._getSize();
        this._sum = 0;
        for (let i = 1; i <= size; i++) {
            this._sum += i;
        }
    }

    private _num(): Array<number> {
        let arr = new Array(this._getSize());
        for (let i = 0; i < arr.length; i++) {
            arr[i] = i + 1;
        }
        return arr;
    }

    private _checkCell(x: number, y: number, arr: Array<number>): boolean {
        let num = this._grid[x][y];
        return Number.isInteger(num) && num > 0 && num <= this._getSize() && arr.indexOf(num) !== -1;
    }

    private _checkRow(x: number): boolean {
        let size = this._getSize();
        let arr = this._num();
        let sum = 0;
        for (let i = 0; i < size; i++) {
            if (this._checkCell(x, i, arr)) {
                sum += this._grid[x][i];
                delete arr[arr.indexOf(this._grid[x][i])];
            }
        }
        return sum === this._sum;
    }

    private _checkColumn(y: number): boolean {
        let size = this._getSize();
        let arr = this._num();
        let sum = 0;
        for (let i = 0; i < size; i++) {
            if (this._checkCell(i, y, arr)) {
                sum += this._grid[i][y];
                delete arr[arr.indexOf(this._grid[i][y])];
            }
        }
        return sum === this._sum;
    }

    private _checkBox(x: number, y: number): boolean {
        let size = Math.sqrt(this._getSize());
        let arr = this._num();
        let sum = 0;
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (this._checkCell(i, j, arr)) {
                    sum += this._grid[i][j];
                    delete arr[arr.indexOf(this._grid[i][j])];
                }
            }
        }
        return sum === this._sum;
    }

    private _getSize(): number {
        return this._grid.length;
    }

    private _checkSize(): boolean {
        let size = this._getSize();
        if (!Number.isInteger(Math.sqrt(size))) {
            return false;
        }

        for (let i = 0; i < size; i++) {
            if (this._grid[i].length !== size) {
                return false;
            }
        }
        return true;
    }

    public isValid(): boolean {
        let isValid = this._checkSize();
        if (isValid) {
            let size = this._getSize();
            let subSize = Math.sqrt(size);
            for (let x = 0; x < size; x = x + subSize) {
                for (let y = 0; y < size; y = y + subSize) {
                    isValid = this._checkBox(x, y);
                    if (!isValid) {
                        return isValid;
                    }
                }
            }
            for (let y = 0; y < size; y++) {
                isValid = this._checkColumn(y);
                if (!isValid) {
                    return isValid;
                }
            }

            for (let x = 0; x < size; x++) {
                isValid = this._checkRow(x);
                if (!isValid) {
                    return isValid;
                }
            }
        }
        return isValid;
    }
}