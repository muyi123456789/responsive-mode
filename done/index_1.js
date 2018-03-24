$(function() {
    var t;
    var width=$('.ban_ig[current]').css('width');
    let reg = new RegExp("px", "g");
    var w=width.replace(reg,'')*1.1;
    $('.shadow').mouseover(function() {
        $(this).css('opacity', '0');

    });
    $('.shadow').mouseout(function() {
        $(this).css('opacity', '0.7');
    });
    $('.box').mouseover(function() {
        var s = this;
        t = setTimeout(function() {
            let index = '.box-' + ($('.box').index(s) + 1);
            var obj = { 1: 2, 2: 1, 3: 3, 4: 4 };
            var img_num = obj[($('.box').index(s) + 1)];
            $(index).css('opacity', '0.7');
            ban_over(img_num);
        }, 200);

    });
    $('.box').mouseout(function() {
        clearTimeout(t);
        var s = this;
        let index = '.box-' + ($('.box').index(s) + 1);
        var obj = { 1: 2, 2: 1, 3: 3, 4: 4 };
        var img_num = obj[($('.box').index(s) + 1)];
        $(index).css('opacity', '0');
        ban_out(img_num);
    });
    var ban_over=function(img_num){
    	let ig_id = '.ig_' + img_num;
    	let click_img = $(ig_id);
    	click_img.css('z-index',1);
    	click_img.animate({'width':w},500);
    }
    var ban_out=function(img_num){
   		let ig_id = '.ig_' + img_num;
    	let click_img = $(ig_id);
    	click_img.animate({'zIndex': 0},0);
    	click_img.animate({'width': w/1.1},500);
    }

});