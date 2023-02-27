///////////////////////////////////////////////////////////////////////////////////
//Scroll
///////////////////////////////////////////////////////////////////////////////////
function scrollLink() {
	$(document).ready(function () {
		$("a[href^='#']").on("click", function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 777);
			e.preventDefault();
			return false;
		});
	});
}
scrollLink();
///////////////////////////////////////////////////////////////////////////////////
//Scroll
///////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
//timer Ð½Ð° ÐºÐ¾Ð»Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð¼Ð¸Ð½ÑƒÑ‚
////////////////////////////////////////////////////////////////////////////////
//Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ñ‚Ð°Ð¹Ð¼ÐµÑ€Ð°(ÐºÐ¾Ð»Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð¼Ð¸Ð½ÑƒÑ‚ Ð²Ð²ÐµÑÑ‚Ð¸ Ð² Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€(Ð² ÑÐµÐºÑƒÐ½Ð´Ð°Ñ…))
function makeTimer(time) {
	var minBox = document.querySelector('#min'),
		secBox = document.querySelector('#sec')
	var timer = setInterval(function () {
		if (time === -1) {
			clearInterval(timer)
		} else {
			minBox.textContent = (Math.floor(time / 60)) < 10 ? ('0' + (Math.floor(
				time /
				60))) : (Math.floor(time / 60));
			secBox.textContent = (time % 60) < 10 ? ('0' + (time % 60)) : (time %
				60)
			time -= 1;
		}
	}, 1000)
};
/////////////////////////////////////////////////////////////////////////
//timer Ð½Ð° ÐºÐ¾Ð»Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð¼Ð¸Ð½ÑƒÑ‚
////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////
//timer Ð´Ð¾ ÐºÐ¾Ð½Ñ†Ð° Ð´Ð½Ñ
///////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
	//ÐºÐ¾Ð´ jQuery
	//Ð’Ñ‹Ð·Ñ‹Ð²Ð°ÐµÐ¼ Ñ„ÑƒÐ½ÐºÑ†Ð¸ÑŽ Ð½Ð° Ð¸ÑÐ¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ
	get_timer('.timer');
	//Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð²Ñ‹Ð·Ð¾Ð²Ð° Ñ‚Ð°Ð¹Ð¼ÐµÑ€Ð°
	function get_timer(elem) {
		var date_new = new Date();
		date_new.setDate(date_new.getDate() + 1);
		date_new.setHours(0);
		date_new.setMinutes(0);
		date_new.setSeconds(0);
		////////////////////////////////////
		////////////////////////////////////
		date_new.setSeconds(date_new.getSeconds() - 1);
		//ÐžÐ±ÑŠÐµÐºÑ‚ Ð´Ð°Ñ‚Ñ‹ Ð´Ð»Ñ Ð¾Ð±Ñ€Ð°Ñ‚Ð½Ð¾Ð³Ð¾ Ð¾Ñ‚ÑÑ‡ÐµÑ‚Ð°
		//var date_t = new Date(date_new);
		//ÐžÐ±ÑŠÐµÐºÑ‚ Ñ‚ÐµÐºÑƒÑ‰ÐµÐ¹ Ð´Ð°Ñ‚Ñ‹
		var date = new Date();
		//Ð’Ñ‹Ñ‡ÐµÑÐ»ÑÐµÐ¼ ÑÐºÐ¾Ð»ÑŒÐºÐ¾ Ð¼Ð¸Ð»Ð»Ð¸ÑÐµÐºÑƒÐ½Ð´ Ð¿Ñ€Ð¾Ð¹Ð´ÐµÑ‚
		//Ð¾Ñ‚ Ñ‚ÐµÐºÑƒÑ‰ÐµÐ¹ Ð´Ð°Ñ‚Ñ‹ Ð´Ð¾ Ð´Ð°Ñ‚Ñ‹ Ð¾Ñ‚ÑÑ‡ÐµÑ‚Ð° Ð²Ñ€ÐµÐ¼ÐµÐ½Ð¸
		var timer = date_new - date;
		//ÐŸÑ€Ð¾Ð²ÐµÑ€ÑÐµÐ¼ Ð½Ðµ Ð½ÑƒÐ¶Ð½Ð¾ Ð»Ð¸ Ð·Ð°ÐºÐ¾Ð½Ñ‡Ð¸Ñ‚ÑŒ Ð¾Ñ‚ÑÑ‡ÐµÑ‚
		//ÐµÑÐ»Ð¸ Ð´Ð°Ñ‚Ð° Ð¾Ñ‚ÑÑ‡ÐµÑ‚Ð° ÐµÑ‰Ðµ Ð½Ðµ Ð¸ÑÑ‚ÐµÐºÐ»Ð°, Ñ‚Ð¾ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾
		//Ð¼Ð¸Ð»Ð»Ð¸ÑÐµÐºÑƒÐ½Ð´ Ð² Ð¿ÐµÑ€ÐµÐ¼ÐµÐ½Ð½Ð¾Ð¹ date_t Ð±ÑƒÐ´ÐµÑ‚ Ð±Ð¾Ð»ÑŒÑˆÐµ Ñ‡ÐµÐ¼ Ð² Ð¿ÐµÑ€ÐµÐ¼ÐµÐ½Ð½Ð¾Ð¹ date
		if (date_new > date) {
			//Ð’Ñ‹Ñ‡Ð¸ÑÐ»ÑÐµÐ¼ ÑÐºÐ¾Ð»ÑŒÐºÐ¾ Ð¾ÑÑ‚Ð°Ð»Ð¾ÑÑŒ Ñ‡Ð°ÑÐ¾Ð² Ð´Ð¾ Ð´Ð°Ñ‚Ñ‹ Ð¾Ñ‚ÑÑ‡ÐµÑ‚Ð°.
			//Ð”Ð»Ñ ÑÑ‚Ð¾Ð³Ð¾ Ð¿ÐµÑ€ÐµÐ¼ÐµÐ½Ð½ÑƒÑŽ timer Ð´ÐµÐ»Ð¸Ð¼ Ð½Ð° ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾
			//Ð¼Ð¸Ð»Ð»Ð¸ÑÐµÐºÑƒÐ½Ð´ Ð² Ð¾Ð´Ð½Ð¾Ð¼ Ñ‡Ð°ÑÐµ Ð¸ Ð¾Ñ‚Ð±Ñ€Ð°ÑÑ‹Ð²Ð°ÐµÐ¼ Ð´Ð½Ð¸
			hour = parseInt(timer / (60 * 60 * 1000)) % 24;
			//ÐµÑÐ»Ð¸ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð½Ð¾Ðµ Ñ‡Ð¸ÑÐ»Ð¾ Ð¼ÐµÐ½ÑŒÑˆÐµ 10 Ð¿Ñ€Ð¸Ð±Ð°Ð²Ð»ÑÐµÐ¼ 0
			if (hour < 10) {
				hour = '0' + hour;
			}
			//ÐŸÑ€Ð¸Ð²Ð¾Ð´Ð¸Ð¼ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚ Ðº ÑÑ‚Ñ€Ð¾ÐºÐµ
			hour = hour.toString();
			//Ð’Ñ‹Ñ‡Ð¸ÑÐ»ÑÐµÐ¼ ÑÐºÐ¾Ð»ÑŒÐºÐ¾ Ð¾ÑÑ‚Ð°Ð»Ð¾ÑÑŒ Ð¼Ð¸Ð½ÑƒÑ‚ Ð´Ð¾ Ð´Ð°Ñ‚Ñ‹ Ð¾Ñ‚ÑÑ‡ÐµÑ‚Ð°.
			//Ð”Ð»Ñ ÑÑ‚Ð¾Ð³Ð¾ Ð¿ÐµÑ€ÐµÐ¼ÐµÐ½Ð½ÑƒÑŽ timer Ð´ÐµÐ»Ð¸Ð¼ Ð½Ð° ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾
			//Ð¼Ð¸Ð»Ð»Ð¸ÑÐµÐºÑƒÐ½Ð´ Ð² Ð¾Ð´Ð½Ð¾Ð¹ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ Ð¸ Ð¾Ñ‚Ð±Ñ€Ð°ÑÑ‹Ð²Ð°ÐµÐ¼ Ñ‡Ð°ÑÑ‹
			min = parseInt(timer / (1000 * 60)) % 60;
			//ÐµÑÐ»Ð¸ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð½Ð¾Ðµ Ñ‡Ð¸ÑÐ»Ð¾ Ð¼ÐµÐ½ÑŒÑˆÐµ 10 Ð¿Ñ€Ð¸Ð±Ð°Ð²Ð»ÑÐµÐ¼ 0
			if (min < 10) {
				min = '0' + min;
			}
			//ÐŸÑ€Ð¸Ð²Ð¾Ð´Ð¸Ð¼ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚ Ðº ÑÑ‚Ñ€Ð¾ÐºÐµ
			min = min.toString();
			//Ð’Ñ‹Ñ‡Ð¸ÑÐ»ÑÐµÐ¼ ÑÐºÐ¾Ð»ÑŒÐºÐ¾ Ð¾ÑÑ‚Ð°Ð»Ð¾ÑÑŒ ÑÐµÐºÑƒÐ½Ð´ Ð´Ð¾ Ð´Ð°Ñ‚Ñ‹ Ð¾Ñ‚ÑÑ‡ÐµÑ‚Ð°.
			//Ð”Ð»Ñ ÑÑ‚Ð¾Ð³Ð¾ Ð¿ÐµÑ€ÐµÐ¼ÐµÐ½Ð½ÑƒÑŽ timer Ð´ÐµÐ»Ð¸Ð¼ Ð½Ð° ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾
			//Ð¼Ð¸Ð»Ð»Ð¸ÑÐµÐºÑƒÐ½Ð´ Ð² Ð¾Ð´Ð½Ð¾Ð¹ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ Ð¸ Ð¾Ñ‚Ð±Ñ€Ð°ÑÑ‹Ð²Ð°ÐµÐ¼ Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹
			sec = parseInt(timer / 1000) % 60;
			//ÐµÑÐ»Ð¸ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð½Ð¾Ðµ Ñ‡Ð¸ÑÐ»Ð¾ Ð¼ÐµÐ½ÑŒÑˆÐµ 10 Ð¿Ñ€Ð¸Ð±Ð°Ð²Ð»ÑÐµÐ¼ 0
			if (sec < 10) {
				sec = '0' + sec;
			}
			//ÐŸÑ€Ð¸Ð²Ð¾Ð´Ð¸Ð¼ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚ Ðº ÑÑ‚Ñ€Ð¾ÐºÐµ
			sec = sec.toString();
			//Ð’Ñ‹Ð²Ð¾Ð´Ð¸Ð¼ Ñ‡Ð°ÑÑ‹
			//ÐŸÑ€Ð¾Ð²ÐµÑ€ÑÐµÐ¼ ÐºÐ°ÐºÐ¸Ðµ Ð¿Ñ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰Ð¸Ðµ Ñ†Ð¸Ñ„Ñ€Ñ‹ Ð²Ñ€ÐµÐ¼ÐµÐ½Ð¸ Ð´Ð¾Ð»Ð¶Ð½Ñ‹ Ð²Ñ‹Ð²ÐµÑÑ‚Ð¸ÑÑŒ Ð½Ð° ÑÐºÑ€Ð°Ð½
			//Ð”Ð»Ñ Ð´ÐµÑÑÑ‚ÐºÐ¾Ð² Ñ‡Ð°ÑÐ¾Ð²
			if (hour[1] == 3 &&
				min[0] == 5 &&
				min[1] == 9 &&
				sec[0] == 5 &&
				sec[1] == 9) {
				animation($(elem).find(".hour0"), hour[0]);
			} else {
				$(elem).find(".hour0").html(hour[0]);
			}
			//Ð”Ð»Ñ ÐµÐ´Ð¸Ð½Ð¸Ñ† Ñ‡Ð°ÑÑÐ¾Ð²
			if (min[0] == 5 &&
				min[1] == 9 &&
				sec[0] == 5 &&
				sec[1] == 9) {
				animation($(elem).find(".hour1"), hour[1]);
			} else {
				$(elem).find(".hour1").html(hour[1]);
			}
			//Ð’Ñ‹Ð²Ð¾Ð´Ð¸Ð¼ Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹
			//ÐŸÑ€Ð¾Ð²ÐµÑ€ÑÐµÐ¼ ÐºÐ°ÐºÐ¸Ðµ Ð¿Ñ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰Ð¸Ðµ Ñ†Ð¸Ñ„Ñ€Ñ‹ Ð²Ñ€ÐµÐ¼ÐµÐ½Ð¸ Ð´Ð¾Ð»Ð¶Ð½Ñ‹ Ð²Ñ‹Ð²ÐµÑÑ‚Ð¸ÑÑŒ Ð½Ð° ÑÐºÑ€Ð°Ð½
			//Ð”Ð»Ñ Ð´ÐµÑÑÑ‚ÐºÐ¾Ð² Ð¼Ð¸Ð½ÑƒÑ‚
			if (min[1] == 9 &&
				sec[0] == 5 &&
				sec[1] == 9) {
				animation($(elem).find(".min0"), min[0]);
			} else {
				$(elem).find(".min0").html(min[0]);
			}
			//Ð”Ð»Ñ ÐµÐ´Ð¸Ð½Ð¸Ñ† Ð¼Ð¸Ð½ÑƒÑ‚
			if (sec[0] == 5 && sec[1] == 9) {
				animation($(elem).find(".min1"), min[1]);
			} else {
				$(elem).find(".min1").html(min[1]);
			}
			//Ð’Ñ‹Ð²Ð¾Ð´Ð¸Ð¼ ÑÐµÐºÑƒÐ½Ð´Ñ‹
			//ÐŸÑ€Ð¾Ð²ÐµÑ€ÑÐµÐ¼ ÐºÐ°ÐºÐ¸Ðµ Ð¿Ñ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰Ð¸Ðµ Ñ†Ð¸Ñ„Ñ€Ñ‹ Ð²Ñ€ÐµÐ¼ÐµÐ½Ð¸ Ð´Ð¾Ð»Ð¶Ð½Ñ‹ Ð²Ñ‹Ð²ÐµÑÑ‚Ð¸ÑÑŒ Ð½Ð° ÑÐºÑ€Ð°Ð½
			//Ð”Ð»Ñ Ð´ÐµÑÑÑ‚ÐºÐ¾Ð² ÑÐµÐºÑƒÐ½Ð´
			if (sec[1] == 9) {
				animation($(elem).find(".sec0"), sec[0]);
			} else {
				$(elem).find(".sec0").html(sec[0]);
			}
			$(elem).find(".sec1").html(sec[1]);
			animation($(elem).find(".sec1"), sec[1]);
			//ÐŸÐµÑ€ÐµÐ¾Ð´Ð¸Ñ‡ÐµÑÐºÐ¸ Ð²Ñ‹Ð·Ñ‹Ð²Ð°ÐµÐ¼ ÑÐ¾Ð·Ð´Ð°Ð½Ð½ÑƒÑŽ Ñ„ÑƒÐ½ÐºÑ†Ð¸ÑŽ,
			//Ð¸Ð½Ñ‚ÐµÑ€Ð²Ð°Ð» Ð²Ñ‹Ð·Ð¾Ð²Ð° Ð¾Ð´Ð½Ð° ÑÐµÐºÑƒÐ½Ð´Ð°(1000 Ð¼Ð¸Ð»Ð»Ð¸ ÑÐµÐºÑƒÐ½Ð´)
			setTimeout(get_timer, 1000, elem);
		} else {
			//$("#clock").html("<span id='stop'>ÐžÑ‚ÑÑ‡ÐµÑ‚ Ð·Ð°ÐºÐ¾Ð½Ñ‡ÐµÐ½!!!</span>");
			console.log('end');
		}
	}
	//Ð¤ÑƒÐ½ÐºÑ†Ð¸Ñ Ð´Ð»Ñ ÐºÑ€Ð°ÑÐ¸Ð²Ð¾Ð³Ð¾ Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ Ð²Ñ€ÐµÐ¼ÐµÐ½Ð¸.
	function animation(vibor, param) {
		vibor.html(param)
		// .css({'marginTop':'-20px','opacity':'0'})
		// .animate({'marginTop':'0px','opacity':'1'});
	}
});
///////////////////////////////////////////////////////////////////////////////////
//timer Ð´Ð¾ ÐºÐ¾Ð½Ñ†Ð°
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
//date from moment.js
///////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
	moment.locale(document.getElementsByTagName("html")[0].getAttribute("lang"));
	let commDateFormat = 'DD.MM.YYYY'
	let currentDateFormat = 'DD.MM.YYYY'
	let monthFormat = 'MMMM'
	let yearFormat = 'YYYY'
	let publishDateFormat = 'LL'
	let publishDate = -6

	document.querySelectorAll('.js-current-date').forEach(node => {
		node.innerHTML = moment().format(currentDateFormat);
	});

	document.querySelectorAll('.js-current-month').forEach(node => {
		node.innerHTML = moment().format(monthFormat);
	});

	document.querySelectorAll('.js-current-year').forEach(node => {
		node.innerHTML = moment().format(yearFormat);
	});

	document.querySelectorAll('.js-publish-date-notime').forEach(node => {
		node.innerHTML = moment().add(publishDate, 'days').format(publishDateFormat);
	});
	
	document.querySelectorAll("span[class^=day-]").forEach(node => {
		let num = node.getAttribute("class").split('-')[1]
		node.innerText = moment().add(-num, 'days').format(commDateFormat)
	})
	
})
///////////////////////////////////////////////////////////////////////////////////
//date from moment.js
///////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
//Roulette
////////////////////////////////////////////////////////////////////////////////
var resultWrapper = document.querySelector('.spin-result-wrapper-roulette');
var wheel = document.querySelector('.wheel-img-roulette');
var closePopup = document.querySelector('.close-popup-roulette');
$('.close-popup-roulette, .pop-up-button-roulette').click(function (e) {
	e.preventDefault();
	$('.spin-result-wrapper-roulette').fadeOut();

});
//Ð¤ÑƒÐ½ÐºÑ†Ð¸Ñ Ð´Ð»Ñ Ð¿Ñ€Ð¾ÐºÑ€ÑƒÑ‚ÐºÐ¸ Ñ€ÑƒÐ»ÐµÑ‚ÐºÐ¸//
function spin() {
	if (!wheel.classList.contains('rotated')) {
		wheel.classList.add('super-rotation');
		setTimeout(function () {
			resultWrapper.style.display = "block";
		}, 8000);
		setTimeout(function () {
			$('.spin-wrapper-roulette').slideUp();
			$('.order_block-roulette').slideDown();
			makeTimer(600)
		}, 10000);
		wheel.classList.add('rotated');
	}
}
/////////////////////////////////////////////////////////////////////////
//Roulette
////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
//box
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
	$('.boxes > div').click(function () {
		if ($(this).parent().hasClass('boxesfirsttry')) {
			$('.boxes').removeClass('boxesfirsttry');
			$(this).addClass('openbox');
			$(this).find('.try').hide();
			$(this).find('.opentry').show();
			setTimeout(function () {
				$('.sweet-overlay').show();
				$('.sweet-alert').show();
			}, 500);
		} else if ($(this).parent().hasClass('boxeslasttry')) {
			if (!$(this).hasClass('openbox')) {
				$(this).find('.try').hide();
				$(this).find('.opentry').show();
				$(this).find('.boxtext').css('display', 'block');
				setTimeout(function () {
					$('.spin-result-wrapper-box').show();
					setTimeout(function () {
						$('#boxesContainer').slideUp(250);
						setTimeout(function () {
							$('.order_block').slideDown(250);
						}, 500)
					}, 500)
				}, 500);
			}
		}
	});

	$('#update').click(function () {
		$('.sweet-overlay').hide();
		$('.sweet-alert').hide();
		$('.boxes').addClass('boxeslasttry');
	});

	$('.pop-up-button-box').click(function () {
		$('.spin-result-wrapper').hide();
		$("a").attr("href", "#fforms");
		makeTimer(600);
	})
});
/////////////////////////////////////////////////////////////////////////
//box
////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
//comm
////////////////////////////////////////////////////////////////////////////////
class Comment {
	constructor(
		commentForm,
		inputCommentName,
		inputCommentText,
		formImage,
		formAvatar,
		commentPushBlock
	) {
		this.commentForm = document.querySelector(commentForm);
		this.inputCommentName = document.querySelector(inputCommentName);
		this.inputCommentText = document.querySelector(inputCommentText);
		this.formImage = document.querySelector(formImage);
		this.formAvatar = document.querySelector(formAvatar);
		this.commentPushBlock = document.querySelector(commentPushBlock);
		this.commArrAll = [];
		this.formImageUrl;
		this.formImageChange();
		this.pushComBlock();
		this.domOnloader()
	}

	uploadFile(file) {
		// Ð¿Ñ€Ð¾Ð²ÐµÑ€Ð°ÑÐµÐ¼ Ñ‚Ð¸Ð¿ Ñ„Ð°Ð¹Ð»Ð°
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			alert('Solo se permiten imÃ¡genes.');
			formImage.value = '';
			return;
		}
		// Ð¿Ñ€Ð¾Ð²ÐµÑ€Ð¸Ð¼ Ñ€Ð°Ð·Ð¼ÐµÑ€ Ñ„Ð°Ð¹Ð»Ð° (<2 ÐœÐ±) 
		if (file.size > 1 * 1024 * 1024) {
			alert('El archivo debe tener menos de 1 MB.');
			return;
		}
		var reader = new FileReader();
		reader.onload = (e) => {
			this.formAvatar.innerHTML = `<img src="${e.target.result}" alt="Ð¤Ð¾Ñ‚Ð¾">`;
			this.formAvatar.classList.add('form__avatar--loaded');
			this.formImageUrl = e.target.result;
		};
		reader.onerror = function (e) {
			alert('Error');
		};
		reader.readAsDataURL(file);
	}

	formImageChange() {
		this.formImage.addEventListener('change', () => {
			this.uploadFile(this.formImage.files[0]);
		});
	}

	pushComm() { }

	removeInputClass() {
		if (this.inputCommentName) {
			this.inputCommentName.value = '';
			this.inputCommentName.classList.remove('error')
		}
		this.inputCommentText.value = '';
		this.inputCommentText.classList.remove('error')
	}

	pushComBlock() {
		
		this.commentForm.addEventListener('submit', (e) => {
			console.log(e);
			e.preventDefault();
			if (this.inputCommentName) {
				if (this.inputCommentName.value && inputCommentText.value) {
					this.formAvatar.innerHTML = '';
					this.formAvatar.classList.remove('form__avatar--loaded');
					return this.pushComm();
				}
				this.inputCommentName.classList.add('error')
				this.inputCommentText.classList.add('error')
			} else {
				if (this.inputCommentText.value) {
					this.formAvatar.innerHTML = '';
					this.formAvatar.classList.remove('form__avatar--loaded');
					return this.pushComm();
				}
				this.inputCommentText.classList.add('error')
			}
		})
	}

	domOnloader() {
		document.addEventListener("DOMContentLoaded", () => {
			let commArr = localStorage['commArr'];
			if (commArr) {
				this.commArrAll = JSON.parse(localStorage.getItem('commArr'));
				commentPushBlock.innerHTML = this.commArrAll.join('');
			}
		});
	}
}
/////////////////////////////////////////////////////////////////////////
//comm
////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//likes
////////////////////////////////////////////////////////////////////////
var likesstart = $('#likescount').text();
$(document).ready(function () {
	
	var likes = parseInt($('#likescount').text());
	$('#likesUPD').click(function () {
		if(parseInt(likesstart) == parseInt($('#likescount').text())){
			likes = likes+1;
		}else{
			likes = likes-1;
		}
		$.post('likes.php', {likes: likes});
		$('#likescount').text(likes)
	});
});