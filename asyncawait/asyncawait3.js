async function pick(menus) {
  console.log('Pick random menu!');
  const p = new Promise((resolve, reject) => {
    if (menus.length === 0) {
      reject(new Error('Need Candidates'));
    } else {
      setTimeout(() => {
        const randomIdx = Math.floor(Math.random() * menus.length);
        const selectedMenu = menus[randomIdx];
        resolve(selectedMenu);
      }, 1000);
    }
  });
  return p;
}

async function getRandomMenu() {
  console.log('---Please wait!---');
  try{

    const menusJSON= await fetch('https://learn.codeit.kr/api/menus') ;
    const result = await menusJSON.text();    
    const menus = JSON.parse(result);
    const menu =  await pick(menus); // ! random pick function

    console.log(`Today's lunch is ${menu.name}~`);
       
  } catch (error) {
    console.log(error.message);

  }finally {
    console.log('Random Menu candidates change everyday');
  }
  
}

getRandomMenu() ;
  