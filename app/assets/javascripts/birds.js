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
$(document).on('click', '.name', function(){
	console.log('i was clicked');
	var bird_id = $(this).parents('.birdcage').attr('id');
	$('#update-' + bird_id).fadeIn("fast");
});

$('.edit_bird').submit(function() {
	var valuesToSubmit = $(this).serialize(),
			raw_id 				 = $(this).attr('id');
			bird_id 			 = raw_id.replace('edit_bird_', '');
	
	$.ajax({
		url: "/birds/" + bird_id,
		type: 'PATCH',
		data: valuesToSubmit,
		dataType: "JSON"
	}).success(function(json){
		console.log(json);
		console.log(json.id);
		console.log("#"+json.id);
		$("#" + json.id).replaceWith('<div class="birdholder"><div class="birdcage" id="' + json.id + '"><div class="bird ' + json.color + ' ' + json.size + ' "><div class="row"><div class="eye"></div><div class="eye"></div></div><div class="row"><div class=upperBeak></div></div><div class="row"><div class="lowerBeak"></div></div><div class="wing ' + json.color + '"><br></div></div><div class="name"> ' + json.name + '</div><div class="remove" data-bird-id="' + json.id + '">X</div></div></div></div>');
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
	}).success(function(json){
		 $('#wire').append('<div class="birdholder"><div class="birdcage" id="' + json.id + '"><div class="bird ' + json.color + ' ' + json.size + ' "><div class="row"><div class="eye"></div><div class="eye"></div></div><div class="row"><div class=upperBeak></div></div><div class="row"><div class="lowerBeak"></div></div><div class="wing ' + json.color + '"><br></div></div><div class="name"> ' + json.name + '</div><div class="remove" data-bird-id="' + json.id + '">X</div></div></div></div>');
			$('.newbox').fadeOut("fast");
	});
	return false;
});


//Delete
$(document).on('click', '.remove', function(){


// $('.remove').on('click', function(){
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


// $('form').on('ajax:complete', function,data,status ,xhr) {
// 	var item =data.responseText,
// 			 item_li = document.getElelmentById(data.id)
// 			 name =item.name;
// 		$('#item_li').replace('<li>' + name + "</li>");
// }
	