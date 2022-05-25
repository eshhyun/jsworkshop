
// 조건 연산자 

let speed = 40;
const msg = speed > 50 ? '[주위] 과속입니다' : '괜찮습니다' ;

console.log('조건 연산자') ;
console.log(msg);


//spread 
console.log('spread ');

const codeit = {
  name: 'codeit',
}
const codeitClone = {
  ...codeit,
}
console.log(codeit);
console.log(codeitClone);


const latte = {
  esspresso: '30ml',
  milk: '150ml'
};

const cafeMocha = {
  ...latte,
  chocolate: '20ml',
}

console.log(latte); // {esspresso: "30ml", milk: "150ml"}
console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}


const snacks = ['원카칩', '꿀버터칩', '헛스윙칩', '태양칩', '야채시간'];
const drinks = ['사이다', '콜라', '우유', '물', '커피', '레몬에이드'];

function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

// 1. Spread 구문을 활용해서 sancks와 drinks 배열을 각각 mySnacks와 myDrinks 변수에 복사해 주세요.
const mySnacks = [...snacks ];
const myDrinks = [...drinks ];

mySnacks.splice(2, 3);
myDrinks.splice(1);

// 2. Spread 구문을 활용해서 mySnacks와 myDrinks 순서로 두 배열을 합쳐서 myChoice 변수에 할당해 주세요.
const myChoice = [...mySnacks,...myDrinks] ;

// 3. Spread 구문을 활용해서 myChoice의 각 요소들을 printArguments 함수의 아규먼트로 전달해 주세요.
printArguments(...myChoice);

//Property 표기법 

const title = '컴퓨터 개론';
const lessonCount = 87;

const course = {
  title,         // title:title로 선언하는 내용을 property명과 value명이 동일한 경우 축약 가능
  lessonCount,   // 동일 
};



const propertyName = 'birth';
const getJob = () => 'job';

const objcodeit = {
  ['topic' + 'Name']: 'Modern JavaScript',  // property 명을 표현식이나 변수명으로 표현 가능
  [propertyName]: 2017,
  [getJob()]: '프로그래밍 강사',
};


console.log(objcodeit.topicName);
console.log(objcodeit[propertyName],objcodeit.birth) ;        // perpertyName이 아닌 value로 취환된다.
console.log(objcodeit[getJob()],objcodeit.job) ;

//optional chaining 

function printCatName(user) {
  console.log(user.cat?.name ?? '함께 지내는 고양이가 없습니다.');

  //console.log((user.cat === null || user.cat === undefined) ? undefined : user.cat.name);

}

const user1 = {
  name: 'Captain',
  cat: {
    name: 'Crew',
    breed: 'British Shorthair',
  }
}

const user2 = {
  name: 'Young',
}

printCatName(user1);
printCatName(user2);

//배열 destructuring 

// 1. Destructuring 문법을 활용해서 numbers 배열의 각 요소를 one, two, three라는 변수에 할당해보세요.
const numbers = [1, 2, 3];

const [one, two,three] = numbers ;


// 2. Destructuring 문법을 활용해서 TV는 livingRoom, 나머지 요소들(배열)은 kitchen 변수에 할당해 주세요.
const products = ['TV', '식탁', '냉장고', '전기밥솥', '전자레인지', '오븐', '식기세척기'];

const [livingRoom,...kitchen] = products ;

// 3. Destructuring 문법을 활용해서 두 변수의 값을 서로 바꿔주세요.
let firstName = 'Kang';
let lastName = 'Young';

[firstName,lastName] = [lastName,firstName];


// 테스트 코드
console.log(one);
console.log(two);
console.log(three);
console.log(livingRoom);
console.log(kitchen[1]);
console.log(firstName);
console.log(lastName);


//Object Destructuring 
// 1. Destructuring 문법을 사용해서 title, artist, year, medium 변수에 myBestArt 객체의 각 프로퍼티를 할당해 주세요.
const myBestArt = {
	xtitle: '별이 빛나는 밤에',
	artist: '빈센트 반 고흐',
	year: 1889,
	medium: '유화',
};

const {xtitle,artist,year,medium} = myBestArt ;


// 2. Destructuring 문법을 활용해서 
//  myBestSong의 프로퍼티 중 title과 artist는 각각 songName과 singer라는 변수에, 
//  나머지는 rest라는 변수에 객체로 할당해 주세요.
const myBestSong = {
	title: '무릎',
	artist: '아이유(IU)',
	release: '2015.10.23.',
	lyrics: '모두 잠드는 밤에...'
};

const {title:songName, artist:singer, ...xrest} = myBestSong;

// 3. printMenu 함수 안에 잘못 작성된 Destructuring 코드를 수정해 주세요.
const menu1 = { name: '아메리카노' };
const menu2 = { name: '바닐라 라떼', ice: true };
const menu3 = { name: '카페 모카', ice: false };

function printMenu(menu) {
	//  menu 파라미터로 전달되는 객체에 ice 프로퍼티가 없을 경우 기본값은 true여야 합니다.
//	const name, ice = { ...menu };

  const{name , ice = true} = menu ;

	console.log(`주문하신 메뉴는 '${ice ? '아이스' : '따뜻한'} ${name}'입니다.`);
}



// 테스트 코드
console.log(xtitle);
console.log(artist);
console.log(year);
console.log(medium);
console.log(songName);
console.log(singer);
console.log(xrest);
printMenu(menu1);
printMenu(menu2);
printMenu(menu3);

//
// 아래 코드들이 정상적으로 동작하려면 printFavoritSong 함수를 어떻게 선언해야 할까요?

function printFavoritSong(person, {title,singer}){
  console.log(` ${person}의 최애곡은 ${singer}가 부른 ${title}입니다.`);
}
const music1 = { title: '난치병', singer: '하림' };
const music2 = { title: '너의 모든 순간', singer: '성시경' };
const music3 = { title: '무릎', singer: '아이유' };
const music4 = { title: '옛사랑', singer: '이문세' };
const music5 = { title: '한숨', singer: '이하이' };
const music6 = { title: '추억의 책장을 넘기면', singer: '이선희' };

printFavoritSong('영훈', music4);
printFavoritSong('동욱', music1);
printFavoritSong('대위', music3);
printFavoritSong('소원', music2);
printFavoritSong('우재', music5);
printFavoritSong('영준', music6);

//try catch 

const quiz1 = {
  question: '다음 중 스승의 날과 생일이 같은 인물은 누구일까요?',
  example: [ '율곡 이이', '퇴계 이황', '세종대왕', '신사임당'],
  answer: 3,
  solution: '훈민정음 창제 등 우리나라 문화와 교육 발전에 남긴 업적이 가장 큰 인물이라는 평가와 함께, 이 시대의 스승이 세종대왕처럼 존경받았으면 하는 바람으로 세종대왕의 탄생일이 스승의 날로 지정되었습니다.',
};

const quiz2 = {
  question: '다음 중 희노애락에 속하지 않는 것은 무엇일까요?',
  example: ['사랑', '기쁨', '즐거움'],
  answer: 1,
  solution: '희노애락에서의 애를 사랑 애(愛)라고 자칫 오해할 수가 있지만, 희노애락의 애는 슬플 애(哀)입니다. 기쁨은 기쁠 희(喜), 즐거움은 즐거울 락(樂)에 담겨 있습니다.',
};

function printQuiz({ question, example }) {
 try{
  let exMsg = '';
  for (let i = 0; i < example.length; i++) {
    exMsg += `${i + 1}. ${example[i]}  `;
  }

  console.log(question);
  console.log(exMsg);
 } catch (e){
   console.log(e.name);
 }
  
}

// 테스트 코드
printQuiz(quiz1);
printQuiz(1);
printQuiz("");
printQuiz({});
printQuiz(quiz2);
