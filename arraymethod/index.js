/*
각 팀의 멤버들 중에 순수 스파이가 아닌 사람이 있는지 확인하는 checkSpy 함수를 완성해 주세요.

1.스파잇의 직원들은 모두 '스파이'로 불리고, 이중 스파이는 '스파이와 비슷한 이름'을 갖고 있습니다.
2'checkSpy 함수의 첫번째 파라미터에는 하나의 팀을 표현하는 객체를 아규먼트로 전달받게 됩니다.
3.checkSpy 함수는 내부에서 some 혹은 every 메소드를 활용합니다.
4.checkSpy 함수는 최종적으로 message 변수에 담긴 값을 출력하게 됩니다.

아래 출력 결과를 참고하여 message 변수를 선언하고, 각 팀의 멤버들을 확인한 뒤 적절한 문구를 담아 주세요!

*/
const spait = [
  { codeName: 'ApplePie', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
  { codeName: 'BigBoss', members: ['스파이', '스파이', '스과이', '스파이', '스파이'] },
  { codeName: 'CEO', members: ['스파이', '스파이', '스파이', '습하이', '스파이'] },
  { codeName: 'DeathNote', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
  { codeName: 'EarlyBird', members: ['스파이', '스마이', '스파이', '스파이', '스파이'] },
  { codeName: 'Faker', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
];

function checkSpy(team) {
  // 여기에 코드를 작성해 주세요.

  const {codeName, members} = team ;
  
  /*
  let message  ;

  if (members.every( (el) => el === '스파이') ) {
    message = `팀 ${codeName} 에는 이중 스파이가 없습니다.`;
  } else {
    message = `[주의!] 팀 ${codeName} 에 이중 스파이가 있습니다.`
  }
  */

  /*
   const message = members.every((el)=> el === '스파이') 
    ? `팀 ${codeName} 에는 이중 스파이가 없습니다.`
    : `[주의!] 팀 ${codeName} 에 이중 스파이가 있습니다.` ;

*/
    const message = members.some((el)=> el !== '스파이') 
        ? `[주의!] 팀 ${codeName} 에 이중 스파이가 있습니다.` 
        : `팀 ${codeName} 에는 이중 스파이가 없습니다.` ;


	console.log(message);
}

// 테스트 코드
spait.forEach((team) => checkSpy(team));

//reduce 

const data = [ 
  { company: 'Naber', month: 3 },
	{ company: 'Amajohn', month: 12 },
	{ company: 'Coogle', month: 10 },
  { company: 'Ittel', month: 6 },
  { company: 'Sasung', month: 4 },
  { company: 'CaCao', month: 3 },
	{ company: 'Microhard', month: 17 },
];

// 여기에 코드를 작성해 주세요.
const totalCareer = data.reduce( (acc,el,i)=> acc + el.month,0);

console.log(`상원이의 경력은 총 ${totalCareer}개월입니다.`);

