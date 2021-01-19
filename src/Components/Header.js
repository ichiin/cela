import { Grid } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

const Header = (props) => {
  const { location } = props;
  const [loggedEmail, setLoggedEmail] = useState(localStorage.getItem("email"));
  useEffect(() => {
    setLoggedEmail(localStorage.getItem("email"));
  });
  if (location.pathname.match(/LaAgreement/)) {
    return null;
  }

  return (
    props.location.pathname !== "/LaAgreement" &&
    loggedEmail &&
    loggedEmail !== "" && (
      <Grid container item xs={12} justify={"flex-end"}>
        <PersonIcon />
        <a>{loggedEmail}</a>
        <Link to={"/"}>
          <CancelIcon onClick={props.disconnect} />
        </Link>
      </Grid>
    )
  );
};

export default withRouter(Header);
