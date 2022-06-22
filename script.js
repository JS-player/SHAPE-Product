

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






