// 새 직원 정보는 원하는 대로 작성하세요.
const newMember = {
  name: 'shane',   
  email: 'shane@codeit.kr',
	department: 'IT department',
};

//insert employee

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  headers:{
    'Content-Type':'application/json',
 },
  body: JSON.stringify(newMember),// 이 부분을 채워보세요.
})
  .then(() => {
    fetch('https://learn.codeit.kr/api/members')
      .then((response) => response.text())
      .then((result) => {
        const members = JSON.parse(result); // 이 부분을 채워보세요.
        console.log(members[members.length - 1]);
      });
  });


  const member = {
    name: 'shane',   
    email: 'shane@codeit.kr',
    department: 'marketing',
  }

  //Update Employee 
  fetch('https://learn.codeit.kr/api/members/6', {
    method: 'PUT',
    headers:{
       'Content-Type':'application/json',
    },
    body: JSON.stringify(member),// 이 부분을 채워보세요.
  })
    .then(() => {
      fetch('https://learn.codeit.kr/api/members/6')
        .then((response) => response.text())
        .then((result) => {
          const member = JSON.parse(result); // 이 부분을 채워보세요.
          console.log(member);
        });
    });

    //Retrive Employee

  fetch('https://learn.codeit.kr/api/members/6')
    .then((response) => response.text())
    .then((result) => {
          //const member = JSON.parse(result); // 이 부분을 채워보세요.
          console.log(result);
        });
    

  