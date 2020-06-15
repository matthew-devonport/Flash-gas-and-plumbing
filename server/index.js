const server = require('./server')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cookieParser());

const { sendEmail } = require("../server/routes/mail");



server.post("/api/v1/sendMail", (req, res) => {
  sendEmail(req.body.name, req.body.email, req.body.message, req.body.file);
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', port)
})
