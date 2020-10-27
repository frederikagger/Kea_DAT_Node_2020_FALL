function validateForm() {
    const form = document.getElementById('form-upload');
    const formData = new FormData(form);

    fetch("/uploads", {
        method: "POST",
        // when setting the formData it will not work by setting the content-type
/*        headers: {
            "content-type": "application/json"
        },*/
        body: formData
    })
    .then(response => response.json())
    .then(result => {
        window.location.href = `/download/${result.id}`;
    });

}

/*function handleFormSubmitted() {
    const formMessage = document.getElementById("form-message").value;
/!*    $.ajax({
        url: "/form",
        type: "POST",
        data: { formMessage }
    }).done((response) => {
        console.log(response.data);
    });*!/
}*/

