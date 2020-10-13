const currentYear = new Date().getFullYear();

const footerCopyright = document.getElementById("footer-copyright");
const copyrightElement = document.createTextNode("© " + currentYear);
footerCopyright.appendChild(copyrightElement);

// change it to post this time on /form

function handleFormSubmitted() {
    const formMessage = document.getElementById("form-message").value;
    $.get("/form?message="+formMessage, (response) => {
        console.log(response);
    });
}

