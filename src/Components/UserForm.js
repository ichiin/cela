import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Button, Card, CardBody, Col, Container, Form, Input, 
    InputGroup, Row } from 'reactstrap';
import "./customDatePickerWidth.css";
import "react-datepicker/dist/react-datepicker.css";
import './UserForm.css'; 

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
        };
        this.LastName = this.LastName.bind(this);
        this.FirstName = this.FirstName.bind(this);
        this.BirthDate = this.BirthDate.bind(this);
        this.Nationality = this.Nationality.bind(this);
        this.Sex = this.Sex.bind(this);
        this.FieldOfEducation = this.FieldOfEducation.bind(this);
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

    submit(event) {
        console.log(this.state.lastName + this.state.firstName + this.state.birthDate + this.state.nationality + this.state.sex + this.state.fieldOfEducation)
    }

    render() {   
    return (
        <div className="proba">
            <Container>
                <Row className="justify-content-center">
                    <Col md="9" lg="7" xl="6">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form>
                                    <InputGroup className="mb-3">
                                        <br></br>
                                        <label>Last name</label>
                                        <br></br>
                                        <Input type="text" id="lname" onChange={this.LastName}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <br></br>
                                        <label>First name</label>
                                        <br></br>
                                        <Input type="text" id="fname" onChange={this.FirstName}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <br></br>
                                        <label className="label1">Date of birth</label>
                                        <br></br>
                                        <div className="customDatePickerWidth">
                                            <DatePicker dateFormat="dd.MM.yyyy" shouldCloseOnSelect selected={this.state.birthDate} onChange={date => this.BirthDate(date)} style={{textAlign:'center'}} />
                                        </div>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <br></br>
                                        <label className="label">Nationality</label>
                                        <br></br>
                                        <Input type="text" id="nationality" onChange={this.Nationality}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <br></br>
                                        <label className="label">Gender</label>
                                        <br></br>
                                        <br></br>
                                        <div onChange={this.Sex}>
                                            <input type="radio" value="Male" name="gender" /> Male
                                            <input type="radio" value="Female" name="gender" /> Female
                                        </div>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <br></br>
                                        <label>Field of education</label>
                                        <br></br>
                                        <Input className="mb-3" type="text" id="fieldOfEducation" onChange={this.FieldOfEducation}/>
                                    </InputGroup>
                                    <br></br>
                                    <Button onClick={this.submit} className="buttonSubmit" color="danger" block>Submit</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
}

export default UserForm;