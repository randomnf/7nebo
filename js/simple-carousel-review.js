var slideIndexCReview = 0;
document.getElementById("rev-prev-btn").addEventListener("click",function(e){
	e.preventDefault();
	plusDivs(-1);
});
document.getElementById("rev-next-btn").addEventListener("click",function(e){
	e.preventDefault();
	plusDivs(1);
});

showDivs(slideIndexCReview);
carouselCR();

function plusDivs(n){
	showDivs(slideIndexCReview += n);
}

function showDivs(n){
	var i;
	var x = document.getElementsByClassName("client-review-item");
	if (n > x.length) {slideIndexCReview = 1}
	if (n < 1) {slideIndexCReview = x.length} ;
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("active-slide");
	}
	x[slideIndexCReview-1].classList.add("active-slide");
}

function carouselCR(){
	var slide = document.querySelectorAll(".client-review-item");
	if (slideIndexCReview > slide.length)
		slideIndexCReview = 1;
	document.querySelector("#rev-next-btn").click();
	setTimeout(carouselCR, 5000); // Change slide every 3 seconds
}
