import React from "react";
import "../Style/LaAgreement.css";

//Return a fully generated and styled Learning agreement.
function LaAgreement(props) {
  const subjects = props.location.state.mySubjects;
  const personalInfo = props.location.state.personalInfo;
  const ectsTotal = props.location.state.ectsTotal;
  return (
    <div style={{ alignItems: "center", tex: "center" }}>
      {console.log((personalInfo.lastName !== null) && 'ew')}
      <div className="Content">
        <div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>
            <strong>Learning Agreement </strong>
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>Student Mobility for</strong> <strong>Studies</strong>
          </p>
          <p style={{ textAlign: "right" }}>
            <strong>
              Higher Education:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            </strong>
          </p>
          <p style={{ textAlign: "right" }}>
            <strong>
              Learning Agreement form&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;
            </strong>
          </p>
          <p style={{ textAlign: "right" }}>
            <strong>
              <em>
                Student’s name {" : " + (personalInfo.lastName !== null ? personalInfo.lastName: "") + " " + (personalInfo.firstName !== null ? personalInfo.firstName: "")}&nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </em>
            </strong>
          </p>
          <p style={{ textAlign: "right" }}>
            <strong>
              <em>
                Academic Year 20../20..&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;
              </em>
            </strong>
          </p>
          <table
            style={{
              borderColor: "black",
              width: "950px",
              height: "1114px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            border={1}
          >
            <tbody>
              <tr style={{ height: "62px" }}>
                <td style={{ height: "122px", width: "84.8px" }} rowSpan={2}>
                  <p>
                    <strong>Student</strong>
                  </p>
                  <p>&nbsp;</p>
                </td>
                <td style={{ height: "62px", width: "108px" }}>
                  <p>
                    <strong>Last name(s)</strong>
                  </p>
                </td>
                <td style={{ height: "62px", width: "96.8px" }}>
                  <p>
                    <strong>First name(s)</strong>
                  </p>
                </td>
                <td style={{ height: "62px", width: "93.6px" }} colSpan={2}>
                  <p>
                    <strong>Date of birth</strong>
                  </p>
                </td>
                <td style={{ height: "62px", width: "108px" }} colSpan={2}>
                  <p>
                    <strong>Nationality</strong>
                    <a href="#_edn1" name="_ednref1">
                      [1]
                    </a>
                  </p>
                </td>
                <td style={{ height: "62px", width: "210.4px" }} colSpan={2}>
                  <p>
                    <strong>Gender:&nbsp; [Male/Female/Undefined]</strong>
                  </p>
                </td>
                <td style={{ height: "62px", width: "72px" }} colSpan={4}>
                  <p>
                    <strong>Study cycle</strong>
                    <a href="#_edn2" name="_ednref2">
                      [2]
                    </a>
                  </p>
                </td>
                <td style={{ height: "62px", width: "96.8px" }} colSpan={2}>
                  <p>
                    <strong>Field of education </strong>
                    <a href="#_edn3" name="_ednref3">
                      [3]
                    </a>
                  </p>
                </td>
                <td style={{ height: "62px", width: "8px" }}>
                  <p>&nbsp;</p>
                </td>
              </tr>
              <tr style={{ height: "60px" }}>
                <td style={{ height: "60px", width: "108px" }}>
                  <p>&nbsp;</p>
                  {personalInfo.lastName && personalInfo.lastName}
                </td>
                <td style={{ height: "60px", width: "96.8px" }}>
                  <p>&nbsp;</p>
                  {personalInfo.firstName && personalInfo.firstName}
                </td>
                <td style={{ height: "60px", width: "93.6px" }} colSpan={2}>
                  <p>&nbsp;</p>
                  {personalInfo && personalInfo.birthDate && personalInfo.birthDate.getDate()}
                  {personalInfo.birthDate && '.'}
                  {personalInfo && personalInfo.birthDate &&
                  personalInfo && personalInfo.birthDate.getMonth() + 1}
                  {personalInfo.birthDate && '.'}
                  {personalInfo && personalInfo.birthDate &&
                  personalInfo && personalInfo.birthDate.getFullYear()}
                </td>
                <td style={{ height: "60px", width: "108px" }} colSpan={2}>
                  <p>&nbsp;</p>
                  {personalInfo && personalInfo.nationality}
                </td>
                <td style={{ height: "60px", width: "210.4px" }} colSpan={2}>
                  <p style={{ textAlign: "center" }}>
                    <em>&nbsp;</em>
                  </p>
                  {personalInfo && personalInfo.sex}
                </td>
                <td style={{ height: "60px", width: "72px" }} colSpan={4}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ height: "60px", width: "96.8px" }} colSpan={2}>
                  <p>&nbsp;</p>
                  {personalInfo && personalInfo.fieldOfEducation}
                </td>
                <td style={{ height: "60px", width: "8px" }}>
                  <p>&nbsp;</p>
                </td>
              </tr>
              <tr style={{ height: "87px" }}>
                <td style={{ height: "135px", width: "84.8px" }} rowSpan={2}>
                  <p>
                    <strong>Sending Institution</strong>
                  </p>
                </td>
                <td style={{ height: "87px", width: "108px" }}>
                  <p>
                    <strong>Name</strong>
                  </p>
                </td>
                <td style={{ height: "87px", width: "96.8px" }}>
                  <p>
                    <strong>
                      Faculty/
                      <br /> Department
                    </strong>
                  </p>
                </td>
                <td style={{ height: "87px", width: "93.6px" }} colSpan={2}>
                  <p>
                    <strong>Erasmus code</strong>
                    <a href="#_edn4" name="_ednref4">
                      [4]
                    </a>
                    <strong>&nbsp;(if applicable)</strong>
                  </p>
                </td>
                <td style={{ height: "87px", width: "108px" }} colSpan={2}>
                  <p>
                    <strong>Address (Faculty)</strong>
                  </p>
                </td>
                <td style={{ height: "87px", width: "210.4px" }} colSpan={2}>
                  <p>
                    <strong>Country</strong>
                  </p>
                </td>
                <td style={{ height: "87px", width: "174.4px" }} colSpan={6}>
                  <p>
                    <strong>Contact person name</strong>
                    <a href="#_edn5" name="_ednref5">
                      [5]
                    </a>
                    <strong> (faculty </strong>
                  </p>
                  <p>
                    <strong>administrative); email; phone</strong>
                  </p>
                </td>
                <td style={{ height: "87px", width: "8px" }}>
                  <p>&nbsp;</p>
                </td>
              </tr>
              <tr style={{ height: "48px" }}>
                <td style={{ height: "48px", width: "108px" }}>
                  {personalInfo && personalInfo.sending_institutionName}
                </td>
                <td style={{ height: "48px", width: "96.8px" }}>
                  {personalInfo && personalInfo.sending_faculty}
                </td>
                <td style={{ height: "48px", width: "93.6px" }} colSpan={2}>
                    {personalInfo && personalInfo.sending_erasmusCode}
                </td>
                <td style={{ height: "48px", width: "108px" }} colSpan={2}>
                  {personalInfo && personalInfo.sending_address}{" "}
                </td>
                <td style={{ height: "48px", width: "210.4px" }} colSpan={2}>
                  {personalInfo && personalInfo.sending_country}
                </td>
                <td style={{ height: "48px", width: "174.4px" }} colSpan={6}>
                  {(personalInfo.sending_contact_name && personalInfo.sending_contact_name) +
                    "\n" +
                  (personalInfo.sending_contact_mail && personalInfo.sending_contact_mail)}
                </td>
                <td style={{ height: "48px", width: "8px" }}>
                </td>
              </tr>
              <tr style={{ height: "62px" }}>
                <td style={{ height: "97px", width: "84.8px" }} rowSpan={2}>
                  <p>
                    <strong>Receiving Institution</strong>
                  </p>
                  <p>&nbsp;</p>
                </td>
                <td style={{ height: "62px", width: "108px" }}>
                  <p>
                    <strong>Name</strong>
                  </p>
                </td>
                <td style={{ height: "62px", width: "96.8px" }}>
                  <p>
                    <strong>Faculty/ Department</strong>
                  </p>
                </td>
                <td style={{ height: "62px", width: "93.6px" }} colSpan={2}>
                  <p>
                    <strong>Erasmus code (if applicable)</strong>
                  </p>
                </td>
                <td style={{ height: "62px", width: "108px" }} colSpan={2}>
                  <p>
                    <strong>Address</strong>
                  </p>
                </td>
                <td style={{ height: "62px", width: "210.4px" }} colSpan={2}>
                  <p>
                    <strong>Country</strong>
                  </p>
                </td>
                <td style={{ height: "62px", width: "174.4px" }} colSpan={6}>
                  <p>
                    <strong>Contact person name; email; phone</strong>
                  </p>
                </td>
                <td style={{ height: "62px", width: "8px" }}>
                  <p>&nbsp;</p>
                </td>
              </tr>
              <tr style={{ height: "35px" }}>
                <td style={{ height: "35px", width: "108px" }}>
                  &nbsp;Politechnika Poznańska
                </td>
                <td style={{ height: "35px", width: "96.8px" }}>
                  &nbsp; {personalInfo.receiving_faculty}
                </td>
                <td style={{ height: "35px", width: "93.6px" }} colSpan={2}>
                  &nbsp; PL POZNAN02
                </td>
                <td style={{ height: "35px", width: "108px" }} colSpan={2}>
                  <p>&nbsp; Plac Marii Skłodowskiej Curie 5, 60-965 Poznań</p>
                </td>
                <td style={{ height: "35px", width: "210.4px" }} colSpan={2}>
                  &nbsp; Poland
                </td>
                <td style={{ height: "35px", width: "174.4px" }} colSpan={6}>
                  &nbsp;{" "}
                  {(personalInfo.receiving_contact_name  && personalInfo.receiving_contact_name) +
                    "\n" +
                  (personalInfo.receiving_contact_mail && personalInfo.receiving_contact_mail)}
                </td>
                <td style={{ height: "35px", width: "8px" }}>
                  <p>&nbsp;</p>
                </td>
              </tr>
              <tr style={{ height: "60px" }}>
                <td style={{ height: "60px", width: "909.6px" }} colSpan={15}>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Before the mobility</strong>
                  </p>
                </td>
                <td style={{ height: "60px", width: "8px" }}>
                  <p>&nbsp;</p>
                </td>
              </tr>
              <tr style={{ height: "87px" }}>
                <td style={{ height: "87px", width: "84.8px" }}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td style={{ height: "87px", width: "819.2px" }} colSpan={14}>
                  <p>
                    <strong>
                      <em>
                        Study Programme at the Receiving Institution
                        <br /> <br />{" "}
                      </em>
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Planned period of the mobility: from [month/year] ……………………
                      to [month/year] ……………………
                      <br /> <br />{" "}
                    </strong>
                  </p>
                </td>
                <td style={{ height: "87px", width: "8px" }}>
                  <p>&nbsp;</p>
                </td>
              </tr>
              <tr style={{ height: "130px" }}>
                <td style={{ height: "130px", width: "84.8px" }}>
                  <p>
                    <strong>Table A</strong>
                  </p>
                  <p>
                    <strong>Before the mobility</strong>
                  </p>
                </td>
                <td style={{ height: "130px", width: "108px" }}>
                  <p>
                    <strong>Component</strong>
                    <a href="#_edn6" name="_ednref6">
                      <sup>[6]</sup>
                    </a>
                    <strong>
                      {" "}
                      code
                      <br />
                    </strong>
                    (if any)
                  </p>
                </td>
                <td style={{ height: "130px", width: "348px" }} colSpan={6}>
                  <p>
                    <strong>
                      Component title at the Receiving Institution
                      <br />{" "}
                    </strong>
                    (as indicated in the course catalogue
                    <a href="#_edn7" name="_ednref7">
                      [7]
                    </a>
                    )
                  </p>
                </td>
                <td style={{ height: "130px", width: "209.6px" }} colSpan={3}>
                  <p>
                    <strong>
                      Semester <br />{" "}
                    </strong>
                    [e.g. winter/summer]
                  </p>
                </td>
                <td style={{ height: "130px", width: "136.8px" }} colSpan={4}>
                  <p>
                    <strong>Number of ECTS credits (or equivalent)</strong>
                    <a href="#_edn8" name="_ednref8">
                      [8]
                    </a>
                    <strong>
                      {" "}
                      to be awarded by the Receiving Institution upon successful
                      completion
                    </strong>
                  </p>
                </td>
                <td style={{ height: "130px", width: "8px" }}>
                  <p>&nbsp;</p>
                </td>
              </tr>
              {subjects.map((s) => {
                return (
                  <tr style={{ height: "35px" }}>
                    <td style={{ height: "35px", width: "84.8px" }}>
                      <p>&nbsp;</p>
                      <text></text>
                    </td>
                    <td style={{ height: "35px", width: "108px" }}>
                      <p>&nbsp;</p>
                      <text>{s.id}</text>
                    </td>
                    <td style={{ height: "35px", width: "348px" }} colSpan={6}>
                      <p>
                        <strong>&nbsp;</strong>
                      </p>
                      <text>{s.name}</text>
                    </td>
                    <td
                      style={{ height: "35px", width: "209.6px" }}
                      colSpan={3}
                    >
                      <p>
                        <strong>&nbsp;</strong>
                      </p>
                      <text>{s.id_semester}</text>
                    </td>
                    <td
                      style={{ height: "35px", width: "136.8px" }}
                      colSpan={4}
                    >
                      <p>
                        <strong>&nbsp;</strong>
                      </p>
                      <text>{s.ects}</text>
                    </td>
                    <td style={{ height: "35px", width: "8px" }}>
                      <p>&nbsp;</p>
                    </td>
                  </tr>
                );
              })}

              <tr style={{ height: "48px" }}>
                <td style={{ height: "48px", width: "84.8px" }}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ height: "48px", width: "108px" }}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td style={{ height: "48px", width: "348px" }} colSpan={6}>
                  <p>
                    <em>&nbsp;</em>
                    <em>
                      If necessary please electronically insert more rows.
                    </em>
                  </p>
                </td>
                <td style={{ height: "48px", width: "209.6px" }} colSpan={3}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td style={{ height: "48px", width: "136.8px" }} colSpan={4}>
                  <p>
                    <strong>Total: {ectsTotal}</strong>
                  </p>
                </td>
                <td style={{ height: "48px", width: "8px" }}>
                  <p>&nbsp;</p>
                </td>
              </tr>
              <tr style={{ height: "48px" }}>
                <td style={{ height: "48px", width: "909.6px" }} colSpan={15}>
                  <p>
                    Web link to the course catalogue at the Receiving
                    Institution describing the learning outcomes: [
                    <em>web link to the relevant information</em>]
                  </p>
                </td>
                <td style={{ height: "48px", width: "8px" }}>
                  <p>&nbsp;</p>
                </td>
              </tr>
              <tr style={{ height: "34px" }}>
                <td style={{ height: "34px", width: "84.8px" }}>&nbsp;</td>
                <td style={{ height: "34px", width: "108px" }}>&nbsp;</td>
                <td style={{ height: "34px", width: "124px" }} colSpan={2}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ height: "34px", width: "66.4px" }}>&nbsp;</td>
                <td style={{ height: "34px", width: "76.8px" }}>&nbsp;</td>
                <td style={{ height: "34px", width: "268px" }} colSpan={4}>
                  &nbsp;
                </td>
                <td style={{ height: "34px", width: "18.4px" }} colSpan={2}>
                  &nbsp;
                </td>
                <td style={{ height: "34px", width: "67.2px" }} colSpan={2}>
                  &nbsp;
                </td>
                <td style={{ height: "34px", width: "64.8px" }} colSpan={2}>
                  &nbsp;
                </td>
              </tr>
              <tr style={{ height: "64px" }}>
                <td style={{ height: "64px", width: "909.6px" }} colSpan={15}>
                  <p>
                    <strong>The level of language competence</strong>
                    <a href="#_edn9" name="_ednref9">
                      [9]
                    </a>
                    &nbsp; in ________________ &nbsp;[
                    <em>indicate here the main language of instruction</em>]
                    that the student already has or agrees to acquire by the
                    start of the study period is: <em>A1 </em>☐
                    <em>&nbsp;&nbsp;&nbsp;&nbsp; A2 </em>☐
                    <em>&nbsp;&nbsp;&nbsp;&nbsp; B1 </em>
                    <em>&nbsp;</em>☐<em> &nbsp;&nbsp;&nbsp;&nbsp;B2 </em>☐
                    <em>&nbsp;&nbsp;&nbsp;&nbsp; C1 </em>☐
                    <em>&nbsp;&nbsp;&nbsp;&nbsp; C2 </em>☐
                    <em>&nbsp;&nbsp;&nbsp;&nbsp; Native speaker </em>☐
                  </p>
                </td>
                <td style={{ height: "64px", width: "8px" }}>
                  <p>&nbsp;</p>
                </td>
              </tr>
              <tr style={{ height: "13px" }}>
                <td style={{ height: "13px", width: "84.8px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "108px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "96.8px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "21.6px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "66.4px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "76.8px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "25.6px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "32.8px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "172px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "20.8px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "5.6px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "7.2px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "21.6px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "40px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "51.2px" }}>&nbsp;</td>
                <td style={{ height: "13px", width: "8px" }}>&nbsp;</td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <table
            style={{ width: "950px", marginLeft: "auto", marginRight: "auto" }}
            border={1}
          >
            <tbody>
              <tr>
                <td style={{ width: "60px" }}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "677px" }} colSpan={15}>
                  <p>
                    <strong>
                      <em>Recognition at the Sending Institution</em>
                    </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "60px" }}>
                  <p>
                    <strong>Table B</strong>
                  </p>
                  <p>
                    <strong>Before the mobility</strong>
                  </p>
                </td>
                <td style={{ width: "72px" }} colSpan={2}>
                  <p>
                    <strong>Component code </strong>
                  </p>
                  <p>(if any)</p>
                </td>
                <td style={{ width: "230px" }} colSpan={6}>
                  <p>
                    <strong>
                      Component title at the Sending Institution
                      <br />{" "}
                    </strong>
                    (as indicated in the course catalogue)
                  </p>
                </td>
                <td style={{ width: "105px" }} colSpan={3}>
                  <p>
                    <strong>
                      Semester <br />{" "}
                    </strong>
                    [e.g. winter/summer]
                  </p>
                </td>
                <td style={{ width: "270px" }} colSpan={4}>
                  <p>
                    <strong>
                      Number of ECTS credits (or equivalent) to be recognised by
                      the Sending Institution
                    </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "60px" }}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "72px" }} colSpan={2}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "230px" }} colSpan={6}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td style={{ width: "105px" }} colSpan={3}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td style={{ width: "270px" }} colSpan={4}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "60px" }}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "72px" }} colSpan={2}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "230px" }} colSpan={6}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td style={{ width: "105px" }} colSpan={3}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td style={{ width: "270px" }} colSpan={4}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "60px" }}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "72px" }} colSpan={2}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td style={{ width: "230px" }} colSpan={6}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td style={{ width: "105px" }} colSpan={3}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td style={{ width: "270px" }} colSpan={4}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "60px" }}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "72px" }} colSpan={2}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td style={{ width: "230px" }} colSpan={6}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td style={{ width: "105px" }} colSpan={3}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td style={{ width: "270px" }} colSpan={4}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "60px" }}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "72px" }} colSpan={2}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td style={{ width: "230px" }} colSpan={6}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td style={{ width: "105px" }} colSpan={3}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td style={{ width: "270px" }} colSpan={4}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "60px" }}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "72px" }} colSpan={2}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td style={{ width: "230px" }} colSpan={6}>
                  <p>
                    <em>&nbsp;&nbsp;</em>
                    <em>
                      If necessary please electronically insert more rows.
                    </em>
                  </p>
                </td>
                <td style={{ width: "105px" }} colSpan={3}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td style={{ width: "270px" }} colSpan={4}>
                  <p>
                    <strong>Total: ………</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "737px" }} colSpan={16}>
                  <p>
                    Provisions applying if the student does not complete
                    successfully some educational components:{" "}
                    <em>[web link to the relevant information]</em>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "60px" }}>&nbsp;</td>
                <td style={{ width: "72px" }} colSpan={2}>
                  <p>
                    <u>&nbsp;</u>
                  </p>
                </td>
                <td style={{ width: "98px" }}>&nbsp;</td>
                <td style={{ width: "53px" }} colSpan={2}>
                  &nbsp;
                </td>
                <td style={{ width: "53.4px" }}>&nbsp;</td>
                <td style={{ width: "47.6px" }} colSpan={3}>
                  &nbsp;
                </td>
                <td style={{ width: "89px" }} colSpan={3}>
                  &nbsp;
                </td>
                <td style={{ width: "88px" }} colSpan={2}>
                  &nbsp;
                </td>
                <td style={{ width: "176px" }}>&nbsp;</td>
              </tr>
              <tr>
                <td style={{ width: "737px" }} colSpan={16}>
                  <p>
                    <strong>
                      <em>
                        Commitment, signatures and stamp (stamp of the sending
                        institution obligatory; receiving institution if
                        applicable)
                      </em>
                    </strong>
                  </p>
                  <p>
                    By signing this document, the student, the Sending
                    Institution and the Receiving Institution confirm that they
                    approve the Learning Agreement and that they will comply
                    with all the arrangements agreed by all parties. Sending and
                    Receiving Institutions undertake to apply all the principles
                    of the Erasmus Charter for Higher Education relating to
                    mobility for studies (or the principles agreed in the
                    Inter-Institutional Agreement for institutions located in
                    Partner Countries). The Beneficiary Institution and the
                    student should also commit to what is set out in the
                    Erasmus+ grant agreement. The Receiving Institution confirms
                    that the educational components listed in Table A are in
                    line with its course catalogue and should be available to
                    the student. The Sending Institution commits to recognise
                    all the credits or equivalent units gained at the Receiving
                    Institution for the successfully completed educational
                    components and to count them towards the student's degree as
                    described in Table B. Any exceptions to this rule are
                    documented in an annex of this Learning Agreement and agreed
                    by all parties. The student and the Receiving Institution
                    will communicate to the Sending Institution any problems or
                    changes regarding the study programme, responsible persons
                    and/or study period.
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "124px" }} colSpan={2}>
                  <p>
                    <strong>Commitment</strong>
                  </p>
                </td>
                <td style={{ width: "114px" }} colSpan={3}>
                  <p>
                    <strong>Name</strong>
                  </p>
                </td>
                <td style={{ width: "113px" }} colSpan={3}>
                  <p>
                    <strong>Email</strong>
                  </p>
                </td>
                <td style={{ width: "105px" }} colSpan={3}>
                  <p>
                    <strong>Position</strong>
                  </p>
                </td>
                <td style={{ width: "63px" }} colSpan={3}>
                  <p>
                    <strong>Date</strong>
                  </p>
                </td>
                <td style={{ width: "218px" }} colSpan={2}>
                  <p>
                    <strong>SIGNATURE, STAMP</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "124px" }} colSpan={2}>
                  <p>Student</p>
                </td>
                <td style={{ width: "114px" }} colSpan={3}>
                  &nbsp;
                </td>
                <td style={{ width: "113px" }} colSpan={3}>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "105px" }} colSpan={3}>
                  <p>Student</p>
                </td>
                <td style={{ width: "63px" }} colSpan={3}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "218px" }} colSpan={2}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "124px" }} colSpan={2}>
                  <p>
                    Responsible person
                    <a href="#_edn10" name="_ednref10">
                      <sup>
                        <sup>[10]</sup>
                      </sup>
                    </a>{" "}
                    at the Sending Institution
                  </p>
                </td>
                <td style={{ width: "114px" }} colSpan={3}>
                  &nbsp;
                </td>
                <td style={{ width: "113px" }} colSpan={3}>
                  &nbsp;
                </td>
                <td style={{ width: "105px" }} colSpan={3}>
                  <p>ECTS coordinator</p>
                </td>
                <td style={{ width: "63px" }} colSpan={3}>
                  &nbsp;
                </td>
                <td style={{ width: "218px" }} colSpan={2}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "124px" }} colSpan={2}>
                  <p>
                    Responsible person at the Receiving Institution
                    <a href="#_edn11" name="_ednref11">
                      [11]
                    </a>
                  </p>
                </td>
                <td style={{ width: "114px" }} colSpan={3}>
                  &nbsp;
                </td>
                <td style={{ width: "113px" }} colSpan={3}>
                  &nbsp;
                </td>
                <td style={{ width: "105px" }} colSpan={3}>
                  &nbsp;
                </td>
                <td style={{ width: "63px" }} colSpan={3}>
                  &nbsp;
                </td>
                <td style={{ width: "218px" }} colSpan={2}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "60px" }}>&nbsp;</td>
                <td style={{ width: "64px" }}>&nbsp;</td>
                <td style={{ width: "8px" }}>&nbsp;</td>
                <td style={{ width: "98px" }}>&nbsp;</td>
                <td style={{ width: "8px" }}>&nbsp;</td>
                <td style={{ width: "45px" }}>&nbsp;</td>
                <td style={{ width: "53.4px" }}>&nbsp;</td>
                <td style={{ width: "14.6px" }}>&nbsp;</td>
                <td style={{ width: "11px" }}>&nbsp;</td>
                <td style={{ width: "22px" }}>&nbsp;</td>
                <td style={{ width: "72px" }}>&nbsp;</td>
                <td style={{ width: "11px" }}>&nbsp;</td>
                <td style={{ width: "6px" }}>&nbsp;</td>
                <td style={{ width: "46px" }}>&nbsp;</td>
                <td style={{ width: "42px" }}>&nbsp;</td>
                <td style={{ width: "176px" }}>&nbsp;</td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: "center" }}>
            <strong>&nbsp;</strong>
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>During the Mobility</strong>
          </p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <table
            style={{ width: "950px", marginLeft: "auto", marginRight: "auto" }}
            border={1}
          >
            <tbody>
              <tr>
                <td style={{ width: "63px" }}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "639px" }} colSpan={6}>
                  <p>
                    <strong>Exceptional changes to Table A</strong>
                  </p>
                  <p>
                    (to be approved by e-mail or signature by the student, the
                    responsible person in the Sending Institution and the
                    responsible person in the Receiving Institution)
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "63px" }}>
                  <p>
                    <strong>Table A2</strong>
                  </p>
                  <p>
                    <strong>During the mobility</strong>
                  </p>
                </td>
                <td style={{ width: "76px" }}>
                  <p>
                    <strong>
                      Component code <br />{" "}
                    </strong>
                    (if any)
                  </p>
                </td>
                <td style={{ width: "184px" }}>
                  <p>
                    <strong>Component title at the</strong>{" "}
                    <strong>
                      Receiving Institution
                      <br />{" "}
                    </strong>
                    (as indicated in the course catalogue)
                  </p>
                </td>
                <td style={{ width: "92px" }}>
                  <p>
                    <strong>
                      Deleted component
                      <br />{" "}
                    </strong>
                    [tick if applicable]
                  </p>
                </td>
                <td style={{ width: "92px" }}>
                  <p>
                    <strong>
                      Added component
                      <br />{" "}
                    </strong>
                    [tick if applicable]
                  </p>
                </td>
                <td style={{ width: "112px" }}>
                  <p>
                    <strong>Reason for change</strong>
                    <a href="#_edn12" name="_ednref12">
                      <strong>
                        <strong>[12]</strong>
                      </strong>
                    </a>{" "}
                    (insert number)
                  </p>
                </td>
                <td style={{ width: "83px" }}>
                  <p>
                    <strong>
                      Number of ECTS&nbsp; credits (or equivalent)
                    </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "63px" }}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "76px" }}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "184px" }}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "112px" }}>&nbsp;</td>
                <td style={{ width: "83px" }}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "63px" }}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "76px" }}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "184px" }}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "112px" }}>&nbsp;</td>
                <td style={{ width: "83px" }}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "63px" }}>&nbsp;</td>
                <td style={{ width: "76px" }}>&nbsp;</td>
                <td style={{ width: "184px" }}>&nbsp;</td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "112px" }}>&nbsp;</td>
                <td style={{ width: "83px" }}>&nbsp;</td>
              </tr>
              <tr>
                <td style={{ width: "63px" }}>&nbsp;</td>
                <td style={{ width: "76px" }}>&nbsp;</td>
                <td style={{ width: "184px" }}>&nbsp;</td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "112px" }}>&nbsp;</td>
                <td style={{ width: "83px" }}>&nbsp;</td>
              </tr>
              <tr>
                <td style={{ width: "63px" }}>&nbsp;</td>
                <td style={{ width: "76px" }}>&nbsp;</td>
                <td style={{ width: "184px" }}>&nbsp;</td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "112px" }}>&nbsp;</td>
                <td style={{ width: "83px" }}>&nbsp;</td>
              </tr>
              <tr>
                <td style={{ width: "63px" }}>&nbsp;</td>
                <td style={{ width: "76px" }}>&nbsp;</td>
                <td style={{ width: "184px" }}>&nbsp;</td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "112px" }}>&nbsp;</td>
                <td style={{ width: "83px" }}>&nbsp;</td>
              </tr>
              <tr>
                <td style={{ width: "63px" }}>&nbsp;</td>
                <td style={{ width: "76px" }}>&nbsp;</td>
                <td style={{ width: "184px" }}>&nbsp;</td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "112px" }}>&nbsp;</td>
                <td style={{ width: "83px" }}>&nbsp;</td>
              </tr>
              <tr>
                <td style={{ width: "63px" }}>&nbsp;</td>
                <td style={{ width: "76px" }}>&nbsp;</td>
                <td style={{ width: "184px" }}>&nbsp;</td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "92px" }}>
                  <p>☐</p>
                </td>
                <td style={{ width: "112px" }}>&nbsp;</td>
                <td style={{ width: "83px" }}>&nbsp;</td>
              </tr>
              <tr>
                <td style={{ width: "63px" }}>&nbsp;</td>
                <td style={{ width: "76px" }}>&nbsp;</td>
                <td style={{ width: "184px" }}>
                  <p>
                    <em>
                      If necessary please electronically insert more rows.
                    </em>
                  </p>
                </td>
                <td style={{ width: "92px" }}>&nbsp;</td>
                <td style={{ width: "92px" }}>&nbsp;</td>
                <td style={{ width: "112px" }}>&nbsp;</td>
                <td style={{ width: "83px" }}>
                  <p>
                    <strong>Total: ……</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <table
            style={{ marginLeft: "auto", marginRight: "auto" }}
            border={1}
            width={950}
          >
            <tbody>
              <tr>
                <td style={{ width: "128px" }}>
                  <p>
                    <strong>Commitment</strong>
                  </p>
                </td>
                <td style={{ width: "132px" }}>
                  <p>
                    <strong>Name</strong>
                  </p>
                </td>
                <td style={{ width: "132px" }}>
                  <p>
                    <strong>Email</strong>
                  </p>
                </td>
                <td style={{ width: "108.8px" }}>
                  <p>
                    <strong>Position</strong>
                  </p>
                </td>
                <td style={{ width: "72px" }}>
                  <p>
                    <strong>Date</strong>
                  </p>
                </td>
                <td style={{ width: "136.8px" }}>
                  <p>
                    <strong>SIGNATURE, STAMP</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "128px" }}>
                  <p>Student</p>
                </td>
                <td style={{ width: "132px" }}>&nbsp;</td>
                <td style={{ width: "132px" }}>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "108.8px" }}>
                  <p>Student</p>
                </td>
                <td style={{ width: "72px" }}>
                  <p>&nbsp;</p>
                </td>
                <td style={{ width: "136.8px" }}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "128px" }}>
                  <p>
                    Responsible person
                    <a href="#_edn13" name="_ednref13">
                      <sup>
                        <sup>[13]</sup>
                      </sup>
                    </a>{" "}
                    at the Sending Institution
                  </p>
                </td>
                <td style={{ width: "132px" }}>&nbsp;</td>
                <td style={{ width: "132px" }}>&nbsp;</td>
                <td style={{ width: "108.8px" }}>
                  <p>ECTS coordinator</p>
                </td>
                <td style={{ width: "72px" }}>&nbsp;</td>
                <td style={{ width: "136.8px" }}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "128px" }}>
                  <p>
                    Responsible person at the Receiving Institution
                    <a href="#_edn14" name="_ednref14">
                      [14]
                    </a>
                  </p>
                </td>
                <td style={{ width: "132px" }}>&nbsp;</td>
                <td style={{ width: "132px" }}>&nbsp;</td>
                <td style={{ width: "108.8px" }}>&nbsp;</td>
                <td style={{ width: "72px" }}>&nbsp;</td>
                <td style={{ width: "136.8px" }}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <table
            style={{ marginLeft: "auto", marginRight: "auto" }}
            border={1}
            width={950}
          >
            <tbody>
              <tr>
                <td width={66}>
                  <p>&nbsp;</p>
                </td>
                <td colSpan={5} width={681}>
                  <p>
                    <strong>
                      Exceptional changes to Table B (if applicable)
                    </strong>
                  </p>
                  <p>
                    (to be approved by e-mail or signature by the student and
                    the responsible person in the Sending Institution)
                  </p>
                </td>
              </tr>
              <tr>
                <td width={66}>
                  <p>
                    <strong>Table B2</strong>
                  </p>
                  <p>
                    <strong>During the mobility</strong>
                  </p>
                </td>
                <td width={76}>
                  <p>
                    <strong>
                      Component code <br />{" "}
                    </strong>
                    (if any)
                  </p>
                </td>
                <td width={207}>
                  <p>
                    <strong>Component title at the</strong>{" "}
                    <strong>
                      Sending Institution
                      <br />{" "}
                    </strong>
                    (as indicated in the course catalogue)
                  </p>
                </td>
                <td width={96}>
                  <p>
                    <strong>
                      Deleted component
                      <br />{" "}
                    </strong>
                    [tick if applicable]
                  </p>
                </td>
                <td width={96}>
                  <p>
                    <strong>
                      Added component
                      <br />{" "}
                    </strong>
                    [tick if applicable]
                  </p>
                </td>
                <td width={205}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>Number of ECTS credits (or equivalent)</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={66}>
                  <p>&nbsp;</p>
                </td>
                <td width={76}>
                  <p>&nbsp;</p>
                </td>
                <td width={207}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={96}>
                  <p>☐</p>
                </td>
                <td width={96}>
                  <p>☐</p>
                </td>
                <td width={205}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={66}>
                  <p>&nbsp;</p>
                </td>
                <td width={76}>
                  <p>&nbsp;</p>
                </td>
                <td width={207}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={96}>
                  <p>☐</p>
                </td>
                <td width={96}>
                  <p>☐</p>
                </td>
                <td width={205}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={66}>&nbsp;</td>
                <td width={76}>&nbsp;</td>
                <td width={207}>&nbsp;</td>
                <td width={96}>
                  <p>☐</p>
                </td>
                <td width={96}>
                  <p>☐</p>
                </td>
                <td width={205}>&nbsp;</td>
              </tr>
              <tr>
                <td width={66}>&nbsp;</td>
                <td width={76}>&nbsp;</td>
                <td width={207}>&nbsp;</td>
                <td width={96}>
                  <p>☐</p>
                </td>
                <td width={96}>
                  <p>☐</p>
                </td>
                <td width={205}>&nbsp;</td>
              </tr>
              <tr>
                <td width={66}>&nbsp;</td>
                <td width={76}>&nbsp;</td>
                <td width={207}>&nbsp;</td>
                <td width={96}>
                  <p>☐</p>
                </td>
                <td width={96}>
                  <p>☐</p>
                </td>
                <td width={205}>&nbsp;</td>
              </tr>
              <tr>
                <td width={66}>&nbsp;</td>
                <td width={76}>&nbsp;</td>
                <td width={207}>
                  <p>
                    <em>
                      If necessary please electronically insert more rows.
                    </em>
                  </p>
                </td>
                <td width={96}>&nbsp;</td>
                <td width={96}>&nbsp;</td>
                <td width={205}>
                  <p>
                    <strong>Total: ……</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <table
            style={{ marginLeft: "auto", marginRight: "auto" }}
            border={1}
            width={950}
          >
            <tbody>
              <tr>
                <td width={133}>
                  <p>
                    <strong>Commitment</strong>
                  </p>
                </td>
                <td width={142}>
                  <p>
                    <strong>Name</strong>
                  </p>
                </td>
                <td width={142}>
                  <p>
                    <strong>Email</strong>
                  </p>
                </td>
                <td width={113}>
                  <p>
                    <strong>Position</strong>
                  </p>
                </td>
                <td width={76}>
                  <p>
                    <strong>Date</strong>
                  </p>
                </td>
                <td width={142}>
                  <p>
                    <strong>SIGNATURE, STAMP</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={133}>
                  <p>Student</p>
                </td>
                <td width={142}>&nbsp;</td>
                <td width={142}>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                </td>
                <td width={113}>
                  <p>Student</p>
                </td>
                <td width={76}>
                  <p>&nbsp;</p>
                </td>
                <td width={142}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={133}>
                  <p>
                    Responsible person
                    <a href="#_edn15" name="_ednref15">
                      <sup>
                        <sup>[15]</sup>
                      </sup>
                    </a>{" "}
                    at the Sending Institution
                  </p>
                </td>
                <td width={142}>&nbsp;</td>
                <td width={142}>&nbsp;</td>
                <td width={113}>
                  <p>ECTS coordinator</p>
                </td>
                <td width={76}>&nbsp;</td>
                <td width={142}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>
            <strong>&nbsp;</strong>
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>After the Mobility (Receiving Institution)</strong>
          </p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <table
            style={{ marginLeft: "auto", marginRight: "auto" }}
            border={1}
            width={950}
          >
            <tbody>
              <tr>
                <td width={66}>
                  <br />
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td colSpan={5} width={676}>
                  <p>
                    <strong>
                      <em>
                        Transcript of Records at the Receiving Institution{" "}
                      </em>
                    </strong>
                  </p>
                  <p>
                    <strong>
                      <em>&nbsp;</em>
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Start and end dates of the study period: from
                      [day/month/year] ………………………. to [day/month/year] ……………………….
                    </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td rowSpan={11} width={66}>
                  <p>
                    <strong>Table C</strong>
                  </p>
                  <p>
                    <strong>After the mobility</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={76}>
                  <p>
                    <strong>Component code</strong> <br /> (if any)
                  </p>
                </td>
                <td width={287}>
                  <p>
                    <strong>
                      Component title at the Receiving Institution
                    </strong>
                  </p>
                  <p>(as indicated in the course catalogue)</p>
                </td>
                <td width={128}>
                  <p>
                    <strong>
                      Was the component successfully completed by the student?{" "}
                    </strong>
                    [Yes/No]
                  </p>
                </td>
                <td width={95}>
                  <p>
                    <strong>
                      Number of ECTS credits <br />{" "}
                    </strong>
                    (or equivalent)
                  </p>
                </td>
                <td width={90}>
                  <p>
                    <strong>
                      Grades received at the Receiving Institution
                    </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>&nbsp;</p>
                </td>
                <td width={287}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={95}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={90}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>&nbsp;</p>
                </td>
                <td width={287}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={95}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={90}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={287}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={95}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={90}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={287}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={95}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={90}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={287}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={95}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={90}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={287}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={95}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={90}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={287}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={95}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={90}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={287}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={95}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={90}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={287}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={95}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={90}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={287}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={95}>
                  <p>
                    <strong>Total: …….</strong>
                  </p>
                </td>
                <td width={90}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <table
            style={{ marginLeft: "auto", marginRight: "auto" }}
            border={1}
            width={950}
          >
            <tbody>
              <tr>
                <td width={133}>&nbsp;</td>
                <td width={397}>&nbsp;</td>
                <td width={76}>
                  <p>
                    <strong>Date</strong>
                  </p>
                </td>
                <td width={142}>
                  <p>
                    <strong>SIGNATURE, STAMP</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={133}>
                  <p>
                    Responsible person
                    <a href="#_edn16" name="_ednref16">
                      <sup>
                        <sup>[16]</sup>
                      </sup>
                    </a>{" "}
                    at the Receiving Institution
                  </p>
                </td>
                <td width={397}>&nbsp;</td>
                <td width={76}>&nbsp;</td>
                <td width={142}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>
            It is <u>recommended</u> to use this template. However, if higher
            education institutions already have an IT system in place to produce
            the Transcript of Records, they can continue using it. All the
            information requested in this template{" "}
            <u>is to be considered as minimum requirements</u>, meaning that
            further fields can be added, if needed, and the format (e.g. font
            size and colours) can be adapted.
          </p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>
            <strong>&nbsp;</strong>
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>After the Mobility (Sending Institution)</strong>
          </p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <table
            style={{ marginLeft: "auto", marginRight: "auto" }}
            border={1}
            width={950}
          >
            <tbody>
              <tr>
                <td width={66}>
                  <p>&nbsp;</p>
                </td>
                <td colSpan={4} width={676}>
                  <p>
                    <strong>
                      <em>
                        Transcript of Records and Recognition at the Sending
                        Institution
                      </em>
                    </strong>
                  </p>
                  <p>
                    <strong>
                      <em>&nbsp;</em>
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Start and end dates of the study period: from
                      [day/month/year] ………………………. to [day/month/year] ……………………….
                    </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td rowSpan={11} width={66}>
                  <p>
                    <strong>Table D</strong>
                  </p>
                  <p>
                    <strong>After the mobility</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={76}>
                  <p>
                    <strong>
                      Component code <br />{" "}
                    </strong>
                    (if any)
                  </p>
                </td>
                <td width={343}>
                  <p>
                    <strong>Title of recognised component</strong>{" "}
                    <strong>at the Sending Institution</strong>
                  </p>
                  <p>(as indicated in the course catalogue)</p>
                </td>
                <td width={128}>
                  <p>
                    <strong>
                      Number of ECTS credits (or equivalent)&nbsp; recognised
                    </strong>
                  </p>
                </td>
                <td width={129}>
                  <p>
                    <strong>
                      Grades registered at the Sending Institution
                    </strong>{" "}
                    <br /> (if applicable)
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>&nbsp;</p>
                </td>
                <td width={343}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={129}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>&nbsp;</p>
                </td>
                <td width={343}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={129}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={343}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={129}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={343}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={129}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={343}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={129}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={343}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={129}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={343}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={129}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={343}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={129}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={343}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
                <td width={129}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={76}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={343}>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                </td>
                <td width={128}>
                  <p>
                    <strong>Total: ……</strong>
                  </p>
                </td>
                <td width={129}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <table
            style={{ marginLeft: "auto", marginRight: "auto" }}
            border={1}
            width={950}
          >
            <tbody>
              <tr>
                <td width={133}>&nbsp;</td>
                <td width={397}>&nbsp;</td>
                <td width={76}>
                  <p>
                    <strong>Date</strong>
                  </p>
                </td>
                <td width={142}>
                  <p>
                    <strong>SIGNATURE, STAMP</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={133}>
                  <p>
                    Responsible person
                    <a href="#_edn17" name="_ednref17">
                      <sup>
                        <sup>[17]</sup>
                      </sup>
                    </a>{" "}
                    at the Sending Institution
                  </p>
                </td>
                <td width={397}>&nbsp;</td>
                <td width={76}>&nbsp;</td>
                <td width={142}>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>
            It is <u>recommended</u> to use this template. However, if higher
            education institutions already have an IT system in place to produce
            the Transcript of Records, they can continue using it. All the
            information requested in this template{" "}
            <u>is to be considered as minimum requirements</u>, meaning that
            further fields can be added, if needed, and the format (e.g. font
            size and colours) can be adapted.
          </p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref1" name="_edn1">
              [1]
            </a>
            <strong>Nationality: </strong>country to which the person belongs
            administratively and that issues the ID card and/or passport.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref2" name="_edn2">
              [2]
            </a>{" "}
            <strong>Study cycle:</strong> Short cycle (EQF level 5) / Bachelor
            or equivalent first cycle (EQF level 6) / Master or equivalent
            second cycle (EQF level 7) / Doctorate or equivalent third cycle
            (EQF level 8).
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref3" name="_edn3">
              [3]
            </a>{" "}
            <strong>Field of education:</strong> The{" "}
            <a href="http://ec.europa.eu/education/tools/isced-f_en.htm">
              ISCED-F 2013 search tool
            </a>{" "}
            available at{" "}
            <a href="http://ec.europa.eu/education/tools/isced-f_en.htm">
              http://ec.europa.eu/education/tools/isced-f_en.htm
            </a>{" "}
            should be used to find the ISCED 2013 detailed field of education
            and training that is closest to the subject of the degree to be
            awarded to the student by the Sending Institution.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref4" name="_edn4">
              [4]
            </a>{" "}
            <strong>Erasmus code</strong>: a unique identifier that every higher
            education institution that has been awarded with the Erasmus Charter
            for Higher Education (ECHE) receives. It is only applicable to
            higher education institutions located in Programme Countries.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref5" name="_edn5">
              [5]
            </a>{" "}
            <strong>Contact person</strong>: person who provides a link for
            administrative information and who, depending on the structure of
            the higher education institution, may be the departmental
            coordinator or works at the international relations office or
            equivalent body within the institution.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref6" name="_edn6">
              [6]
            </a>{" "}
            An "<strong>educational component</strong>" is a self-contained and
            formal structured learning experience that features learning
            outcomes, credits and forms of assessment. Examples of educational
            components are: a course, module, seminar, laboratory work,
            practical work, preparation/research for a thesis, mobility window
            or free electives.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref7" name="_edn7">
              [7]
            </a>{" "}
            <strong>Course catalogue</strong>: detailed, user-friendly and
            up-to-date information on the institution’s learning environment
            that should be available to students before the mobility period and
            throughout their studies to enable them to make the right choices
            and use their time most efficiently. The information concerns, for
            example, the qualifications offered, the learning, teaching and
            assessment procedures, the level of programmes, the individual
            educational components and the learning resources. The Course
            Catalogue should include the names of people to contact, with
            information about how, when and where to contact them.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref8" name="_edn8">
              [8]
            </a>{" "}
            <strong>ECTS credits (or equivalent)</strong>: in countries where
            the "ECTS" system is not in place, in particular for institutions
            located in Partner Countries not participating in the Bologna
            process, "ECTS" needs to be replaced in the relevant tables by the
            name of the equivalent system that is used, and a web link to an
            explanation to the system should be added.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref9" name="_edn9">
              [9]
            </a>{" "}
            <strong>Level of language competence</strong>: a description of the
            European Language Levels (CEFR) is available at:
            https://europass.cedefop.europa.eu/en/resources/european-language-levels-cefr
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref10" name="_edn10">
              [10]
            </a>{" "}
            <strong>Responsible person at the Sending Institution</strong>: an
            academic who has the authority to approve the Learning Agreement, to
            exceptionally amend it when it is needed, as well as to guarantee
            full recognition of such programme on behalf of the responsible
            academic body. The name and email of the Responsible person must be
            filled in only in case it differs from that of the Contact person
            mentioned at the top of the document.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref11" name="_edn11">
              [11]
            </a>{" "}
            <strong>Responsible person at the Receiving Institution</strong>:
            the name and email of the Responsible person must be filled in only
            in case it differs from that of the Contact person mentioned at the
            top of the document.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref12" name="_edn12">
              [12]
            </a>{" "}
            <strong>
              Reasons for exceptional changes to study programme abroad (choose
              an item number from the table below):
            </strong>
          </p>
          <table
            style={{ width: "950px", marginLeft: "auto", marginRight: "auto" }}
            border={1}
          >
            <tbody>
              <tr>
                <td width={482}>
                  <p>
                    <strong>
                      <em>Reasons for deleting a component</em>
                    </strong>
                  </p>
                </td>
                <td width={255}>
                  <p>
                    <strong>
                      <em>Reason for adding a component</em>
                    </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width={482}>
                  <p>
                    1. Previously selected educational component is not
                    available at the Receiving Institution
                  </p>
                </td>
                <td width={255}>
                  <p>5. Substituting a deleted component</p>
                </td>
              </tr>
              <tr>
                <td width={482}>
                  <p>
                    2. Component is in a different language than previously
                    specified in the course catalogue
                  </p>
                </td>
                <td width={255}>
                  <p>6. Extending the mobility period</p>
                </td>
              </tr>
              <tr>
                <td width={482}>
                  <p>3. Timetable conflict</p>
                </td>
                <td width={255}>
                  <p>7. Other (please specify)</p>
                </td>
              </tr>
              <tr>
                <td width={482}>
                  <p>4. Other (please specify)</p>
                </td>
                <td width={255}>
                  <p>
                    <u>&nbsp;</u>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref13" name="_edn13">
              [13]
            </a>{" "}
            <strong>Responsible person at the Sending Institution</strong>: an
            academic who has the authority to approve the Learning Agreement, to
            exceptionally amend it when it is needed, as well as to guarantee
            full recognition of such programme on behalf of the responsible
            academic body. The name and email of the Responsible person must be
            filled in only in case it differs from that of the Contact person
            mentioned at the top of the document.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref14" name="_edn14">
              [14]
            </a>{" "}
            <strong>Responsible person at the Receiving Institution</strong>:
            the name and email of the Responsible person must be filled in only
            in case it differs from that of the Contact person mentioned at the
            top of the document.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref15" name="_edn15">
              [15]
            </a>{" "}
            <strong>Responsible person at the Sending Institution</strong>: an
            academic who has the authority to approve the Learning Agreement, to
            exceptionally amend it when it is needed, as well as to guarantee
            full recognition of such programme on behalf of the responsible
            academic body. The name and email of the Responsible person must be
            filled in only in case it differs from that of the Contact person
            mentioned at the top of the document.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref16" name="_edn16">
              [16]
            </a>{" "}
            <strong>Responsible person at the Receiving Institution</strong>: an
            academic who has the authority to approve the Learning Agreement, to
            exceptionally amend it when it is needed, as well as to guarantee
            full recognition of such programme on behalf of the responsible
            academic body. The name and email of the Responsible person must be
            filled in only in case it differs from that of the Contact person
            mentioned at the top of the document.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="#_ednref17" name="_edn17">
              [17]
            </a>{" "}
            <strong>Responsible person at the Sending Institution</strong>: an
            academic who has the authority to approve the Learning Agreement, to
            exceptionally amend it when it is needed, as well as to guarantee
            full recognition of such programme on behalf of the responsible
            academic body. The name and email of the Responsible person must be
            filled in only in case it differs from that of the Contact person
            mentioned at the top of the document.
          </p>
        </div>
      </div>
      <div style={{width:'100ws',marginTop:20,marginBottom:20,textAlign:"center"}}>
          <button
                  id="no-print"
                  onClick={() => window.print()}
                  className="no-print"
                  style={{ alignItems: "center", alignContent: "center", backgroundColor:'#3e72f8', color:'white' }}
                >
                  generate PDF
                </button>
      </div>
      
    </div>
  );
}

export default LaAgreement;
