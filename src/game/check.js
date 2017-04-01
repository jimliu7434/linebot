var c = (ans, gues) => {
    if(ans.length !== gues.length)
        return 'error';

    let a=0,
        b=0;
    
    for(let i = 0; i < ans.length; i++){
        for(let j = 0; j < gues.length ; j++){
            if(ans[i] === gues[j]){
                if(i === j){
                    a++;
                }
                else{
                    b++;
                }
            }
        }
    }

    return `${a}A${b}B`;
};

module.exports = c;