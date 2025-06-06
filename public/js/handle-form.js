const contactForm = document.getElementById("contactForm");
const submitButton = document.getElementById("submit-btn");
const successMessage = document.getElementById("successMessage");

console.log({
  contactForm,
  submitButton,
});

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const formValues = Object.fromEntries(formData.entries());

  await submitForm(formValues);
});

async function submitForm(formValues) {
  try {
    const resposne = await fetch("/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    if (!resposne.ok) {
      alert("There was an error submitting the form. Please try again later.");
      return;
    }

    const result = await resposne.json();
    console.log(result);

    successMessage.style.display = "block";
    successMessage.textContent =
      "Form submitted successfully! Thank you for your message.";

    contactForm.reset();
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("There was an error submitting the form. Please try again later.");
  }
}
