/*
웹 프론트엔드 개발자 규하는 유저들의 정보 중에서 굳이 필요하지 않은 정보를 제거해주는 removeUnnecessaryInfo라는 함수를 작성했습니다. 
이 함수는 JSON 데이터로 존재하는 유저 정보를 받아서 각 정보 중 이름을 나타내는 name 프로퍼티와, 이메일 주소를 나타내는 email 프로퍼티만 추출해서 그 정보로만 이루어진 객체 배열을 리턴해주는데요.

그런데 문제가 하나 생겼습니다. removeUnnecessaryInfo 함수가 사용되던 Promise Chaining 코드의 순서를 누군가가 뒤죽박죽 바꿔놓았습니다.
규하를 도와주고 싶네요. 지금 보이는 Promise Chain에서 각 메소드의 순서를 다시 올바르게 배치하고, 각 유저의 이름과 이메일 정보만 출력해볼까요?

function removeUnnecessaryInfo(users) {
  const processedUserList = users.map((user) => {
    const keys = Object.keys(user);
    const processedUser = {};
    keys.forEach((key) => {
      if (key === 'name' || key === 'email') {
        processedUser[key] = user[key];
      }
    });
    return processedUser;
  });
  const p = new Promise((resolve) => {
    setTimeout(() => { resolve(processedUserList); }, 1000); 
  });
  return p;
}

fetch('https://jsonplaceholder.typicode.com/users')
  .finally(() => {
    console.log('This job will be done by server soon!');
  })
  .then((result) => removeUnnecessaryInfo(result))
  .catch((error) => {
    console.log(error);
  })
  .then((result) => {
    console.log(result);
  })
  .then((response) => response.json());

  */

  function removeUnnecessaryInfo(users) {
    const processedUserList = users.map((user) => {
      const keys = Object.keys(user);
      const processedUser = {};
      keys.forEach((key) => {
        if (key === 'name' || key === 'email') {
          processedUser[key] = user[key];
        }
      });
      return processedUser;
    });
    const p = new Promise((resolve) => {
      setTimeout(() => { resolve(processedUserList); }, 1000); 
    });
    return p;
  }
  
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((result) => removeUnnecessaryInfo(result))
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log('This job will be done by server soon!');
    });
    
  

    

