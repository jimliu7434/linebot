var a = (maxleng) => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ans = [];

    do {
        let numIndex = getRandom(0, arr.length - 1);
        console.log(`chosed ${arr[numIndex]}`);
        if(!ans.find( a=> a === arr[numIndex] )){
            ans.push(arr[numIndex]);
        }
    }while (ans.length < maxleng);

    return ans.join('');
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = a;