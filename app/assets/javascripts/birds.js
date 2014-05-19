$ (function() {
$('.close').on( "click", function(){
	$(this).parents('.updatebox').fadeOut("fast");
});

$('.close').on( "click", function(){
	$(this).parents('.newbox').fadeOut("fast");
});

$('.newbird').on('click', function(){
	$('.newbox').fadeIn("fast");
})

//EDIT
$('.name').on( "click", function() {
	var bird_id = $(this).parents('.birdcage').attr('id');
	$('#update-' + bird_id).fadeIn("fast");
});

$('.edit_bird').submit(function() {
	var valuesToSubmit = $(this).serialize(),
			raw_id 				 = $(this).attr('id');
			bird_id 			 = raw_id.replace('edit_bird_', '');
	console.log("this is what its getting")
	console.log(bird_id);	
	console.log(valuesToSubmit);
	$.ajax({
		url: "/birds/" + bird_id,
		type: 'PATCH',
		data: valuesToSubmit,
		dataType: "JSON"
	}).success(function(data){
		if (data == 1) {
			console.log("true");
			$('.bird').fadeOut("fast");

			location.reload(true);
			$('.bird').fadeIn("fast");
		}
		else {
			console.log("false");
		}
	});
	return false;
});


//CREATE
$('.new_bird').submit(function() {
	var valuesToSubmit = $(this).serialize();
	$.ajax({
		url: "/birds/",
		type: 'POST',
		data: valuesToSubmit,
		dataType: "JSON"
	}).success(function(data){
		if (data == 1) {
			location.reload(true);
			console.log("true");
		}
		else {
			console.log("false");
		}
	});
	return false;
});


//Delete

$('.remove').on('click', function(){
  var bird_id = $(this).attr('data-bird-id');
  var panel = $(this);
  console.log(bird_id);

  $.ajax({
    url: "/birds/" + bird_id,
    type: "DELETE",
    data:{

    },
    success: function(data){
      console.log(data);  
        if (data == "1") {
          console.log("true");
          $(panel).parents('.birdcage').hide("slow");
        }
        else {

        }
      }
      });

});
        





});




		
	
	