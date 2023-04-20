async function deletePostFormHandler(event) {
	event.preventDefault();
// code for deleting a post by fetching post by id and deleting.
	const id = window.location.toString().split("/")[
		window.location.toString().split("/").length - 1
	];
	const response = await fetch(`/api/posts/${id}`, {
		method: "DELETE",
	});

	if (response.ok) {
		document.location.replace("/dashboard");
	} else {
		alert(response.statusText);
	}
}

document
	.querySelector(".delete-post-btn")
	.addEventListener("click", deletePostFormHandler);
