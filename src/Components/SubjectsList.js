import React, { useEffect, useState } from "react";
import "../Style/SubjectsList.css";
import {
  Button,
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

const axios = require("axios");

export function SubjectsList(props) {
  const personalInfo = props.location.state;
  const [subjects, setSubjects] = useState([]);
  const [ectsTotal, setEctsTotal] = useState(0);
  const [selectedSubjectId, setSelectedSubjectId] = useState(-1); //for now, it's only possible to add item 1 by 1
  const [mySubjects, setMySubjects] = useState([]);
  const [courseDetailsIDS, setCourseDetailsIDS] = useState([]);
  const databaseURL = "http://localhost:3001";

  //On page load, upload list of subject from db
  useEffect(() => {
    axios
      .get(databaseURL + "/getSubjectList")
      .then(function (response) {
        setSubjects(response.data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  //Select the subject that has been clicked in the list if it's not the selected one
  const onClickSubject = (e, id) => {
    if (selectedSubjectId === 0 || selectedSubjectId !== id) {
      setSelectedSubjectId(parseInt(id));
    }
    console.log("selected subject id : ", id);
  };

  //Add selected subject to the basket
  const onAddSubject = () => {
    const newSubject = subjects.find((subject) => {
      return subject.id === selectedSubjectId;
    });
    if (!mySubjects.includes(newSubject) && newSubject) {
      const myNewSubjects = [...mySubjects, newSubject];
      setMySubjects(myNewSubjects);
      setEctsTotal(ectsTotal + newSubject.ects);
      setSelectedSubjectId(-1);
    }
  };

  const onRemoveSubject = () => {
    const newSubject = subjects.find((subject) => {
      return subject.id === selectedSubjectId;
    });
    if (mySubjects.includes(newSubject)) {
      const myNewSubjects = mySubjects.filter(
        (subject) => subject.id !== selectedSubjectId
      );
      setMySubjects(myNewSubjects);
      setEctsTotal(ectsTotal - newSubject.ects);
      setSelectedSubjectId(-1);
    }
  };

  const toggleInfo = (event, id) => {
    if (courseDetailsIDS.includes(id)) {
      setCourseDetailsIDS(
        courseDetailsIDS.filter((courseID) => courseID !== id)
      );
    } else {
      setCourseDetailsIDS([...courseDetailsIDS, id]);
    }
  };

  const generateLA = () => {
    props.history.push({
      pathname: "/LaAgreement",
      state: {
        mySubjects: mySubjects,
        personalInfo: personalInfo,
        ectsTotal: ectsTotal,
      },
    });
  };

  return (
    <Grid container justify={"center"} spacing={3} id={"subjectsContainer"}>
      <Grid item xs={6} className={"subjectsListTable"}>
        <h1>Available courses</h1>
        <Paper elevation={5} className={"subjectsListBody"}>
          <Grid
            container
            direction={"row"}
            justify={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12}>
              <List>
                {subjects.map((s) => {
                  return (
                    <Grid container item direction={"row"}>
                      <ListItem
                        button
                        selected={selectedSubjectId === s.id && mySubjects.filter(subj => subj.id === selectedSubjectId).length === 0}
                        disabled={mySubjects.includes(s)}
                        style={{ justifyContent: "center" }}
                        onClick={(event) => onClickSubject(event, s.id)}
                      >
                        <ListItemIcon>
                          <InfoIcon
                            onClick={(event) => toggleInfo(event, s.id)}
                          />
                        </ListItemIcon>
                        <ListItemText primary={s.name} />
                      </ListItem>
                      <Collapse in={courseDetailsIDS.includes(s.id)}>
                        <Grid item xs={12} justify={"center"}>
                          <p style={{ justifyContent: "center" }}>
                            {s.description}
                          </p>
                        </Grid>
                      </Collapse>
                    </Grid>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        </Paper>
        <Button
          variant={"outlined"}
          className={"secondaryButton"}
          onClick={onAddSubject}
          disabled={(selectedSubjectId === -1 || mySubjects.filter(subj => subj.id === selectedSubjectId).length > 0) && true}
        >
          Add selected course
        </Button>
      </Grid>
      <Grid item xs={4} className={"subjectsListTable"}>
        <h1>My courses</h1>
        <Paper elevation={5} className={"subjectsListBody"}>
          <Grid
            container
            direction={"row"}
            alignContent={"center"}
            justify={"center"}
          >
            <Grid item xs={12}>
              <List>
                {mySubjects.map((s) => {
                  return (
                    <Grid container item direction={"row"}>
                      <ListItem
                        button
                        selected={selectedSubjectId === s.id}
                        style={{ justifyContent: "center" }}
                        onClick={(event) => onClickSubject(event, s.id)}
                      >
                        {s.name}
                      </ListItem>
                    </Grid>
                  );
                })}
              </List>
            </Grid>
            <Grid item xs={12}>
              <a>---</a>
            </Grid>
            <Grid item>
              <a>ECTS Total : {ectsTotal}</a>
            </Grid>
          </Grid>
        </Paper>
        <Button
          variant={"outlined"}
          color={"secondary"}
          className={"tertiaryButton"}
          disabled={(selectedSubjectId === -1 || mySubjects.filter(subj => subj.id === selectedSubjectId).length === 0) && true}
          onClick={onRemoveSubject}
        >
          Remove selected course
        </Button>
      </Grid>
      <Grid
        container
        item
        xs={3}
        justify={"center"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Button
          variant={"contained"}
          className={"primaryButton"}
          onClick={generateLA}
          disabled={mySubjects.length === 0}
        >
          Generate Learning Agreeement
        </Button>
      </Grid>
    </Grid>
  );
}
