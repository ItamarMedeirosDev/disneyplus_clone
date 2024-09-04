document.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]');
  

  for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(botao){
       const targetTab = botao.target.dataset.tabButton;
       const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
       hideTabs();
       tab.classList.add('shows__list--is-active');
       buttonBarRemove();
       botao.target.classList.add('shows__tabs__button--is-active')

    })
  }

  for(let i=0;i<questions.length;i++){
    questions[i].addEventListener('click', toggleAnswer);
  }
});

function toggleAnswer(e){
  const opened = 'faq__questions__item--is-open';
  const elementFather = e.target.parentNode;

  elementFather.classList.toggle(opened)
}

function buttonBarRemove(){
  const buttons = document.querySelectorAll('[data-tab-button]');

  for(let i=0; i < buttons.length; i++){
    buttons[i].classList.remove('shows__tabs__button--is-active');
  }
}

function hideTabs(){
  const tabsContainer = document.querySelectorAll('[data-tab-id]');

  for(let i = 0;i < tabsContainer.length;i++){
    tabsContainer[i].classList.remove('shows__list--is-active')
  }
}