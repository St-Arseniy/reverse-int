module.exports = function reverse (n) {
    let positiveNumber = Math.abs(n);
    let array = String(positiveNumber).split('');
    let arrayReverse = array.reverse();
    return arrayReverse.join('');
};
