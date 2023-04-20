//Code for signing up a user. Adds a user with post method and takes in email, username, and password. 
async function signupFormHandler(event) {
	event.preventDefault();
	const username = document.querySelector("#username-signup").value.trim();
	const email = document.querySelector("#email-signup").value.trim();
	const password = document.querySelector("#password-signup").value.trim();

	//if statement for checking against the email, username, and password.
	if (username && email && password) {
		const response = await fetch("/api/users", {
			method: "post",
			body: JSON.stringify({
				username,
				email,
				password,
			}),
			headers: { "Content-Type": "application/json" },
		});
		if (response.ok) {
			console.log(response);
		} else {
			alert(response.statusText);
		}
	}
}

document
	.querySelector("#signup-btn")
	.addEventListener("click", signupFormHandler);
