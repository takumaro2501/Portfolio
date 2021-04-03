'use strict';
{
  // モーダルウィンドウ
  {
    $(function () {
      $('.js-modal-open').each(function () {
        $(this).on('click', function () {
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          $(modal).fadeIn(300);
          return false;
        });
      });
    
      // ウィンドウを閉じる
      $('.js-modal-close').on('click', function () {
        $('.js-modal').fadeOut(300);
        return false;
      });
    });
  }
  
  
  // スムーススクロール
  {
    $(function () {
      $('a[href^="#"]').click(function () {
        var speed = 300;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
      });
    
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 300) {
          $(".page-top").fadeIn();
        } else {
          $(".page-top").fadeOut();
        }
      });
    });
  }

  // フェードイン
  {
    const targets = document.querySelectorAll('[data-content]');

    function callback(entries, obs) {
      entries.forEach(entry => {
        console.log(entry.target);
        if (!entry.isIntersecting) {
          return;
        }
        
        console.log(entry.isIntersecting);
        entry.target.classList.add('js-fadein');
        obs.unobserve(entry.target);
      })
    };


    const options = {
      threshold: .2,
      rootMargin: '0px 0px -50px'
    };

    const observer = new IntersectionObserver(callback, options);

    targets.forEach(target => {
      observer.observe(target);
    });
  }
}