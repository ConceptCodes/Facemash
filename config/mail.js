const
  nodemailer = require('nodemailer'),
  { MAIL, MAIL_PASSWORD } = process.env

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: MAIL,
    pass: MAIL_PASSWORD
  }
})

let mail = options => {
  return new Promise((resolve, reject) => {
    let o = {
      from: `Facemash <${MAIL}>`,
      ...options
    }
    transporter.sendMail(o, (err, res) => {
      err ? reject(err) : resolve('Mail Sent!!')
    })
  })
}

module.exports = mail
