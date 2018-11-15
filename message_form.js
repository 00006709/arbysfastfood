var $ = (arg) => document.querySelector(arg);

window.onload = () => {

	let tbody = $('#tbody')	;
	let form_elements = localStorage.getItem('message_form');
	let elements; 

	if (form_elements == null) {
		console.log('error');
	} else {
		elements = JSON.parse(form_elements)
	} 	

	for (element of elements) {
		let body_content = `
			<tr>
				<td>${element.name}</td>
				<td>${element.email}</td>
				<td>${element.message}</td>
			</tr>
		`
		tbody.innerHTML += body_content
	}
}