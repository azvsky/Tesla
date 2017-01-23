$(document).ready(function() {
  
  //Переменные меню
  var openMenu = $('.open-menu');
  var closeMenu = $('.close-menu');
  
  // Переменные блока features
  var somePhoto = $('.features-photo');
  var featuresItem = $(".features-item");
  var itemChange = $('.features-item--change');
  var photoChange = $('.features-photo--change');

  //Смена положения 2-х элементов и выравнивание высоты под элемент с фотографией
  if ($(window).width() >= 768) {
    itemChange.css("float","right");
    photoChange.css("float","left");
    featuresItem.css('height', somePhoto.height());
  } else {
    featuresItem.css("height", "inherit");
    itemChange.css("float","none");
    photoChange.css("float","none");
  }

  //РАСКРЫТИЕ МЕНЮ
  openMenu.on('click', function (event) {
    event.preventDefault();
    $(this).hide();
    $('.main-navigation').slideDown('fast');
    closeMenu.show();
  });

  //ЗАКРЫТИЕ МЕНЮ
  closeMenu.on('click', function (event) {
    event.preventDefault();
    $(this).hide();
    $('.main-navigation').slideUp('fast');
    openMenu.show();
  });
}); //закрыли ready

//СЛАЙДЕР
  $('.slider').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: false,
        prevArrow: '<button type="button" class="button-slide  button-slide-prev">Previous</button>',
        nextArrow: '<button type="button" class="button-slide  button-slide-next">Next</button>'
      }
    }]
  });

  $(window).resize(function() {
    var somePhoto = $('.features-photo');
    var featuresItem = $(".features-item");
    var itemChange = $('.features-item--change');
    var photoChange = $('.features-photo--change');

    if($(this).width() >= 768) {
      featuresItem.css('height', somePhoto.height());
      itemChange.css("float","right");
      photoChange.css("float","left");
    } else {
      
      featuresItem.css("height", "inherit");
      itemChange.css("float","none");
      photoChange.css("float","none");
    }
  });