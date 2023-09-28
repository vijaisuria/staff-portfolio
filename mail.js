emailjs.init("YOUR_EMAILJS_USER_ID");

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  emailjs
    .send("YOUR_EMAIL_TEMPLATE_ID", "contact_form", {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    })
    .then(
      function (response) {
        console.log("Email sent successfully", response);
        document.getElementById("success-alert").style.display = "block";
        document.getElementById("myform").reset();
      },
      function (error) {
        console.log("Email sending failed", error);
        document.getElementById("error-alert").style.display = "block";
      }
    );
});
