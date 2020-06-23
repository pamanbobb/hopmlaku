$(document).ready(function(){
ins_run();
$.fn.random = function(){
return this.eq(Math.floor(Math.random() * this.length));
};
function ins_run(){
	var ins_click = setInterval(function(){
			if($('div[style="max-height: 356px; min-height: 200px;"] .sqdOP.L3NKy.y3zKF:not(.sqdOP.L3NKy._8A5w5)').length < 1){
				clearInterval(ins_click);
				scrollngisor();
			}else if($('div.piCib button.aOOlW.HoLwm').length > 0){
				clearInterval(ins_click);
				yausrebon();
			}else {
				$('div[style="max-height: 356px; min-height: 200px;"]').find('.sqdOP.L3NKy.y3zKF:not(.sqdOP.L3NKy._8A5w5)').random().click();
				sukses++;
				maksimal--;
				$('.olepiro').text(sukses);
				if(maksimal < 1){
					clearInterval(scroll);
					mlaku = 0;
					location.reload();
				}
			}
		},delay);
}
function scrollngisor(){
	var waktu = setInterval(function(){
		var scroll=$('div[style="height: 356px; overflow: hidden auto;"]');
		scroll.animate({
    		scrollTop: scroll.get(-1).scrollHeight,
			}, 3200, "linear");
		{
            clearInterval(waktu);
            ins_run();
		}
	},300);
}
function yausrebon(){
	var aduk = setInterval(function(){
		$('button.aOOlW.HoLwm').click();
		{
				clearInterval(aduk);
				ins_run();
		}
	},300);
}
});
