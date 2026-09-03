// Show Current Year in Footer

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.innerHTML = new Date().getFullYear();
}


// Read More Button Function

const readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert(button.dataset.message);

    });

});


// Contact Form Function

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been submitted successfully.");

        contactForm.reset();

    });

}