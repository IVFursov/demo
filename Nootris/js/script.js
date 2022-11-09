document.addEventListener('DOMContentLoaded', function() {
  // конечная дата
  const deadline = new Date(2022, 10, 11);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});

//форма заказа
$(document).ready(function (){
    openOrder();//вызываем нашу функцию
});
//функция modal
$(document).ready(function (){
    openOrder();//вызываем нашу функцию
});
//функция modal
function openOrder() {
    //Открываем модалку при клике на кнопку Сделать заказ
    $(".open").click(function () {
        $(".order").show('fast');//показывает див модалки 
    });
    
    //закрывает модалку при клике на кнопку Закрыть
    $(".cansel").click(function () {
        $(".order").hide('fast');//скрывает див модалки 
    });
    
    //действия при нажатии на кнопку Отправить
    $(".send").click(function () {
        //Считываем данные с полей формы
        var name = $("input#name:text").val(); 
        var phone = $("input#phone:text").val();
        
        //если они не пустые
        if(name !=="" && phone !==""){
            var text = "Ваше имя: " +name + "\n" +"Ваш телефон: "+phone;//строка с значениями из формы
            alert("Заказ отправлен\n"+text);//выводим информацию о успешном заказе
            $(".order").hide('fast');//закрываем модалку
        }else{
            alert("Заполните поля ввода!");//если поля формы пустые, выводи сообщение
        }
        
    });
}