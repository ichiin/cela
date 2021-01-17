import React, { Component } from "react";
import DatePicker from "react-datepicker";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  Row,
} from "reactstrap";
import "../Style/customDatePickerWidth.css";
import "react-datepicker/dist/react-datepicker.css";
import "../Style/UserForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

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
      sending_institutionName: "",
      sending_faculty: "",
      sending_erasmusCode: "",
      sending_address: "",
      sending_country: "",
      sending_contact_name: "",
      sending_contact_mail: "",
      receiving_faculty: "",
      receiving_contact_name: "",
      receiving_contact_mail: "",
    };
    this.LastName = this.LastName.bind(this);
    this.FirstName = this.FirstName.bind(this);
    this.BirthDate = this.BirthDate.bind(this);
    this.Nationality = this.Nationality.bind(this);
    this.Sex = this.Sex.bind(this);
    this.FieldOfEducation = this.FieldOfEducation.bind(this);
    this.sending_InstitutionName = this.sending_InstitutionName.bind(this);
    this.sending_Faculty = this.sending_Faculty.bind(this);
    this.sending_ErasmusCode = this.sending_ErasmusCode.bind(this);
    this.sending_Address = this.sending_Address.bind(this);
    this.sending_Country = this.sending_Country.bind(this);
    this.sending_contact_name = this.sending_contact_name.bind(this);
    this.sending_contact_mail = this.sending_contact_mail.bind(this);
    this.receiving_faculty = this.receiving_faculty.bind(this);
    this.receiving_contact_name = this.receiving_contact_name.bind(this);
    this.receiving_contact_mail = this.receiving_contact_mail.bind(this);
    this.submit = this.submit.bind(this);
  }

  LastName(event) {
    this.setState({ lastName: event.target.value });
  }

  FirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  BirthDate(date) {
    this.setState({ birthDate: date });
  }

  Nationality(event) {
    this.setState({ nationality: event.target.value });
  }

  Sex(event) {
    this.setState({ sex: event.target.value });
  }

  FieldOfEducation(event) {
    this.setState({ fieldOfEducation: event.target.value });
  }

  sending_InstitutionName(event) {
    this.setState({ sending_institutionName: event.target.value });
  }

  sending_Faculty(event) {
    this.setState({ sending_faculty: event.target.value });
  }

  sending_ErasmusCode(event) {
    this.setState({ sending_erasmusCode: event.target.value });
  }

  sending_Address(event) {
    this.setState({ sending_address: event.target.value });
  }

  sending_Country(event) {
    this.setState({ sending_country: event.target.value });
  }

  sending_contact_name(event) {
    this.setState({ sending_contact_name: event.target.value });
  }

  sending_contact_mail(event) {
    this.setState({ sending_contact_mail: event.target.value });
  }

  receiving_faculty(event) {
    this.setState({ receiving_faculty: event.target.value });
  }

  receiving_contact_name(event) {
    this.setState({ receiving_contact_name: event.target.value });
  }

  receiving_contact_mail(event) {
    this.setState({ receiving_contact_mail: event.target.value });
  }

  submit(event) {
    console.log(
      this.state.lastName +
        this.state.firstName +
        this.state.birthDate +
        this.state.nationality +
        this.state.sex +
        this.state.fieldOfEducation +
        " Sending institution: " +
        this.state.institutionName +
        " " +
        this.state.faculty +
        " " +
        this.state.erasmusCode +
        " " +
        this.state.address +
        " " +
        this.state.country +
        " " +
        this.state.contactPerson
    );
  }

  render() {
    return (
      <div className="infoForm">
        <Container>
          <Row>
            <Col xs={4}>
              <h2>User informations</h2>
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <label>Last name</label>
                    <InputGroup className="mb-3">
                      <Input type="text" id="lname" onChange={this.LastName} />
                    </InputGroup>
                    <label>First name</label>
                    <InputGroup className="mb-3">
                      <Input type="text" id="fname" onChange={this.FirstName} />
                    </InputGroup>
                    <label>Date of birth</label>
                    <InputGroup className="mb-3">
                      <div className="datePicker">
                        <DatePicker
                          dateFormat="dd.MM.yyyy"
                          shouldCloseOnSelect
                          selected={this.state.birthDate}
                          onChange={(date) => this.BirthDate(date)}
                        />
                      </div>
                    </InputGroup>
                    <label>Nationality</label>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        id="nationality"
                        onChange={this.Nationality}
                      />
                    </InputGroup>
                    <label>Gender</label>
                    <InputGroup className="mb-3">
                      <div className="radioButton" onChange={this.Sex}>
                        <input type="radio" value="Male" name="gender" />
                        <label className="labels">Male</label>
                        <input type="radio" value="Female" name="gender" />
                        <label className="labels">Female</label>
                      </div>
                    </InputGroup>
                    <label>Field of education</label>
                    <InputGroup className="mb-3">
                      <Input
                        className="mb-3"
                        type="text"
                        id="fieldOfEducation"
                        onChange={this.FieldOfEducation}
                      />
                    </InputGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col xs={4}>
              <h2 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                Sending institution
              </h2>
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <label>Name</label>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        id="sending_name"
                        onChange={this.sending_InstitutionName}
                      />
                    </InputGroup>
                    <label>Faculty/Department</label>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        id="sending_faculty"
                        onChange={this.sending_Faculty}
                      />
                    </InputGroup>
                    <label>Erasmus code</label>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        id="sending_ecode"
                        onChange={this.sending_ErasmusCode}
                      />
                    </InputGroup>
                    <label className="label">Address</label>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        id="sending_address"
                        onChange={this.sending_Address}
                      />
                    </InputGroup>
                    <label className="label">Country</label>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        id="sending_country"
                        onChange={this.sending_Country}
                      />
                    </InputGroup>
                    <label>Contact person name</label>
                    <InputGroup className="mb-3">
                      <Input
                        className="mb-3"
                        type="text"
                        id="sending_contact_name"
                        onChange={this.sending_contact_name}
                      />
                    </InputGroup>
                    <label>Contact person mail</label>
                    <InputGroup className="mb-3">
                      <Input
                        className="mb-3"
                        type="text"
                        id="sending_contact_mail"
                        onChange={this.sending_contact_mail}
                      />
                    </InputGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col style={{ whiteSpace: "nowrap", overflow: "hidden" }} xs={4}>
              <h2>Receiving institution</h2>
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <label>Department/Faculty</label>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        id="receiving_faculty"
                        onChange={this.receiving_faculty}
                      />
                    </InputGroup>
                    <label>Contact person name</label>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        id="receiving_faculty_name"
                        onChange={this.receiving_contact_name}
                      />
                    </InputGroup>
                    <label>Contact person email</label>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        id="receiving_faculty_mail"
                        onChange={this.receiving_contact_mail}
                      />
                    </InputGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br></br>
          <Link to={{ pathname: "/SubjectList", state: this.state }}>
            <Button
              onClick={this.submit}
              className="buttonSubmit"
              color="danger"
              block
            >
              SUBMIT
            </Button>
          </Link>
        </Container>
      </div>
    );
  }
}

export default UserForm;
