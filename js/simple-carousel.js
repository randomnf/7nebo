var slideIndex = 0;
carousel();

function getIdNum(attr){
	return parseInt(attr.replace(/\D+/ig,""));
}

var sliderBtnList = document.querySelectorAll(".slider-btn");
var sliderRadioList = document.querySelectorAll(".slider-radio");

for(var i=0;btn = sliderBtnList[i];i++){
	btn.addEventListener("click",function(){
		var attrFor = this.getAttribute("for");
		var idNum = getIdNum(attrId);
		var radioLinked = document.getElementById("slider-btn-"+idNum);
		radioLinked.checked=true;
	});
}

for(var i=0;radio = sliderRadioList[i];i++){
	radio.addEventListener("change",function(){
		var attrId = this.getAttribute("id");
		var idNum = getIdNum(attrId);
		var currentActiveSlide = document.querySelectorAll(".slider-viewport>.active-slide");
		for(var i=0;as=currentActiveSlide[i];i++){
			as.classList.remove("active-slide");
		}
		var slideItem = document.getElementById("slide-"+idNum);
		slideItem.classList.add("active-slide");
		slideIndex = idNum-1;
	});
}

function carousel(){
	var sbl = document.querySelectorAll(".slider-btn");
	slideIndex++;
	if (slideIndex > sbl.length)
		slideIndex = 1;
	sbl[slideIndex-1].click();
	setTimeout(carousel, 2000); // Change slide every 3 seconds
}
