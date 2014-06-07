var bpos, epos;

//Positions
/*setInterval(function(){
	var check = function(){
		var pos = $('.billy').offset();
		console.log(pos);
	} 
}, 250);*/

setInterval(function(){
	bpos = $('.billy').offset();
	epos = $('.enemy').offset();
    //console.log(bpos.left - epos.left);
}, 250);


var check = function(){
	var diffpos = (bpos.left - epos.left);
	return (diffpos >= -27 && diffpos <= 27) ? true : false;
}

//Functions 
var rkick = function(){
 	$('.billy').addClass('r-kick');
	if(check()){
		console.log('hit');
		$('.enemy').css({ backgroundPosition:"0px -180px" });
		} 
	setTimeout(function(){
		$('.billy').removeClass('r-kick'); 
		$('.enemy').css({ backgroundPosition:"-225px -60px" });}, 300); 
		//exactly 30 seconds
};

var lkick = function(){
 $('.billy').addClass('l-kick');
 if(check()){
		console.log('hit');
		$('.enemy').css({ backgroundPosition:"0px -120px" });
	}  
	setTimeout(function(){
		$('.billy').removeClass('l-kick'); 
		$('.enemy').css({ backgroundPosition:"0px 0px" });}, 300);
};


//Walking
var rwalk = function(){
 $('.billy').addClass('r-walk').css({ marginLeft:'+=3px' });
};

var lwalk = function(){
 $('.billy').addClass('l-walk').css({ marginLeft:'-=3px' });;
};

//Keydown events
$(document).on('keydown keyup', function(e) {
	if (e.type == 'keydown') { 
		if(e.keyCode == 65  //Letter A
		&& !$('.billy').hasClass('l-kick')
		&& !$('.billy').hasClass('l-walk')
		&& !$('.billy').hasClass('r-walk')
		&& !$('.billy').hasClass('r-kick')
		){ 
			lkick();
		}

		if(e.keyCode == 68  //Letter D
		&& !$('.billy').hasClass('r-kick')
		&& !$('.billy').hasClass('l-walk')
		&& !$('.billy').hasClass('r-walk')
		&& !$('.billy').hasClass('l-kick')
		){ 
			rkick();
		}

		if(e.keyCode == 39 //Right arrow
		//&& !$('.billy').hasClass('r-walk')
		&& !$('.billy').hasClass('l-walk')
		&& !$('.billy').hasClass('r-kick')
		&& !$('.billy').hasClass('l-kick')
		){  
			rwalk();
		}

		if(e.keyCode == 37 //Left arrow
		//&& !$('.billy').hasClass('l-walk')
		&& !$('.billy').hasClass('r-walk')
		&& !$('.billy').hasClass('r-kick')
		&& !$('.billy').hasClass('l-kick')
		){  
			lwalk();
		}

	}
	else { // keyup
		//walking/kicking left, will stop facing left
		if($('.billy').hasClass('l-walk') || $('.billy').hasClass('l-kick')){
			$('.billy').css({ backgroundPosition:"-225px -60px" });
		}
		//walking/kicking right, will stop facing right
		if($('.billy').hasClass('r-walk') || $('.billy').hasClass('r-kick')){
			$('.billy').css({ backgroundPosition:"0px 0px" });
		}
        $('.billy').removeClass('r-walk l-walk');
    }
		return false;
		console.log(e.keyCode);
});

