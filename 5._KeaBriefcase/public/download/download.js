const currentYear = new Date().getFullYear();

const footerCopyright = document.getElementById("footer-copyright");
const copyrightElement = document.createTextNode("© " + currentYear);
footerCopyright.appendChild(copyrightElement);

function validateForm() {
    return true;
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

