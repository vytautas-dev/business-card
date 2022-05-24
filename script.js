//theme change

let theme = localStorage.getItem('theme');
      let themeDots = document.querySelectorAll('.theme-dot');
      let themeStyle = document.querySelector('#theme-style');

      themeDots.forEach((item) => {
        item.addEventListener('click', () => {
          let mode = item.dataset.mode;
          setTheme(mode);
        });
      });

      const setTheme = (mode) => {
        if (mode === 'dark') {
          themeStyle.href = 'default.css';
        }
        if (mode === 'green') {
          themeStyle.href = 'green.css';
        }
        if (mode === 'blue') {
          themeStyle.href = 'blue.css';
        }
        if (mode === 'purple') {
          themeStyle.href = 'purple.css';
        }
        localStorage.setItem('theme', mode);
      };

      if (theme === null) {
        setTheme('dark');
      } else {
        setTheme(theme);
      }

        //email.js

        function sendMail() {
          console.log("send email");
          let params = {
            name: name.value,
            subject: subject.value,
            email: email.value,
            message: message.value
          }
          emailjs.send('service_clrett1', 'template_jqrl9bo', params)
          .then(function (res){
            alert("The message was sent successfully! Thank you, I will reply as fast I can do.")
            clearValue();
          })
        }

      //form validation

      const form = document.querySelector('#contact-form');
      const name = document.querySelector('#name');
      const subject = document.querySelector('#subject');
      const email = document.querySelector('#email');
      const message = document.querySelector('#message');
      let errors = [];
  
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
        if(errors.length === 0) {
          sendMail();
        }
      })

      function checkInputs() {
        const usernameValue = name.value;
        const subjectValue = subject.value;
        const emailValue = email.value;
        const messageValue = message.value;

        if(usernameValue === '') {
          setErrorFor(name, 'Username cannot be blank', 'name');
        } else {
          setSuccessFor(name, 'name')
        }
        if(subjectValue === '') {
          setErrorFor(subject, 'Subject cannot be blank', 'subject');
        } else {
          setSuccessFor(subject, "subject")
        }
        if(emailValue.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
          setSuccessFor(email, 'email')
        } else {
          setErrorFor(email, 'Email is invalid', 'email');        
        }
        if(messageValue === '') {
          setErrorFor(message, 'Message cannot be blank', 'message');
        } else {
          setSuccessFor(message, 'message')
        }
      }

      function setErrorFor(input, message, errorType) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      small.innerText = message;
      formControl.className = 'form-control error';
      if(errors.includes(errorType)) {
        return
      } else {
        errors.push(errorType);
      }
      }
      

      function setSuccessFor(input, errorType) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
        let errorIndex = errors.indexOf(errorType);
        if(errorIndex === -1) return
        errors.splice(errorIndex, 1);  
      }

      function clearValue() {
        name.value = '';
        subject.value = '';
        email.value = '';
        message.value = '';
      }

    
      // if(usernameValue === '') {
      //   setErrorFor(name, 'Username cannot be blank', 'name');
      // } else {
      //   setSuccessFor(name, 'name')
      // }
      // if(subjectValue === '') {
      //   setErrorFor(subject, 'Subject cannot be blank', 'subject');
      // } else {
      //   setSuccessFor(subject, "subject")
      // }
      // if(emailValue.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      //   setSuccessFor(email, 'email')
      // } else {
      //   setErrorFor(email, 'Email is invalid', 'email');
      // }
      // if(messageValue === '') {
      //   setErrorFor(message, 'Message cannot be blank', 'message');
      // } else {
      //   setSuccessFor(message, 'message')
      // }