import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addData } from '../actions/dataActions';
import withRouter from '../withRouter';

// import {Navigate} from "react-router-dom"

export class AddDataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData : {
        fullname: "",
        contact: "",
        email: "",
        gender: "",
        dob: "",
        languages: [],
        nationality: "",
        image: "",
      }
    }
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "file") {
      // Update the image field with the selected file
      this.setState({formData : {
        ...this.state.formData,
        [name]: e.target.files[0],
      }})
     
    } else if (type === "checkbox") {
      // Handle changes in the languages checkboxes
      if (checked) {
        this.setState({formData : {
          ...this.state.formData,
          languages: [...this.state.formData.languages, value],
        }})
        
      } else {
        this.setState({formData : {
          ...this.state.formData,
          languages: this.state.formData.languages.filter((lang) => lang !== value),
        }})
       
      }
    } else {
      // Update other form fields
      this.setState({formData : {
        ...this.state.formData,
        [name]: value,
      }})
      
    }
  };

  // Function to handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.formData.languages);
    // Dispatch the addData action with the form data
    if (this.state.formData.languages.length === 0) {
      alert("Please select a language");
    } else {
      this.props.addData(this.state.formData);
      // console.log(this.state.formData);
      // Navigate to the home page after form submission
      this.props.navigate("/");
    }
  };
  render() {
    return (
      <>
         <div className="container mt-4">
      <h1 className="mb-4">Add Data</h1>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Fullname:</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
            value={this.state.formData.fullname}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="tel"
            className="form-control"
            id="contact"
            name="contact"
            title="Please use a 10 digit telephone number with no dashes or dots"
            pattern="[0-9]{10}"
            value={this.state.formData.contact}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={this.state.formData.email}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div>
            <label
              className="form-check-label"
              style={{ marginRight: "100px", marginLeft: "25px" }}
            >
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="male"
                checked={this.state.formData.gender === "male"}
                onChange={this.handleChange}
                required
              />
              Male
            </label>
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="female"
                checked={this.state.formData.gender === "female"}
                onChange={this.handleChange}
                required
              />
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="dob">DOB:</label>
          <input
            type="date"
            className="form-control"
            id="dob"
            name="dob"
            value={this.state.formData.dob}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Languages:</label>
          <div>
            <label
              className="form-check-label "
              style={{ marginRight: "100px", marginLeft: "25px" }}
            >
              <input
                type="checkbox"
                className="form-check-input"
                name="languages"
                value="English"
                checked={this.state.formData.languages.includes("English")}
                onChange={this.handleChange}
              />
              English
            </label>
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                name="languages"
                value="Gujarati"
                checked={this.state.formData.languages.includes("Gujarati")}
                onChange={this.handleChange}
              />
              Gujarati
            </label>
          </div>
        </div>

        <div className="form-group ">
          <label htmlFor="nationality">Nationality:</label>
          <select
            className="form-control "
            id="nationality"
            name="nationality"
            value={this.state.formData.nationality}
            onChange={this.handleChange}
            required
          >
            <option value="">Select Nationality</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            className="form-control-file"
            id="image"
            name="image"
            accept="image/*"
            onChange={this.handleChange}
            required
          />

          {this.state.formData.image && (
            <img
              width="100px"
              src={URL.createObjectURL(this.state.formData.image)}
              alt="Selected"
              className="mt-3 img-thumbnail"
            />
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  addData,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddDataForm)); 