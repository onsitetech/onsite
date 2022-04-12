import React from "react";
import HeroImage from "./HeroImage/HeroImage";
import { makeStyles } from "@mui/styles";
import NewAppBar from "./NewAppBar";
import withRoot from "../../modules/withRoot";
import AppFooter from "../../modules/views/AppFooter";
import OtherPageContent from "./OtherPageContent/OtherPageContent";
import ComingSoon from "./HeroImage/ComingSoon";
import iphone12 from "../NewHomepageTravelPage/OtherPageContent/images/iphone12-mockup1.webp";
import {home} from "../../Constants"

const useStyles = makeStyles((theme) => ({
    main: {
        background: 'linear-gradient(to right bottom,#f9fafb , #f8eeec)',
        backgroundPosition: 1,
        [theme.breakpoints.down("sm")]: {
            width: "100% !important",
            height: "100% !important",

        },
    }
}));
const NewHomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <NewAppBar />
            <HeroImage details={home} />
            <ComingSoon />
            <OtherPageContent img={iphone12} details={home}/>
            <AppFooter />
        </div>
    );
}

export default withRoot(NewHomePage);