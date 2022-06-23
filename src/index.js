module.exports = function reverse (n) {
    let str = n.toString().split("").reverse().join("");
    num = parseInt(str);
    return Math.abs(num);
}