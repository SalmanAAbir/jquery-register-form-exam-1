$(document).ready(function(){

	$("#btn").addClass("disabled");
	$("#user,#pass,#mail").keyup(function(){
		var u= $("#user").val().length;
		var p =$("#pass").val().length;
		var m =$("#mail").val().length;
		
		/*$("#tuser").text(u);*/
		//$("#tpass").text(p);
		if(u==0){
			$("#duser").addClass("blank");
		}
		else if(u<6){
			$("#duser").removeClass("blank");
			$("#duser").text("Less than 6").addClass("red");
		}
		else if(u>6){
			$("#duser").removeClass("blank");
			$("#duser").text(" ok ").addClass("green");	
		}

		

		if(p==0){
			$("#dpass").addClass("blank");
		}
		else if(p<6){
			$("#dpass").removeClass("blank");
			$("#dpass").text("Length at least 6").addClass("red");
		}
		else if(p>6){
			$("#dpass").removeClass("blank");
			$("#dpass").text("success").addClass("green");	
		}

		if(u>=6 && p>=6 && m>0){
			$("#btn").removeClass("disabled");
		}
		else{
			$("#btn").addClass("disabled");
		}
	});

	$("#btn").click(function(){
		var n = $("#user").val();
		alert("alert");
	});


});