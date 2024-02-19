import React, { Component } from "react"; 
import axios from "axios";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      position: "",
      messageSent: "",
      errorMessage: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const formData = {
      'your-name': this.state.name,
      'your-email': this.state.email,
      'your-position': this.state.position,
    };

    axios
      .post(
        `https://touchstone.api.24m.co.uk/wp-json/contact-form-7/v1/contact-forms/18/feedback`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
  
        res.data.status === "mail_sent"
          ? this.setState({
              messageSent: res.data.message,
              name: "",
              email: "",
              position: "",
            })
          : this.setState({ errorMessage: res.data.message }, () => {
              setTimeout(() => {
                this.setState({ errorMessage: "" });
              }, 2000);
            });
      });
  };

  render() {
    const { messageSent } = this.state;

    return (
      <div>
      
        <form onSubmit={this.onSubmit} className="mb-10 mt-10">
          <div className="grid grid-cols-2 mb-10">
            <div className="col-span-1  mr-10">
              <input
                placeholder="Your name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChangeHandler}
                className="w-full p-4 bg-transparent border-b border-b-dusk placeholder-dusk "
              />
            </div>
            <div className="col-span-1">
              <input
                placeholder="Your email"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.onChangeHandler}
                className="w-full p-4 bg-transparent border-b border-b-dusk placeholder-dusk "
              />
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-10">
              <input
                placeholder="Your Position"
                type="text"
                name="position"
                value={this.state.position}
                onChange={this.onChangeHandler}
                className="w-full p-4 bg-transparent border-b border-b-dusk placeholder-dusk "
              />
            </div>
            <div className="col-span-2">
              <button type="submit" className="bg-dusk w-full p-4 text-azure font-bold text-lg pb-[13px]">
                SUBMIT
              </button>
            </div>
          </div>
        </form>

        {messageSent && (
          <div className="confirmation-message">
            Thank you for getting in touch. We will get back to you shortly.
          </div>
        )}
      </div>
    );
  }
}
