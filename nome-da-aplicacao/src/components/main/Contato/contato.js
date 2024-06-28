

export function sendEmail(to, from, subject, body) {
    return window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "jadsonhenriquex91@gmail.com",
        Password: "278F1EA72F9D067C6B2BE15497B0F491E593",
        To: to,
        From: from,
        Subject: subject,
        Body: body,
    });
}
