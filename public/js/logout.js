//Simple text for logging a user out via a post fetch.
async function logout() {
	const response = await fetch("/api/user/logout", {
		method: "post",
		headers: { "Content-Type": "application/json" },
	});

	if (response.ok) {
		document.location.replace("/");
	} else {
		alert(response.statusText);
	}
};

document.querySelector("#logout-btn").addEventListener("click", logout);
