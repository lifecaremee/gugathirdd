/* contact.js */
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", async e => {
        e.preventDefault();
        const formData = new FormData(form);

        const res = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (res.ok) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Error — please try again.");
        }
    });
}