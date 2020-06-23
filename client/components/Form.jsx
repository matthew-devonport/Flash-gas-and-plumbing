import React from 'react'
import Axios from 'axios'
// import Recaptcha from 'react-recaptcha';

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      file: null,
      // isVerified: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    //  this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    //  this.verifyCallback = this.verifyCallback.bind(this);
  }

  handleFileChange({target: {name, files}}) {
    toBase64(files[0]).then(dataUri => {
      this.setState(state => ({...state, [name]: dataUri}))
    })
 }


  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
        [event.target.email]: event.target.value,
        [event.target.message]: event.target.value,
      }
    );
  }



  // recaptchaLoaded () {
  //   console.log('capcha successfully loaded')
  // }


  handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};

    Axios.post("api/v1/sendMail", data)
      {
      alert("Thank you! We will be in touch shortly!")
      }

    // } else 
    // {
    //   alert("Please verify that you are a human!")
    // }
    // }

    // verifyCallback(response) {
    //   if (response) {
    //     this.setState({
    //       isVerified: true
    //     })

    //   }

  }

  render() {
    return (
      <React.Fragment>
        <div className="formContainer centerImg">
          <form onSubmit={this.handleSubmit} method="post">
            <div className='contact'>
              <h2 className="formTitles">YOUR FULL NAME</h2>
              <input
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
                required />
              <h2 className="formTitles">EMAIL ADDRESS</h2>
              <input
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                required />
              <h2 className="formTitles">UPLOAD FILE</h2>
              <input
                type='file'
                name='file'
                // value={this.state.file}
                onChange={this.handleFileChange} />
              <div id='messageForm'>
                <h2 className="formTitles">MESSAGE</h2>
                <textarea
                  name='message'
                  value={this.state.message}
                  onChange={this.handleChange}
                  required />
              </div>

              {/* <Recaptcha
    sitekey=""
    render="explicit"
    verifyCallback={this.verifyCallback}
    recaptchaLoaded={this.recaptchaLoaded}
  /> */}
              <div id='submit-btn'>
                <input type='submit' value='SUBMIT' />
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default Form