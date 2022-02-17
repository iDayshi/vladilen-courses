const URL_USERT = 'https://jsonplaceholder.typicode.com/users';
toggleLoader();

function toggleLoader() {
  const loaderElem = document.querySelector('#loader');
  const isHidden = loaderElem.hasAttribute('hidden');
  if (isHidden) {
    loaderElem.removeAttribute('hidden');
  } else {
    loaderElem.setAttribute('hidden', '');
  }
}

function addName(objUser) {
  const dataContainer = document.querySelector('#data-container');
  objUser.forEach((element) => {
    const liElement = document.createElement('li');
    const urlName = document.createElement('a');
    urlName.innerText = element.name;
    liElement.append(urlName);
    dataContainer.append(liElement);
  });
}

const addAllNames = () => {
  const result = fetch(URL_USERT, {
    method: 'GET',
  });

  result
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка запроса');
      }
      return response.json();
    })
    .then((quotesAll) => {
      addName(quotesAll);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      toggleLoader();
    });
};

addAllNames();

// const belquotes = document.getElementById("belquotes");
// const englishquotes = document.getElementById("englishquotes");
// const resetColor = document.querySelectorAll(`.nav_link`)
// const introImg = document.querySelector('.intro');
// const quotes = document.querySelector(`.quotesText`);
// const quotesBtn = document.querySelector(`.button-btn`);
// const quotesAuthor = document.querySelector('.authorText')
// const quoteslogo = document.querySelector('.logo')
// const audioBtn = document.querySelector('.play')

// belquotes.addEventListener('click', () => {
//   quotesBtn.setAttribute(`onclick`,"randomQuotes('belarusian_quotes.json')")
//   randomQuotes('belarusian_quotes.json')
//   quotesBtn.innerHTML = 'Адвольная цытата'
//   quotes.style.fontFamily = 'Belarus';
//   quoteslogo.innerHTML ='Цытаты пісьменнікаў'
//   introImg.style.background = 'url(assets/belfoto/logo.jpg) center / 100% no-repeat'
//   reset(`belquotes`)
// });

// englishquotes.addEventListener('click', () => {
//   quotesBtn.setAttribute(`onclick`,"randomQuotes('https://type.fit/api/quotes')")
//   randomQuotes('https://type.fit/api/quotes')
//   quotesBtn.innerHTML = 'Random quotes'
//   quotes.style.fontFamily = 'Eng';
//   quoteslogo.innerHTML ='Quotes Random'
//   introImg.style.background = 'url(assets/belfoto/logo2.jpg) center / 100% no-repeat'
//   reset(`englishquotes`)
// });

// function reset(value){
//   resetColor.forEach((nav) => {
//     if(nav === document.getElementById(value)){
//       nav.style.color = `#bdae82`
//     } else {
//       nav.style.color = `white`
//     }
//   })
// }
