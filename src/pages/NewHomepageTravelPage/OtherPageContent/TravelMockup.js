import { makeStyles } from "@mui/styles";
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Fade } from 'react-reveal';
import Typography from "../../../modules/components/Typography";

const useStyles = makeStyles((theme) => ({
    boxone: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            flexDirection: "column !important",
            width: "100%",
        }
    },

    typographytwo: {
        borderBottom: "3px solid #0FAACD",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "35px !important",
        }
    },
    typographyone: {
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "35px !important",
        }
    },
    boxtwo: {
        marginBottom: "20px !important",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "10px !important",

        }
    },

}))


const TravelMockup = ({ img, details }) => {
    const classes = useStyles()
    return (
        <Grid container>
            <Fade bottom>
                <Grid className={classes.boxone}>
                    <Grid item sm={6} xs={12} order={1} sx={{ justifyContent: 'center' }}>
                        <Box
                            component="img"
                            src={img}
                            alt="iphone mockup of mobile app itinerary pages"
                            sx={{ height: { xs: 260, sm: 410 }, width: { xs: 350, sm: 550 } }}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12} md={12} padding={10} container order={5} sx={{ justifyContent: 'left' }}>
                        <Box>
                            <Box className={classes.boxtwo}><Typography className={classes.typographyone} variant="h4" >
                                {details.secondHeader}
                            </Typography>{details.isAbout && <Typography className={classes.typographytwo} color="primary.main" display="inline-block" variant='h4'>travel aficionados</Typography>}</Box>
                            <Typography variant="h5" style={{ textAlign: "justify" }}>
                                {details.secondText}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Fade>
        </Grid>
    );
}

export default TravelMockup;