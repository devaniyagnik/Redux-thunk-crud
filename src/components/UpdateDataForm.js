import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateData} from "../actions/dataActions"
import withRouter from '../withRouter';

export class UpdateDataForm extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      formData: this.props.data[this.props.params.id],
      id:this.props.params.id,
    };
  }
  
 
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      
      this.setState({ data: this.props.data });
    }
  }

  // Function to handle changes in form fields
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
    // Dispatch the updateData action with the updated form data and id
    if (this.state.formData.languages.length === 0) {
      alert("Please select a language");
    } else {
      this.props.updateData(this.state.id, this.state.formData);
      // console.log(this.state.formData.image.name);
      // Navigate back to the home page after form submission
      // Navigate("/");
      this.props.navigate("/");
    }
  };

  render() {
    
    return (
     <>
      <div className="container mt-4">
      <h1>Update Data</h1>
      <form onSubmit={this.handleSubmit}>
        {/* Fullname */}
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Fullname:
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={this.state.formData.fullname}
            onChange={this.handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Contact */}
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Contact:
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            title="Please use a 10 digit telephone number with no dashes or dots"
            pattern="[0-9]{10}"
            value={this.state.formData.contact}
            onChange={this.handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.formData.email}
            onChange={this.handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <div className="form-check">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={this.state.formData.gender === "male"}
              onChange={this.handleChange}
              className="form-check-input"
              required
            />
            <label htmlFor="male" className="form-check-label">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={this.state.formData.gender === "female"}
              onChange={this.handleChange}
              className="form-check-input"
              required
            />
            <label htmlFor="female" className="form-check-label">
              Female
            </label>
          </div>
        </div>

        {/* DOB */}
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            DOB:
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={this.state.formData.dob}
            onChange={this.handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Languages */}

        <div className="mb-3">
          <label className="form-label">Languages:</label>
          <div className="form-check">
            <input
              type="checkbox"
              id="english"
              name="languages"
              value="English"
              checked={this.state.formData.languages.includes("English")}
              onChange={this.handleChange}
              className="form-check-input"
            />
            <label htmlFor="english" className="form-check-label">
              English
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="Gujarati"
              name="languages"
              value="Gujarati"
              checked={this.state.formData.languages.includes("Gujarati")}
              onChange={this.handleChange}
              className="form-check-input"
            />
            <label htmlFor="Gujarati" className="form-check-label">
              Gujarati
            </label>
          </div>
          {/* Add more languages as needed */}
        </div>

        {/* Nationality */}
        <div className="mb-3">
          <label htmlFor="nationality" className="form-label">
            Nationality:
          </label>
          <select
            id="nationality"
            name="nationality"
            value={this.state.formData.nationality}
            onChange={this.handleChange}
            className="form-select"
            required
          >
            <option value="">Select Nationality</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Image */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={this.handleChange}
            className="form-control"
            required={!this.state.formData.image}
           
          />


        </div>

        {/* Display the selected image */}
        {this.state.formData.image && (
          <div className="mb-3">
            <img
              src={URL.createObjectURL(this.state.formData.image)}
              alt="Selected"
              style={{ width: "100px" }}
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
     </>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.crud.data,
})

const mapDispatchToProps = {
  updateData,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateDataForm))