$(function(){
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

    $('.slide-btn').click(function(e){
        e.preventDefault();
        // 1. 현재 보이는 row의 순서값을 받는다.
        // zindex가 있는 row
        if($('.slide-row').hasClass("zindex")){
            const index = $(this).index();
            alert(index);
        }
        $('.slider-list>li').removeClass('slider-anime');
        for(let i = 0; i < 4; i++){
            if(i > 0){
            $('.slider-list>li').eq(i).css("animation-duration", i + "00ms");
        }
            $('.slider-list>li').eq(i).addClass('slider-anime');
        }
    });



});