/**
 * SlickSlider
 */

 $(document).ready(function() {
  $('.head__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
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