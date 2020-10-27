

function validateForm() {




    const message = document.getElementById("form-message").value;

    fetch("/form", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            message
        })
    })
    .then(res => res.json())
    .then(res => {
        window.location.href = "/download";
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

