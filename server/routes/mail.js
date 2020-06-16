const mailer = require("nodemailer");

const getEmailData = (name, email, message, file) => {
    let data = null;


            data = {
                from: "Contact Form",
                to: "flashgasandplumbing@gmail.com",
                subject: `Message from the contact form!`,
                attachments: [
                    {
                      path: `${file}`
                    }
                  ],
                html: `<b>From:</b>&nbsp;${name}
                      <br><br><b>Email:</b>&nbsp;${email}
                      <br><br><b>Message:</b>&nbsp;${message}`
            }
    return data;
}

 
const sendEmail = (name, email, message, file) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "flashgasandplumbing@gmail.com",
            pass: "hillcountry22"
        }
    })

    const mail = getEmailData(name, email, message, file)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            alert( "Thank you! We will be in touch shortly!")
        }
        smtpTransport.close();
    })


}

module.exports = { sendEmail }