const myList = [
     {
          proverb:"The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",
          translation:"가능의 한계를 알기 위한 유일한 방법은 불가능의 영역에 살짝 발을 들여 놓아 보는 것.",
          author:"William Shakespeare",
     },
     {
          proverb:"The greatest weakness of all weaknesses is to fear too much to appear weak.",
          translation:"가장 큰 약점은 약점을 보일 것에 대한 두려움이다.",
          author:"J. B. Bossuet",
     },
     {
          proverb:"Those who cannot remember the past are condemned to repeat it.",
          translation:"과거를 기억 못하는 이들은 과거를 반복하기 마련이다.",
          author:"George Santayana",
     },
     {
          proverb:"Wer mit Ungeheuern kämpft, mag zusehn, dass er nicht dabei zum Ungeheuer wird. Und wenn du lange in einen Abgrund blickst, blickt der Abgrund auch in dich hinein.",
          translation:"괴물과 싸우는 사람은 그 싸움 속에서 스스로도 괴물이 되지 않도록 조심해야 한다. 우리가 괴물의 심연을 오래동안 들여다 본다면, 그 심연 또한 우리를 들여다 보게될 것이다.",
          author:"Friedrich Wilhelm Nietzsche",
     },
     {
          proverb:"The most damaging phrase in the language is: It's always been done that way.",
          translation:"그간 우리에게 가장 큰 피해를 끼친 말은 바로 지금껏 항상 그렇게 해왔어라는 말이다.",
          author:"Grace Brewster Murray Hopper",
     },
     {
          proverb:"It ain't over till it's over.",
          translation:"끝날 때까지는 끝난 게 아니다.",
          author:"Lawrence Peter 'Yogi' Berra",
     },
     {
          proverb:"You can discover more about a person in an hour of play than in a year of conversation,",
          translation:"1시간의 놀이가 1년간의 대화보다 그 사람을 더 잘 알게 해준다.",
          author:"Plato",
     },
     {
          proverb:"If you want to test a man`s character, give him power.",
          translation:"누군가의 인격을 시험해 보고 싶다면, 그에게 권력을 줘 보라",
          author:"Abraham Lincoln",
     },
     {
          proverb:"semble que la perfection soit atteinte non quand il n'y a plus rien à ajouter, mais quand il n'y a plus rien à retrancher.",
          translation:"더 이상 추가할 것이 없을 때가 아니라 더 이상 뺄 것이 없을 때, 완벽함이 성취된다.",
          author:"Antoine de Saint-Exupéry",
     },
     {
          proverb:"You can't be neutral on a moving train.",
          translation:'달리는 기차 위에 중립은 없다.',
          author:"Howard Zinn",
     },
];

const proverb = document.querySelector("#quote span:nth-child(1)");
const translation = document.querySelector("#quote span:nth-child(2)");
const author = document.querySelector("#quote span:nth-child(3)");


const todayQuote = myList[Math.floor(Math.random() * myList.length)];

proverb.innerHTML = todayQuote.proverb;
translation.innerHTML = todayQuote.translation;
author.innerHTML = todayQuote.author;


