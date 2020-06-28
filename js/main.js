/**
 * SlickSlider
 */

 $(document).ready(function() {
  $('.head__slider').slick({
   arrows: true,
   dots: true,
   easing: 'ease-out',
   speed: 500,

  });
  });
  
  let slideItems =[ {title: 'Пожаротушение',img: 'img/slide-1.jpg',text: 'Первое полустишие нивелирует метаязык. Диалектический характер просветляет экзистенциальный стиль. Заимствование текуче.'}, {title: 'Автоматизация систем управления',img: 'img/slide-2.jpg',text: 'Аллитерация аллитерирует хорей, но не рифмами. Дольник точно аллитерирует симулякр'},  {title: 'Видеонаблюдение',img: 'img/slide-3.jpg',text: 'Стилистическая игра нивелирует не-текст. Вопрос о популярности произведений того или иного'},]


/**настройка select городов */

let citySelector = document.querySelector('.city-selector__checked');
let cityList = document.querySelector('.city-selector__cities');
let cityItems = document.querySelectorAll('.city-selector__city');
let cityInfo = document.querySelectorAll('.top-line__city');

citySelector.addEventListener('click', (event) => {
  if (cityList.classList.contains('selector-open')) {
    cityList.classList.remove('selector-open');
  }else{
    cityList.classList.add('selector-open');
    }
    
});

cityItems.forEach(clickCity);

function clickCity(item) {
  item.addEventListener('click', () => {
    citySelector.textContent = item.textContent;
    //убираем список городов
    if (cityList.classList.contains('selector-open')) {
      cityList.classList.remove('selector-open');
    }

    cityInfo.forEach((city) => {
      if(item.dataset.value == city.dataset.value){
        city.classList.add('show-city');
      }else{
        city.classList.remove('show-city');
      }
      
    })

  });

  
}