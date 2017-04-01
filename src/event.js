 const 
       GAME = require('./game/game'),
       GAME_ANS = require('./game/answer'),
       GAME_CHECK = require('./game/check'),
       ANS_LENGTH = 4;


let eventHandler = event => {
    if(!event)
        return;

    if(event.type === 'message'){
        let userid = event.source.userId,
            msgtype = event.message.type,
            msgtext = event.message.text,
            rsptext = '';
        
        let game = global.GAMES.find(g => {
            return g.userid === userid;
        });

        if(!game){  // 未開啟新遊戲
            let ngame = GAME();
                ngame.userid = userid;
                ngame.answer = '';
                lobal.GAMES.push(ngame);
            console.log(`${userid}  new user.`);
            rsptext = `plz type '--new' to start a new game.`;
        }
        else {
            if(msgtext.StartsWith('--')){
                // cmd mode
                switch(msgtext) {
                    case '--new':
                        game.answer = GAME_ANS(ANS_LENGTH);
                        rsptext = `New game is started.`;
                        console.log(`${userid}  ${game.answer}`);
                        break;
                    case '--listgames':
                        rsptext = JSON.stringify(global.GAMES);
                        break;
                    case '--ans':
                        rsptext = `answer is ${game.answer}`;
                        break;
                    default:
                        rsptext = `Unkown command.`;
                        break;
                }
            }
            else {
                // game mode
                let ans = game.answer,
                    msgArr = msgtext.split(''),
                    req = [],
                    nums = ['0','1','2','3','4','5','6','7','8', '9'];
                
                req = msgArr.filter(t => {
                    return nums.indexOf(t) >= 0;
                });

                if(req.length < ANS_LENGTH){
                    rsptext = `input length need ${ANS_LENGTH} digits`;
                }
                else{
                    if(req.length > ANS_LENGTH)
                        req = req.slice(0, ANS_LENGTH - 1);

                    rsptext = `${req.join('')} :  ${GAME_CHECK(ans, req.join(''))}`;
                }
            }
        }

        event.reply(rsptext).then( data => {
                // success
                console.log(`${userid}  ${rsptext}`);
            })
            .catch( error => {
                // error 
                console.log(`${userid}  ${error}`);
            });
    }
};

module.exports = eventHandler;