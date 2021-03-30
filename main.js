const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor (arr) {
        this.field = arr;
        this.position = [0,0]; //row, col
    }
    print() {
        for (const i of this.field) {
            console.log(i.join(''));   
        } 
    }
    move() {
        this.field[this.position[0]][this.position[1]] = fieldCharacter;
        let move = prompt("Chose a move: ");
        switch (move) {
            case '8':
                this.position[0] -= 1;
                break;
            case '2':
                this.position[0] += 1;
                break;
            case '4':
                this.position[1] -= 1;
                break;
            case '6':
                this.position[1] += 1;
                break;
            default:
                console.log('8, 4, 6 or 2')
                break;
        }
    }
    upDateField () {
        if (this.position[0] >= this.field.length || this.position[0] < 0 || this.position[1] >= this.field[0].length || this.position[1] < 0) {
            console.log('te caiste');
            return 0;
        } else if (this.field[this.position[0]][this.position[1]] === hole) {
            console.log('chocaste');
            return 0;
        } else if (this.field[this.position[0]][this.position[1]] === hat) {
            console.log('GANASTE!!!!!');
            return 0;
        } else {
            this.field[this.position[0]][this.position[1]] = pathCharacter;
            console.clear();
            myField.print();
            return 1;
        }
    }
}

const myField = new Field([
  ['*', '░', '░', '░', 'O', '░', '░', '░'],
  ['░', 'O', 'O', '░', '░', '░', 'O', '░'],
  ['░', 'O', 'O', 'O', 'O', 'O', '░', '░'],
  ['░', '░', '░', '░', '░', 'O', '░', 'O'],
  ['░', 'O', 'O', 'O', 'O', 'O', '░', '░'],
  ['░', 'O', 'O', 'O', 'O', '░', 'O', '░'],
  ['░', '░', '░', '░', '░', '░', 'O', '^'],
]);
console.clear();
myField.print();
do {
    myField.move();
} while (myField.upDateField() === 1);