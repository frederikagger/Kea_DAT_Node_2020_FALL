

function validateForm() {
    const message = document.getElementById("form-message").value;
    const file = document.getElementById("form-file");

    fetch("/uploads", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            message,
            file
        })
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

