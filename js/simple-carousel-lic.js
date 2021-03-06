var slideIndexLicense = 0;
document.getElementById("lic-prev-btn").addEventListener("click",function(e){
	e.preventDefault();
	plusDivsL(-1);
});
document.getElementById("lic-next-btn").addEventListener("click",function(e){
	e.preventDefault();
	plusDivsL(1);
});

showDivsL(slideIndexLicense);
carouselCL();

function plusDivsL(n){
	showDivsL(slideIndexLicense += n);
}

function showDivsL(n){
	var i;
	var x = document.getElementsByClassName("lic-item");
	if (n > x.length) {slideIndexLicense = 1}
	if (n < 1) {slideIndexLicense = x.length} ;
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("active-slide");
	}
	x[slideIndexLicense-1].classList.add("active-slide");
}

function carouselCL(){
	var slide = document.querySelectorAll(".lic-item");
	if (slideIndexLicense > slide.length)
		slideIndexLicense = 1;
	document.querySelector("#lic-next-btn").click();
	setTimeout(carouselCL, 3000); // Change slide every 3 seconds
}
