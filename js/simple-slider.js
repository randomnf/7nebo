window.onload = function(){
	var adviceTexts = document.querySelectorAll(".advice-text");
	var maxH = 0;
	var slider = document.querySelector(".advices-slider");
	for(var i=0;item=adviceTexts[i];i++){
		if(item.scrollHeight > maxH)
			maxH = item.scrollHeight;
	}
	slider.style.marginBottom = (maxH + 40) + "px";
};

function getIdNum(attr){
	return parseInt(attr.replace(/\D+/ig,""));
}

var adviceBtnList = document.querySelectorAll(".advice-btn");
var radioList = document.querySelectorAll(".advice-radio");

for(var i=0;btn = adviceBtnList[i];i++){
	btn.addEventListener("click",function(){
		var attrFor = this.getAttribute("for");
		var idNum = getIdNum(attrFor);
		var radioLinked = document.getElementById("advice-content-"+idNum);
		radioLinked.click();
	});
}

for(var i=0;radio = radioList[i];i++){
	radio.addEventListener("click",function(){
		var attrId = this.getAttribute("id");
		var idNum = getIdNum(attrId);
		var currentActiveSlide = document.querySelector(".active-slide");
		currentActiveSlide.classList.remove("active-slide");
		var slideItem = document.getElementById("advice-content-"+idNum);
		slideItem.classList.add("active-slide");
	});
}
