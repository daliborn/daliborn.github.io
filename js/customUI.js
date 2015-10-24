			$(document).ready(function(){
				$("#playground").hide();
				$("#about").hide();
				$("#contact").hide();
				$("#home").hide();

				$("#f1").click(function () {
					$("#contact").hide();
					$("#f2").css("opacity","0.3");
					$("#playground").hide();
					$("#f3").css("opacity","0.3");

					$(this).css("opacity","0.9");

					$("#about").show();
					$("#naslov").hide();
					$("#home").fadeIn("slow");
				});

				$("#f2").click(function () {
					$("#about").hide();
					$("#f1").css("opacity","0.3");
					$("#contact").hide();
					$("#f3").css("opacity","0.3");

					$(this).css("opacity","0.9");

					$("#playground").show();
					$("#naslov").hide();
					$("#home").fadeIn("slow");
				});

				$("#f3").click(function () {
					$("#playground").hide();
					$("#f1").css("opacity","0.3");
					$("#about").hide();
					$("#f2").css("opacity","0.3");

					$(this).css("opacity","0.9");

					$("#contact").show();
					$("#naslov").hide();
					$("#home").fadeIn("slow");
				});


				$("#home").click(function () {
					$("#playground").hide();
					$("#about").hide();
					$("#contact").hide();
					$("#home").hide();
					$("#naslov").fadeIn("slow");
					$(".inline").css("opacity","0.9");
				});

			 });