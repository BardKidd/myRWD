$(document).ready(function(){
    /*for(var i = 1; i < 4; i++){
        $('#products img:eq('+i+')').click({id:i}, function(e){        //id:i是指裡面的i為要傳遞的對象
            n = e.data.id;                                             //data是關鍵值，因為外面的i傳不進來function裡面所以要改採用此方法
            change();                                                  //id是自取的
            clearInterval(clock);                                     
            clock=setInterval(auto, 2000);
        });
    }*/
    
    
    $('#radio span:eq(0)').click(function(){
        n = 0;                                                         //重設n的數字，就不會照著原本設定的方式輪播了
        $('#products img').fadeOut(400,function(){                     //當點點被點到時才進行淡入淡出效果
            $('#products img').attr('src', 'img/0' + n + '.png');      //重設了n後，就可以把路徑改成n了。改完可以連同下方的一起設定change
            $('#products img').fadeIn();
        });
        
        $('#radio span').attr('class', 'icon-radio-unchecked');        //把全部checked的icon轉換為unchecked的圖案
        $('#radio span:eq('+n+')').attr('class', 'icon-radio-checked');
    });
    
    $('#radio span:eq(1)').click(function(){
        n = 1;
        change();
        clearInterval(clock);                                          //被點到時重新設定時區，否則會不協調
        clock=setInterval(auto, 2000);
    });
    
    $('#radio span:eq(2)').click(function(){
        n = 2;
        change();
        clearInterval(clock);                                          //被點到時重新設定時區，否則會不協調
        clock=setInterval(auto, 2000);
    });
    
    $('#radio span:eq(3)').click(function(){
        n = 3;
        change();
        clearInterval(clock);                                          //被點到時重新設定時區，否則會不協調
        clock=setInterval(auto, 2000);
    });
    
    var n = 0;
    clock=setInterval(auto, 5000);                                      //auto是自創函數的名稱，這裡設定輪播間隔時間
    $('#products img').mouseover(function(){                            //當滑鼠滑入照片時停止輪播，個人覺得照片過大時不適合使用
        clearInterval(clock);                                           //clearInterval可以取消我們設定的時區
    });
    
    $('#products img').mouseout(function(){                             //當滑鼠離開時繼續輪播，並重新計時
       clock=setInterval(auto, 5000); 
    });
    
    function auto(){
        n++
        if(n >= 4){
            n = 0;
        }
        
        change();                                                      //簡化程式碼
        /*$('#products img').fadeOut(400,function(){                   //開始輪播
            $('#products img').attr('src', 'img/0' + n + '.png');
            $('#products img').fadeIn();
        });
        
        $('#radio span').attr('class', 'icon-radio-unchecked');        //radio跟著輪播
        $('#radio span:eq('+n+')').attr('class', 'icon-radio-checked');*/
    };
    
    function change(){
        $('#products img').fadeOut(400,function(){                     
            $('#products img').attr('src', 'img/0' + n + '.png');
            $('#products img').fadeIn();
        });
        
        $('#radio span').attr('class', 'icon-radio-unchecked');       
        $('#radio span:eq('+n+')').attr('class', 'icon-radio-checked');
    }
});// end ready