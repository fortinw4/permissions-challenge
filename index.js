'use strict';

$(function(){

	var usersPath = 'http://localhost:3000/users/'
	var uid = $('').attr('data-id')

	$.get(usersPath).done(function(users) {
		console.log(users)
	})

	$('button').on('click', function() {
		$('body').append('<li>Brad - <a href="#">Get Permissions</a></li>')
	})

})

