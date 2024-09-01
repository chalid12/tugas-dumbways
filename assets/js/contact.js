function sendEmail(event) {
  event.preventDefault();
  const inputName = document.getElementById("nama").value;
  const inputEmail = document.getElementById("email").value;
  const inputPhone = document.getElementById("telepon").value;
  const inputSubject = document.getElementById("subject").value;
  const inputMessage = document.getElementById("pesan").value;

  if (inputName.length === 0) {
    return alert("Name harus diisi");
  } else if (inputEmail.length === 0) {
    alert("Email Harus Diisi");
  } else if (inputPhone.length === 0) {
    return alert("Phone Number tidak boleh kosong");
  } else if (inputSubject.length === 0) {
    return alert("Subject tidak boleh kosong");
  } else if (inputMessage.length === 0) {
    return alert("Message tidak boleh kosong");
  }
  console.log(
    `Name : ${inputName}\nEmail : ${inputEmail}\nPhone : ${inputPhone}\nSubject : ${inputSubject}\nMessage : ${inputMessage}`
  );

  const recipientEmail = "chalid12anwar@gmail.com";
  const link = document.createElement("a");
  link.href = `mailto:${recipientEmail}?subject=${inputSubject}&body=Nama: ${inputName}<br> Pengirim: ${inputEmail}<br>Nomor HP: ${inputPhone}<br>Message: ${inputMessage}\n\n`;

  link.click();

  const contact = {
    name: inputName,
    email: inputEmail,
    phoneNumber: inputPhone,
    subject: inputSubject,
    message: inputMessage,
  };

  console.log(contact);
}
