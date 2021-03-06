﻿function AjaxFormRequest(sendmailmsg,mainform,phpfile,phoneID) {
	var phoneval = document.getElementById(phoneID);
	if(phoneval.value!=""){
		$.ajax({
			url: phpfile,
			type: "POST",
			dataType: "html",
			data: $("#"+mainform).serialize(), 
			success: function(response) {
				document.getElementById(sendmailmsg).innerHTML = response;
				phoneval.value="";
			},
			error: function(response) {
				document.getElementById(sendmailmsg).innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
			}
		});
		document.getElementById('sendmail-popup').classList.add('opened');
	}
	else
		document.querySelector('#action-bd-phone').setCustomValidity("Пожалуйста, введите номер телефона.");
}

var closeBtnList = document.querySelectorAll("#sendmail-popup .popup-inner button");
var popupWindow = document.getElementById('sendmail-popup');

for(var i=0;cbtn=closeBtnList[i];i++){
	cbtn.addEventListener("click",function(){
		popupWindow.classList.remove("opened");
	})
}

$(document).mouseup(function(e){
	var popupMsg = $(".popup-sendmail");
	if(!popupMsg.is(e.target) && popupMsg.has(e.target).length === 0)
		popupWindow.classList.remove("opened");
});