$ ->
	$('.close').on "click", ->
		$(this).parents('.updatebox').fadeOut("fast")

	$('.close').on "click", ->
		$(this).parents('.newbox').fadeOut("fast")


	$('.newbird').on "click", ->
		$('.newbox').fadeIn("fast")



$(document).on "click", ".name", ->
	bird_id = $(this).parents('.birdcage').attr('id')
	$('#update-' + bird_id).fadeIn "fast"

$('.edit_bird').submit ->
	valuesToSubmit = $(this).serialize()
	raw_id 				 = $(this).attr('id')
	bird_id 			 = raw_id.replace("edit_bird_", "")
	
	$.ajax
		url: "/birds/" + bird_id
		type: 'PATCH'
		data: valuesToSubmit
		dataType: "JSON"
		success: (json) ->
			$("#" + json.id).replaceWith('<div class="birdholder"><div class="birdcage" id="' + json.id + '"><div class="bird ' + json.color + ' ' + json.size + ' "><div class="row"><div class="eye"></div><div class="eye"></div></div><div class="row"><div class=upperBeak></div></div><div class="row"><div class="lowerBeak"></div></div><div class="wing ' + json.color + '"><br></div></div><div class="name"> ' + json.name + '</div><div class="remove" data-bird-id="' + json.id + '">X</div></div></div></div>')
		false

$('.new_bird').submit ->
	valuesToSubmit = $(this).serialize()
	$.ajax
		url: "/birds/"
		type: 'POST'
		data: valuesToSubmit
		dataType: "JSON"
		success: (json) ->
			console.log(json)
			$('#wire').append('<div class="birdholder"><div class="birdcage" id="' + json.id + '"><div class="bird ' + json.color + ' ' + json.size + ' "><div class="row"><div class="eye"></div><div class="eye"></div></div><div class="row"><div class=upperBeak></div></div><div class="row"><div class="lowerBeak"></div></div><div class="wing ' + json.color + '"><br></div></div><div class="name"> ' + json.name + '</div><div class="remove" data-bird-id="' + json.id + '">X</div></div></div></div>')
			$('.newbox').fadeOut("fast")
		false

$(document).on "click", ".remove", ->
	bird_id = $(this).attr('data-bird-id')
	panel = $(this)
	$.ajax
		url: "/birds/" + bird_id
		type: "DELETE"
		success: (data) -> 
			$(panel).parents('.birdcage').hide("slow");






