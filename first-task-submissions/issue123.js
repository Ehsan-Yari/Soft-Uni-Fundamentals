/* Create a function that, given a non-negative integer, 3 for example, prints a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */

const countSheep = (num) => {
    let str = '';
    for (let i = 1; i <= num; i++) {
        str += `${i} sheep...`;
    }
    return str;
}