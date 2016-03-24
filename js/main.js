$(document).ready(documentReady);

function documentReady() {
};

$(".sidebar-link").click(learnMoreClick)
$("#blog-link1").click(readMoreClick1)
$("#blog-link2").click(readMoreClick2)
$("#readless1").click(readLessClick1)
$("#readless2").click(readLessClick2)
$("#learnless").click(learnLessClick)


function learnMoreClick() {
	event.preventDefault();
	$("#learnmoretext").slideDown();
	$(".sidebar-link").hide();
}

function learnLessClick() {
	event.preventDefault();
	$("#learnmoretext").slideUp();
	$("#learnmoretext").hide();
	$(".sidebar-link").show();
}

function readMoreClick1() {
	event.preventDefault();
	$("#readmoretext1").slideDown();
	$("#blog-link1").hide();
}

function readMoreClick2() {
	event.preventDefault();
	$("#readmoretext2").slideDown();
	$("#blog-link2").hide();
}

function readLessClick1() {
	event.preventDefault();
	$("#readmoretext1").slideUp();
	$("#readmoretext1").hide();
	$("#blog-link1").show();
}


function readLessClick2() {
	event.preventDefault();
	$("#readmoretext2").slideUp();
	$("#readmoretext2").hide();
	$("#blog-link2").show();
}
