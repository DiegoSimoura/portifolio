let myButton = document.getElementById('myBtn');

window.addEventListener('scroll', () => {
  myButton.style.display = window.scrollY > 20 ? 'block' : 'none';
});

function topFunction() {
  scrollToTop(500);
}

function scrollToTop(duration) {
  const startingY = window.scrollY;
  const diff = -startingY;
  let start;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);
    window.scrollTo(0, startingY + diff * percent);
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('slides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3500);
}

function mobileTab() {
  var x = document.getElementById('myMenu');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

var TEXTS = ['FRONT-END', 'DEVELOPER', 'TALENT'];

var index = 0;

$(function () {
  setInterval(function () {
    $('#header-txt-change').fadeOut(500, function () {
      $(this).text(TEXTS[index++]).fadeIn(500);
      if (index === TEXTS.length) index = 0;
    });
  }, 3500);
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const response = await fetch('/send-email', {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    alert('Message sent successfully!');
    form.reset();
  } else {
    alert('An error occurred while sending the message.');
  }
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'diegosimoura@gmail.com',
    pass: '!S1moura190193',
  },
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'diegosimoura@gmail.com',
    to: 'diego_simoura@hotmail.com',
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred while sending the email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.sendStatus(200);
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
