$(function() {
    function n_2(x){
        if(x==0){
            return 0;
        }
        if(x==1){
            return '23%';
        }
        if(x==2){
            return '-23%';
        }
    }
    function n_1(i){
        let a=(10+23*i);
        let b=a.toString()+'%'
        return b;
    }
    function n_3(h){
        if(h==0){
            return '-10%';
        }
        if(h==1){
            return '-56%';
        }
        if(h==2){
            return '-33%';
        }
    }
    var n=201;
    var arr_1=new Array("10%","33%","56%");
    var arr_2=new Array("0%","23%","-23%");
    var arr_3=new Array("-10%","-56%","-33%");
    $('.banner-ig').click(function(){
        let direction=$(this).attr('num');
        if(direction=='left'){
            n--;
            let k=n%3;
            $('img[num=right]').attr('num','left').css({'zIndex':0,'transform':'scale(0.8)'});
            $("img[num=current]").attr('num','right').css({'zIndex':1,'transform':'scale(0.8)'});
            $(this).attr('num','current').css({'zIndex':2,'transform':'scale(1)'});
            $('.ig-1').animate({left:n_1(k)},1000);
            $('.ig-2').animate({left:n_2(k)},1000);
            $('.ig-3').animate({left:n_3(k)},1000);
            //向left旋转 
        }
        if(direction=='right'){
            n++;
            let k=n%3;
            let t=this;
            $('img[num=left]').attr('num','right').css({'zIndex':0,'transform':'scale(0.8)'});
            $("img[num=current]").attr('num','left').css({'zIndex':1,'transform':'scale(0.8)'});
            $(this).attr('num','current').css({'zIndex':2,'transform':'scale(1)'});
            $('.ig-1').animate({left:n_1(k)},1000);
            $('.ig-2').animate({left:n_2(k)},1000);
            $('.ig-3').animate({left:n_3(k)},1000);//
        }
    });
});