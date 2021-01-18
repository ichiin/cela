import {Grid} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import {Link} from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";
import React from "react";
import { withRouter } from "react-router-dom";

const Header = (props) => {
    const { location } = props;
    console.log(props)
    if (location.pathname.match(/LaAgreement/)){
        return null;
    }

    return(
        props.location.pathname !== "/LaAgreement" && props.loggedEmail !== "" &&
        <Grid container item xs={12} justify={"flex-end"}>
            <PersonIcon/>
            <a>{props.loggedEmail}</a>
            <Link to={"/"}>
                <CancelIcon onClick={props.disconnect}/>
            </Link>
        </Grid>
    )
}

export default withRouter(Header)