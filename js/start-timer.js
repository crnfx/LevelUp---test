$(function () {
  $('.counter').setCountDownTimer({
    time: "00:30:00",
    button: $('.btn'),
    countDownText: 'Успей купить:',
    afterCountText: ''
  });
});
