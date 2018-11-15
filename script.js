//toggle login signup 
$('.message a').click(function() {
$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

jQuery(window).load(function() {
  checkUser(); 
});


// get information for features section
var features_section = [
	{
		features_icon : 'https://image.flaticon.com/icons/svg/883/883765.svg',
		features_title : 'Food',
		features_paragraph : 'Throughout each day, our trained cooks freshly prepare fast food using the Secret Recipe of 13 herbs & spices. It takes more than 25 minutes to hand bread and cook our meal before it’s ready for your bucket or boxed meal.'
	},
	{
		features_icon : 'https://image.flaticon.com/icons/svg/1211/1211834.svg',
		features_title : 'Diversity',
		features_paragraph : 'Diversity is part of founding “How We Work Together” principles in Arby`s Best Food Corporation. Our global culture is actively developing a workforce that is diverse in style and background, where everyone can make a difference.'
	},
	{
		features_icon : 'https://image.flaticon.com/icons/svg/1132/1132264.svg',
		features_title : 'Enviroment',
		features_paragraph : 'Arby`s Best Food Corporation is as committed to the environment as we are to our food and customers. Read more about the steps we have taken to reduce our environmental footprint and plans for improvement moving forward.'
	},
]

function features (list){
	for (var i of list) {

		var main_div = document.createElement('div');
		main_div.setAttribute('class', 'col-md-4');

		var features_icon = document.createElement('img');
		features_icon.setAttribute('class', 'three-logo')
		features_icon.src = i.features_icon;

		var features_title = document.createElement('h4');
		features_title.innerHTML = i.features_title;

		var features_paragraph = document.createElement('p');
		features_paragraph.setAttribute('class', 'three text-center');
		features_paragraph.innerHTML = i.features_paragraph;

		main_div.appendChild(features_icon);
		main_div.appendChild(features_title);
		main_div.appendChild(features_paragraph);
		if (document.getElementById('row')) {
			document.getElementById('row').appendChild(main_div);
		}
	}
}

features(features_section);

function getId(id){
	return document.getElementById(id);
}

var loginBtn = getId('login');
var signUpBtn = getId('signUp');
var form = getId('form');
var user_arr = [];

if (signUpBtn) {

	signUpBtn.addEventListener('click', function(event){
	event.preventDefault();

	var sign_username = getId('sign_username').value;
	var sign_password = getId('sign_password').value;
	var sign_phone_number = getId('sign_phone_number').value;

	if (sign_username === "" && sign_password === "" && sign_phone_number == "") {
		swal({
			type: "error",
			title: "Error in login",
			text: "Please fill out all fields",
		})
	}else{
		swal(
	  		'Success!',
	  		'You are signed up!',
	  		'success'
		)
		let elements = {
			username : sign_username,
			password : sign_password,
			sign_phone_number : sign_phone_number
		}

		user_arr.push(elements);
		
		localStorage.setItem('user', JSON.stringify(user_arr));

		form.reset();
	}
});	
}

if (loginBtn) {
	loginBtn.addEventListener("click", function(event){
		event.preventDefault();

		let user = localStorage.getItem('user');
		let users;

		var username = getId('username').value;
		var password = getId('password').value;


		if (username === "" || password === "") 
		{
			swal({
				type: "error",
				title: "Error in login",
				text: "Please fill out all fields",
			})
		}else 
		{
			if (user == null) {
				console.log('error');
			}else{
				users = JSON.parse(user);
			}
			for (user_inf of users) 
			{
				if (username == user_inf.username && password == user_inf.password) {
					swal(
				  		'Hi, ' + user_inf.username,
				  		'You are logged in!',
				  		'success'
					)
				window.location.href="menu.html";
				} else {
					swal({
				  		type: 'error',
				  		title: 'Wrong credentials',
				  		text: "Username or password wrong",
					})
				}	
			}
			
		}
	});
}
function checkUser(){
	let user = localStorage.getItem('user');
	let users;	

	if (user == null) {
		console.log('error');
	}else{
		users = JSON.parse(user);
	}
}

var sendBtn = getId("sendBtn");

var message_array = [];
if (sendBtn) {
		sendBtn.addEventListener('click', function(event){
		event.preventDefault();

		var name = getId('name').value;
		var email = getId('email').value;
		var message = getId('message').value;
		var form = getId('form_contact');

		if (name === "" && email === "" && message === "") {
			alert('Please, fill all fields with relevant information');
		}else{
			swal(
		  		'Your message has sent',
		  		' Thank you for your review!',
		  		'success'
			)	
			let msg = {
				name : name,
				email : email,
				message : message
			}

			message_array.push(msg);

			localStorage.setItem('message_form', JSON.stringify(message_array));

			form.reset();
		}

	});	
}




















