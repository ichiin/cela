import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Button, Card, CardBody, Col, Container, Form, Input, 
    InputGroup, Row } from 'reactstrap';
import "./customDatePickerWidth.css";
import "react-datepicker/dist/react-datepicker.css";
import './UserForm.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


class UserForm extends Component {
    constructor() {
        super();
        this.state = {
          lastName: "",
          firstName: "",
          birthDate: "",
          setBirthDay: "",
          nationality: "",
          sex: "",
          fieldOfEducation: "",
          institutionName: "",
          faculty: "",
          erasmusCode: "",
          address: "",
          country: "",
          contactPerson: "",
        };
        this.LastName = this.LastName.bind(this);
        this.FirstName = this.FirstName.bind(this);
        this.BirthDate = this.BirthDate.bind(this);
        this.Nationality = this.Nationality.bind(this);
        this.Sex = this.Sex.bind(this);
        this.FieldOfEducation = this.FieldOfEducation.bind(this);
        this.InstitutionName = this.InstitutionName.bind(this);
        this.Faculty = this.Faculty.bind(this);
        this.ErasmusCode = this.ErasmusCode.bind(this);
        this.Address = this.Address.bind(this);
        this.Country = this.Country.bind(this);
        this.ContactPerson = this.ContactPerson.bind(this);
        this.submit = this.submit.bind(this);
      }

    LastName(event) {
        this.setState({ lastName: event.target.value })
    }
    FirstName(event) {
        this.setState({ firstName: event.target.value })
    }
    BirthDate(date) {
        this.setState({ birthDate: date})
    }

    Nationality(event) {
        this.setState({ nationality: event.target.value })
    }
    Sex(event) {
        this.setState({ sex: event.target.value })
    }
    FieldOfEducation(event) {
        this.setState({ fieldOfEducation: event.target.value })
    }

    InstitutionName(event) {
        this.setState({ institutionName: event.target.value })
    }

    Faculty(event) {
        this.setState({ faculty: event.target.value })
    }

    ErasmusCode(event) {
        this.setState({ erasmusCode: event.target.value })
    }

    Address(event) {
        this.setState({ address: event.target.value })
    }

    Country(event) {
        this.setState({ country: event.target.value })
    }

    ContactPerson(event) {
        this.setState({ contactPerson: event.target.value })
    }
    submit(event) {
        console.log(this.state.lastName + this.state.firstName + this.state.birthDate + this.state.nationality + this.state.sex + this.state.fieldOfEducation + " Sending institution: " + this.state.institutionName + " " + this.state.faculty + " " + this.state.erasmusCode + " " + this.state.address + " " + this.state.country + " " + this.state.contactPerson)
    }

    render() {   
    return (
        <div className="infoForm">
        <Container>
            <Row>
                <Col xs={6}>
                    <h2>User informations</h2>
                    <Card className="mx-4">
                        <CardBody className="p-4">
                            <Form>
                                <label>Last name</label>
                                <InputGroup className="mb-3">
                                    <Input type="text" id="lname" onChange={this.LastName}/>
                                </InputGroup>
                                <label>First name</label>
                                <InputGroup className="mb-3">
                                    <Input type="text" id="fname" onChange={this.FirstName}/>
                                </InputGroup>
                                <label>Date of birth</label>
                                <InputGroup className="mb-3">
                                    <div className="datePicker">
                                        <DatePicker dateFormat="dd.MM.yyyy" shouldCloseOnSelect selected={this.state.birthDate} onChange={date => this.BirthDate(date)} />
                                    </div>
                                </InputGroup>
                                <label>Nationality</label>
                                <InputGroup className="mb-3">
                                    <Input type="text" id="nationality" onChange={this.Nationality}/>
                                </InputGroup>
                                <label>Gender</label>
                                <InputGroup className="mb-3">
                                        <div className="radioButton" onChange={this.Sex}>
                                            <input type="radio" value="Male" name="gender" /> Male
                                            </div>
                                            <div>
                                            <input type="radio" value="Female" name="gender" /> Female
                                        </div>
                                </InputGroup>
                                <label>Field of education</label>
                                <InputGroup className="mb-3">
                                    <Input className="mb-3" type="text" id="fieldOfEducation" onChange={this.FieldOfEducation}/>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={6}>
                <h2>Sending institution</h2>
                    <Card className="mx-4">
                        <CardBody className="p-4">
                            <Form>
                                <label>Name</label>
                                <InputGroup className="mb-3">
                                    <Input type="text" id="iname" onChange={this.InstitutionName}/>
                                </InputGroup>
                                <label>Faculty/Department</label>
                                <InputGroup className="mb-3">
                                    <Input type="text" id="faculty" onChange={this.Faculty}/>
                                </InputGroup>
                                <label>Erasmus code</label>
                                <InputGroup className="mb-3">
                                    <Input type="text" id="ecode" onChange={this.ErasmusCode}/>
                                </InputGroup>
                                <label className="label">Address</label>
                                <InputGroup className="mb-3">
                                    <Input type="text" id="address" onChange={this.Address}/>
                                </InputGroup>
                                <label className="label">Country</label>
                                <InputGroup className="mb-3">
                                    <Input type="text" id="country" onChange={this.Country}/>
                                </InputGroup>
                                <label>Contact person name</label>
                                <InputGroup className="mb-3">
                                    <Input className="mb-3" type="text" id="contactperson" onChange={this.ContactPerson}/>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card></Col>
                </Row>
                <br></br>
                <Button onClick={this.submit} className="buttonSubmit" color="danger" block>SUBMIT</Button>
            </Container>
            </div>
    );
}
}

export default UserForm;