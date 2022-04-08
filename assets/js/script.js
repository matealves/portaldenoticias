var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 7000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for(var i=0;i<objs.length;i++) {
		objs[i].style.width = slidewidth+"px";
	}
}
function passarSlide() {
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	
	if(slideItem >= 2) {
		slideItem = 0;
	} else {
		slideItem++;
	}

	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}
function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

function toggleMenu() {
	let menu = document.getElementById("menu");

	if(menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
		menu2.style.display = 'none';
		menu3.style.display = 'none';
		menu4.style.display = 'none';
	} else {
		menu.style.display = "none";
	}

}

function toggleMenu2() {
	let menu2 = document.getElementById("menu2");

	if(menu2.style.display == 'none' || menu2.style.display == '') {
		menu2.style.display = "block";
	} else {
		menu2.style.display = "none";
	}

}

function toggleMenu3() {
	let menu3 = document.getElementById("menu3");

	if(menu3.style.display == 'none' || menu3.style.display == '') {
		menu3.style.display = "block";
	} else {
		menu3.style.display = "none";
	}

}

function toggleMenu4() {
	let menu4 = document.getElementById("menu4");

	if(menu4.style.display == 'none' || menu4.style.display == '') {
		menu4.style.display = "block";
	} else {
		menu4.style.display = "none";
	}

}