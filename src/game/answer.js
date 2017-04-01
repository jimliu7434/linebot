var a = (maxleng) => {
    console.log(`max length ${maxleng}`);
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ans = [],
        cnt = 0;

    do {
        let numIndex = getRandom(0, arr.length - 1);
        console.log(`chosed ${arr[numIndex]}`);
        cnt++;
        if(!ans.indexOf(arr[numIndex])){
            ans.push(arr[numIndex]);
        }
    }while (ans.length < maxleng || cnt < 100);

    console.log(`ans ${ans.join('')}`);
    return ans.join('');
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = a;