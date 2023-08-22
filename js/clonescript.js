const mon = ["일", "월", "화", "수", "목", "금", "토"];
$(function(){
    let n = 0
    ViewSlide(n);

    $('.slide-left').click(function(){
        n--;
        if(n < 0){
            n = 5;
        }
        ViewSlide(n);
    });
    $('.slide-right').click(function(){
        n++;
        if(n > 5){
            n = 0;
        }
        ViewSlide(n);
    });

    $('.small-list').hover(function(){
        $(this).find('.small-navbox').toggle();
    });

    // 검색 이벤트
    $('.search-select').click(function(){
        if($(this).find('.fa-solid').hasClass('fa-angle-down')){
        $(this).find('.fa-solid').removeClass('fa-angle-down').addClass('fa-angle-up');
        $('.select-value').show();
    }else{
        $(this).find('.fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
        $('.select-value').hide()
    }
    });
    $('.select-value li').click(function(){
        const txt = $(this).text();     //선택한 text 가져옴
        $('.select-value li').removeClass('active');    //li에 모든 active 지움
        $(this).addClass('active'); // 선택한 부분에 active 추가
        $('.search-select>span').text(txt);     //span에 가져온 text를 입력
        $('.search-form').focus();
    });


    $('.slider-list li').mouseenter(function(){
        $('.slider-list li').removeClass('active');
        $(this).addClass('active');
    });

    setInterval(autoSlide, 8000);

    $(".ndate").html(newTime);

}); // jquery end

function autoSlide(){
    let slide = $('.slide-row');
    let index = slide.index($('.zindex'));
    let n = 0
    if(index == 5){
        n = 0
    }else{
        n = index + 1;
    }
    ViewSlide(n);
}


function ViewSlide(n){
    $('.slide-row').removeClass('zindex');
    $('.slide-row').eq(n).addClass('zindex');
    $('.slider-list>li').css({
        opacity: 0,
        top: '30px',
        position: 'relative'
    });
    $('.slider-list>li').animate({
        opacity: 1,
        top: '0px'
    }, 500);
}

function newTime(){
    let now = new Date();
    const nowMon = now.getMonth() + 1;
    let ntime = now.getFullYear()+ "." + nowMon + "." + now.getDate() + ".";
    ntime += "<span> 0" + now.getHours() + ":00 </span>";
    // ntime += now.getSeconds() + "초";
    return ntime;
  }