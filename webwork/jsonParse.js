/* fetch('https://learn.codeit.kr/api/topics')
    .then((response) => response.text())
    .then((result) => { console.log(result) }) */

// 일단 이 코드를 주석 해제하고, 아래 코드를 주석 처리해서 어떤 JSON 데이터가 오는지 확인하세요.


fetch('https://learn.codeit.kr/api/topics')
  .then((response) => response.text())
  .then((result) => {
    const topics = JSON.parse(result); // 여기에 코드를 작성하세요.
    const beginnerLevelTopics = topics.filter((topic) => topic.difficulty === '초급');
    console.log(beginnerLevelTopics);
  });