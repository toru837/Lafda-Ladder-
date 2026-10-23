export const SNAKES = [
 {from:99,to:21,meme:'Abey saale 💀'},
 {from:92,to:49,meme:'Accha lode 😂'},
 {from:86,to:3,meme:'Jal lijiye 🥤'},
 {from:72,to:53,meme:'Game khatam 💀'},
 {from:61,to:37,meme:'Galti ho gyi malik 🙏'},
 {from:41,to:22,meme:'E murakh apni chhavi sudhar 🤡'},
 {from:31,to:10,meme:'Pet safa, har rog dafa 🚽'},
 {from:30,to:9,meme:'Moye moye 😭'}
];
export const LADDERS = [
 {from:6,to:48,meme:'Jaldi kar, kal subah Parvell jana hai 😂'},
 {from:8,to:29,meme:'Jalwa hai humara 🔥'},
 {from:17,to:93,meme:'Abhi maza aayega na, Bidhu 😎'},
 {from:21,to:97,meme:'Bade harami ho beta 🤣'},
 {from:32,to:70,meme:'So beautiful, so elegant ✨'},
 {from:38,to:82,meme:'Woh alag hi level ka banda tha 🚀'},
 {from:44,to:76,meme:'Jalwa hai humara 🔥'}
];
export function cellFor(pos){if(!Number.isInteger(pos)||pos<1||pos>100)return null;const rb=Math.floor((pos-1)/10),off=(pos-1)%10;return {row:9-rb,col:rb%2===0?off:9-off};}
export function getMove(position,roll,entered=position>0){if(!Number.isInteger(roll)||roll<1||roll>6)throw Error('Roll must be 1–6');if(!entered)return roll===6?{start:0,landed:1,final:1,event:'enter'}:{start:0,landed:0,final:0,event:'start-fail'};if(position+roll>100)return {start:position,landed:position,final:position,event:'overshoot'};const landed=position+roll,s=SNAKES.find(x=>x.from===landed),l=LADDERS.find(x=>x.from===landed);if(s)return {start:position,landed,final:s.to,event:'snake',special:s};if(l)return {start:position,landed,final:l.to,event:'ladder',special:l};return {start:position,landed,final:landed,event:landed===100?'win':'move'};}
