const list = document.querySelector('.list');
const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
  }, {
    title: '쓰레기 분리수거',
    isClear: false,
  }, {
    title: '고양이 밥주기',
    isClear: true,
  }, {
    title: '독서하기',
    isClear: false,
  }, {
    title: '영어 공부하기',
    isClear: false,
  }
];

// 여기에 코드를 작성해 주세요.

data.forEach( (toDo,i) => {
  const item = document.createElement('li');
  
  item.classList.add('item');
  if (toDo.isClear ) { 
    item.classList.add('done');
  }

  /*

  if (toDo.isClear ) { 
    item.classList.add('item','done');
  } else {
    item.classList.add('item','done');
  }

  3항 연산자 
  toDo.isClear 
   ? item.classList.add('item','done') 
   : item.classList.add('item','done');
  
  && Operator 
  item.classList.add('item', toDo.isClear && 'done');
  
  */



  item.textContent = `${i + 1}. ${toDo.title}`;
  list.appendChild(item);

} 
);

//Map Function 사용하기 
//Map은 return 값을 배열로 받을수 있다. 


const quiz = ['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING'];

// 여기에 코드를 작성해 주세요.
const answer = quiz.map ( (names, i) => {
  return names[i];
}
);

/* return 문 하나만 있는 경우는 

const answer = quiz.map ( (names, i) =>  names[i]);

*/



// 테스트 코드
console.log(answer);


//array filter / find 

const seoul = ['김영훈', '김윤수', '김동욱', '강대위', '김영준',
  '김규식', '김태호', '김효신', '손효준', '김현승', '김재하', '김유나',
  '김재훈', '김혜선', '김민환', '김규리', '김소원', '김우재', '최영준',
  '김태순', '김종훈', '김성환', '김승용', '김지혜', '이승욱', '김도현',
  '김승규', '윤하은', '김유진', '김정민', '김혜정', '김예진', '김여진',
  '김성희', '김혜수', '김인선', '김상필', '김혜진', '서상원', '김상혜',
  '김민기', '김그루', '김희지'];

// 여기에 코드를 작성해 주세요.
const notKims = seoul.filter( (el) => el[0] !== '김');


// 테스트 코드
console.log(notKims);