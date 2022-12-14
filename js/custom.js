"use strict";

$(function () {
	$(".multiple-items").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrow: true,
		autoplay: false,
		autoplaySpeed: 2000,
		dots: false,
		centerMode: true,
		centerPadding: "0",
	});
});
