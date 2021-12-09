
$('.mobile-btn').on('click',function () {
  $('.mobile-btn').toggleClass('btn-show');
  $('.menu-block-list').toggleClass('menu-show');
});

$('.menu-block-item').on('click',function () {
  $('.mobile-btn').removeClass('btn-show');
  $('.menu-block-list').removeClass('menu-show');
});

$('.trpp').on('click',function () {
    $('.video-object').toggleClass('show');
    $('.main-video-block').toggleClass('bg-show');
  });
