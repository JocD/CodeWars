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

    public _checkRow(x: number): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                let size = this._getSize();
                let arr = this._num();
                let sum = 0;
                for (let i = 0; i < size; i++) {
                    if (this._checkCell(x, i, arr)) {
                        sum += this._grid[x][i];
                        delete arr[arr.indexOf(this._grid[x][i])];
                    }
                }
                resolve(sum === this._sum);
            }
            catch (e) {
                reject(<Error> e.message)
            }
        });
    }

    public _checkColumn(y: number): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                let size = this._getSize();
                let arr = this._num();
                let sum = 0;
                for (let i = 0; i < size; i++) {
                    if (this._checkCell(i, y, arr)) {
                        sum += this._grid[i][y];
                        delete arr[arr.indexOf(this._grid[i][y])];
                    }
                }
                resolve(sum === this._sum);
            }
            catch (e) {
                reject(<Error> e.message)
            }
        });
    }

    public _checkBox(x: number, y: number): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                let subSize = Math.sqrt(this._getSize());
                let arr = this._num();
                let sum = 0;
                for (let i = x; i < x + subSize; i++) {
                    for (let j = y; j < y + subSize; j++) {
                        if (this._checkCell(i, j, arr)) {
                            sum += this._grid[i][j];
                            delete arr[arr.indexOf(this._grid[i][j])];
                        }
                    }
                }
                resolve(sum === this._sum);
            }
            catch (e) {
                reject(<Error> e.message)
            }
        });
    }

    public _getSize(): number {
        return this._grid.length;
    }

    public _checkSize(): boolean {
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

    public async isValid(): Promise<boolean> {
        let isValid: Promise<boolean> | boolean = await this._checkSize();
        if (isValid) {
            let size: number = this._getSize();
            let subSize: number = Math.sqrt(size);
            let res: Array<Promise<boolean>> = new Array<Promise<boolean>>(size * 3);
            let i = 0;
            for (let x = 0; x < size; x = x + subSize) {
                for (let y = 0; y < size; y = y + subSize) {
                    res[i++] = this._checkBox(x, y);
                }
            }

            for (let y = 0; y < size; y++) {
                res[i++] = this._checkColumn(y);
            }

            for (let x = 0; x < size; x++) {
                res[i++] = this._checkRow(x);
            }
            isValid = Promise.all(res).then((val) => {
                return val.reduce((p, c) => {
                    return p && c;
                });
            });
        }
        return isValid;
    }
}