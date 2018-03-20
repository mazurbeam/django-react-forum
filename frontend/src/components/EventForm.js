import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import styled, { extend } from 'styled-components'; // eslint-disable-line
// import { FileUpload } from 'redux-file-upload'

import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';  // eslint-disable-line
import 'react-quill/dist/quill.snow.css'; // ES6

import { Container, Input, Label, Button } from 'rebass'

const DescriptionContainer = Container.extend`

`

class EventForm extends Component {
  state = {
    redirect: false,
    text: '',
    name: '',
    address: '',
    start_date: '',
    end_date: '',
    banner: null,
  }

  onDrop = (picture) => {
    this.setState({
        banner: picture,
    });
}
  
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  handleChange = (value) => {
    this.setState({ text: value })
  }


  handleInputChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({
      [event.target.name]: value
    });
  };

  submitForm = event => {
    event.preventDefault();
    this.props.onSubmit(
      this.state.name,
      this.state.address,
      this.state.start_date,
      this.state.end_date,
      this.state.text,
      this.state.banner,
    );
    this.setRedirect()
  };

  

  
  render() { 
    return ( 
      <div>
      {this.state.redirect ? <Redirect to='/events'/> : 
        <h1>Event Form</h1> }
        
        <DescriptionContainer m={2} p={2} bg='white'>
        <form onSubmit={this.submitForm} encType="multipart/form-data">
          <Label>Event Name:
          <Input name='name' placeholder='name' onChange={this.handleInputChange}/></Label>
          <Label>Event Address:
          <Input name='address' placeholder='address' onChange={this.handleInputChange}/></Label>
          <Label >Start Date:
          <Input name='start_date' type='date' onChange={this.handleInputChange}/></Label>
          <Label>End Date:
          <Input name='end_date' type='date' onChange={this.handleInputChange}/></Label>
          <Label>Banner:</Label>
     
          <Label>Event Description</Label>
            <ReactQuill  value={this.state.text} onChange={this.handleChange} />
          <Button type='submit'>Add Event</Button>
        </form>
        </DescriptionContainer>
      </div>
     )
  }
}
 
export default EventForm;