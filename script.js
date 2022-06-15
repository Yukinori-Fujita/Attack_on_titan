$(function () {
    $(".slide-items").slick({
        autoplay: true, // 自動再生
        fade: true, // スライドをフェードイン・フェードアウト
        cssEase: 'linear',// アニメーション
        speed: 100, // フェードアニメーションの速度設定
        arrows: false,
    });
})

// ページトップに戻る
var pagetop = $('#page-top');
pagetop.hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        pagetop.fadeIn();
    } else {
        pagetop.fadeOut();
    }
})
pagetop.click(function () {
    $('body,html').animate({ scrollTop: 0 }, 1000);
    return false;
})
