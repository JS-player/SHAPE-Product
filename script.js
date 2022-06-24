
var step = 100;
		var scrolling = true;


			$(".preSlide").bind("click", function(event) {
			event.preventDefault();

			$("div").animate({
				scrollLeft: "-=" + step + "px"
			});
		});



			$(".nextSlide").bind("click", function(event) {
			event.preventDefault();
			$("div").animate({
				scrollLeft: "+=" + step + "px"
			});
		})

// =====================Redicrect user after ordering=======================================
const host = window.location.protocol + "//" + window.location.host;
let redirectValue = document.getElementById('redDir').value;
document.getElementById('redDir').value = `${host}/thanks.html`;
console.log(redirectValue);



