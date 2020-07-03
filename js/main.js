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


$( document ).ready(function() {
  $('.partners__list').slick({
    arrows: true,
   dots: true,
   easing: 'ease-out',
   slidesToShow: 4,
   slidesToScroll: 1,
   speed: 500
  });
});
  
window.onload = function () {
  function TabsBodyHeight(){
    let tabs = document.querySelector('.tabs-nav__list');
    let tabsList = document.querySelectorAll('.tabs-body__item');
    let tabsHeight = tabs.offsetHeight;
    
    tabsList.forEach( tab => {
      tab.style.height = tabsHeight + 'px';
      console.log(tabsHeight);
      
    });

  }

  function ServiceTabs(){
    let tabsNav = document.querySelectorAll('.tabs-nav__item');
    let tabsList = document.querySelectorAll('.tabs-body__item');

    tabsNav.forEach(item => {
      item.addEventListener('click', SelectTabNav);
    })

    function SelectTabNav(){

      tabsNav.forEach( item => {
        item.classList.remove('tab-active');
      });
      this.classList.add('tab-active');
      SelectTabContent(this.dataset.tab);
   }

   function SelectTabContent(num){
    tabsList.forEach(item => {
      if(item.dataset.tab == num){
        item.classList.add('tab-active');
      }else{
        item.classList.remove('tab-active');
      }
    });
   }
  }

  ServiceTabs();
  TabsBodyHeight();
  window.onresize = TabsBodyHeight;
}



$( document ).ready(function() {
  $('.container>h2').each(function() {
    let title = $(this);
    title.html(title.html().replace(/((?<=(^|\n)\s*?)\S+)/, '<span>$1</span>'));
  });
});
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