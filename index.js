'use strict';

$(function(){

	var usersPath = 'http://localhost:8080/users/'
	var uid = $('').attr('data-id')

	$.get(usersPath).done(function(users) {
		console.log(users)
	})

	$('button').on('click', function() {
		$('body').append('<ul><li>Brad - <a href="#">Get Permissions</a></li></ul>')
	})

})

