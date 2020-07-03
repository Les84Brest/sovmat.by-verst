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