// cara untuk membuat object pada JS

// 1. object literal
// let marksman1 = {
//     name: 'Karrie',
//     level: 1,
//     // method
//     kill: function(jumlah) {
//         this.level = this.level + jumlah;
//         console.log(`goodjob ${this.name}, level up!`);
//     }
// }

// let marksman2 = {
//     name: 'Cloude',
//     level: 2,
//     // method
//     kill: function(jumlah) {
//         this.level = this.level + jumlah;
//         console.log(`goodjob ${this.name}, level up!`);
//     }
// }

// 2. function declaration
// function Marksman(nama, level) {
//     let marksman = {};
    
//     marksman.nama = nama,
//     marksman.level = level,

//     //method
//     marksman.kill =  function (jumlah) {
//         this.level += jumlah;
//         console.log(`${this.nama}, level up!`);
//     }
//     //method
//     marksman.die = function(cups) {
//         this.level -= cups,
//         console.log(`${this.nama}, level drop!`);
//     }


//     return marksman;
// }

// let karrie = Marksman('karrie', 1);
// let cloude = Marksman('cloude', 2);

// 3. constructor
function Marksman(nama, level) {    
    this.nama = nama,
    this.level = level,

    //method
    this.kill =  function (jumlah) {
        this.level += jumlah;
        console.log(`${this.nama}, level up!`);
    }
    //method
    this.die = function(cups) {
        this.level -= cups,
        console.log(`${this.nama}, level drop!`);
    }
}

let karrie = new Marksman('Karrie', 1);
let cloude = new Marksman('cloude', 2)
