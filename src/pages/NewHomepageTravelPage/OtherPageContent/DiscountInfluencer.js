import { Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Fade } from 'react-reveal';
import Typography from '../../../modules/components/Typography';
import './BookNow.css';

const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down("sm")]: {
        }
    },
    typographyone: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px !important",
            whiteSpace: "break-spaces"
        }
    },
    typographytwo: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px !important",
        }
    },
}))


 

const DiscountInfluencer = () => {
    const classes = useStyles()
    return (
        <Fade bottom>

            <Grid className={classes.item}>
                <div className="book-image">

                    <Box className="book-text">
                        <Typography className={classes.typographyone} marginBottom="40px" variant="h4">
                        If you'd like your travel plans to be personalized to fit your preferences?
                        </Typography >
                        <Typography className={classes.typographytwo} marginBottom="40px" variant="h5">
                        Please reach out to us here. We will connect you to a specialist for additional fee of 5% of your total trip cost
                        </Typography>
                        <Button 
                            href="https://try.onsiteplanning.com/onsiteplanning/"
                            variant="contained" style={{
                                backgroundColor: "#00aaca", padding: "10px 55px",
                                borderRadius: "10px",
                                color: "white",
                                fontSize: "15px"
                            }}>Let's Go</Button>
                    </Box>

                </div>
            </Grid>
        </Fade>

    );
}

export default DiscountInfluencer;