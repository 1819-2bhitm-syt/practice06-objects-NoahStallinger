function rectangle(length,width) {
    return {
        length,
        width,
        getArea: function () {
            return this.length * this.width;
        }
    };
}
let rectangle1= rectangle(7, 4);

console.log(`1. Rechteck: 
Länge = ${rectangle1.length}, Breite = ${rectangle1.width}, Fläche = ${rectangle1.getArea()}`);

let rectangle2= rectangle(30, 5);

console.log(`2. Rechteck: 
Länge = ${rectangle2.length}, Breite = ${rectangle2.width}, Fläche = ${rectangle2.getArea()}`);
