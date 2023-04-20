//code for loggin into the application. it finds a user by username and checks password.
async function loginFormHandler(event) {
	event.preventDefault();

	const username = document.querySelector("#username-login").value.trim();
	const password = document.querySelector("#password-login").value.trim();

	if (username && password) {
		const response = await fetch("/api/user/login", {
			method: "post",
			body: JSON.stringify({
				username,
				password,
			}),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/dashboard");
			console.table(response);
		} else {
			alert(response.statusText);
		}
	}
};

document
	.querySelector("#login-form")
	.addEventListener("submit", loginFormHandler);
