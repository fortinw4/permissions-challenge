'use strict';

$(function(){

	var usersPath = 'http://localhost:3000/users'
	var permPath = 'http://localhost:3000/permissions'
	var homePath = 'http://localhost:8080/'

	$('.users-btn').on('click', function() {
		$('.permissions').hide()
		$.get(usersPath).done(function(users) {
			users.forEach(function(user) {
				// console.log(user)
				$('.users').append('<li data-id="' + user.id + '" data-name="' + user.name + '"> ' + user.name + ' <a href="#">Permissions</a></li>' + '<br>')
			})	
		})		
	})

	$('ul').on('click', 'a', function() {
		var uname = $(this).parents('li').data('name')
		var uid = $(this).parents('li').data('id')
		$('.page1').text('')
		$('.page2').show()
		$('h1').append(uname)
		$.get(permPath).done(function(perms) {
			perms.forEach(function(perm) {
				if (uid === perm.userId) {
					$('.page2').append('<li>' + perm.permissions + '</li>')
				}
			})
		})
		$('.home-btn').on('click', function () {
			window.location = homePath
		})
	})
})	



		// $.get(usersPath).done(function(users) {
		// 	users.forEach(function(user) {
		// 		console.log(user)
		// 	})
		// })


// $.get(permPath).done(function(perms) {
		// 	perms.forEach(function(perm) {
		// 		$('ul').append(perm.permissions + '<br>')
		// 	})
		// })














	// $.get(usersPath).done(function(users) {
	// 	console.log(users)
	// 	users.forEach(function(user) {
	// 		// $.get(usersPath + users.id + '/posts')
	// 		// 	.done(function (userPosts) {
	// 		// 		console.log(user.name)
	// 		// 	})
	// 	})
	// })


// })		
			// $('body').append('<li>Brad - <a href="#">Get Permissions</a></li>')
			// $('body').append('<li>Brig - <a href="#">Get Permissions</a></li>')
			// $('body').append('<li>Dave - <a href="#">Get Permissions</a></li>')
			// $('body').append('<li>Sam - <a href="#">Get Permissions</a></li>')
// 		})

// })


// getUsers
// 	getPerm
// 		loop over users
// 			loop over permissions
// 				compare does currentPerm match currentUserId

// 				OR

// getUsers
// 	loop over users
// 		getPermForUser(id)
// 			currentUser.perms = currentPermissions

// $.get(//users)
// 	.done(function (users) {
// 		$.get(//permissions)
// 			.done(function(perms) {
// 				users.forEach(function (currentUser) {
// 					currentUser.perms = []
// 					perms.forEach(function (currentPerm)) {
// 						console.log('does it match?', currentUser.id === currentPerm.userId)

// 						if (currentUser.id === currentPerm.userId) {
// 							currentUser.perms.push(currentPerm)
// 						}
// 					}
// 				})
// 			})
// 		 console.log('done looping')
// 		 console.log('users', users)
// 	})

// var tmpl = Handlebars.compile ({{name}} has {{#perms}}: {{create}}) {{read}} {{update}}