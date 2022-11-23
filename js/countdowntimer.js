$.fn.setCountDownTimer = function (param) {
    this.html('<h4 class="countdownText order__subtitle">' + param.countDownText + '</h4>' +
            '<div id="countdown">' +
                    '<span id="minutes" style="float:inline-start"></span>' +
                    '<span id="dots" style="float:inline-start">:</span>' +
                    '<span id="seconds" style="float:inline-start"></span>' +
            '</div>' +
            '<div id="aftercount" style="display:none">' + param.afterCountText + '</div>');
    var remTime = param.time.split(":"),
            sTime = new Date().getTime(),
            countDown = (remTime[01] * 60) + parseInt(remTime[02]),
            minutesSel = $("#minutes"),
            secondsSel = $("#seconds"),
            afterCountSel = $("#aftercount"),
            countDownSel = $("#countdown"),
            countDownTextSel = $('.countdownText');

    var timer = setInterval(function () {
        var cTime = new Date().getTime(),
        diff = cTime - sTime,
        seconds = countDown - Math.floor(diff / 1000);
        param.button.attr('disabled', 'disabled');
        if (seconds >= 0) {
            var minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60;
            minutesSel.text(minutes < 10 ? "0" + minutes : minutes);
            secondsSel.text(seconds < 10 ? "0" + seconds : seconds);
        } else {
            countDownSel.hide();
            countDownTextSel.hide();
            afterCountSel.show();
            param.button.removeAttr('disabled');
            clearInterval(timer);
        }
    }, 500);
}
