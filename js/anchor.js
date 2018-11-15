$('a[href^="#section"]:not([href="#"])').click(function(){
    var section = $(this.hash);
    
    //Firefox只支援選擇器為body，chrome只支援選擇器為html
    $('html,body').animate({
        scrollTop: section.offset().top
                         //offset()是紀錄移動的距離
                         //而這段則是在說section距離瀏覽器頁面的位置
    },800);
    return false;//不把傳送位置回傳到網址上
});//end anchor

$('a[href="#top"]').click(function(){
    $('html,body').animate({
        scrollTop: 0
    },800);
    
    return false;
});