var formOC = document.querySelector(".order-call-form .order-call-btn");
var smPpp = document.querySelector(".popup-sendmail-wrap");
var closebtn=document.querySelector(".close-popup-btn");
var closebtn1=document.querySelector(".popup-sendmail-wrap .order-call-btn");

closebtn.addEventListener("click",function(evt){
	smPpp.classList.remove("opened");
});

closebtn1.addEventListener("click",function(evt){
	smPpp.classList.remove("opened");
});

formOC.addEventListener("click",function(evt){
	smPpp.classList.add("opened");
});

$(document).mouseup(function(e){
	var smWin = $(".popup-sendmail");
	if(!smWin.is(e.target) && smWin.has(e.target).length === 0)
		smPpp.classList.remove("opened");
});

$(document).ready(function(){
	$(".order-call-form .order-call-btn").onclick(function(){
		this.preventDefault();
		smPpp.classList.add("opened");/*
			var form_data = $(this).serialize();
			$.ajax({
			type: "POST", //Метод отправки
			url: "send.php", //путь до php фаила отправителя
			data: form_data,
			success: function() {
					//код в этом блоке выполняется при успешной отправке сообщения
					smPpp.classList.add("opened");
			});*/
	});
});