import React from "react";
import propTypes from "prop-types";
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from "react-countup"

const CommonCards = (props) => {

    const { className, title, value, decription, lastUpdate } = props
    return (
        <Grid item component={Card} xs={12} md={3} className={className}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{title}</Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={value} duration={2.5} separator=","></CountUp>
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">{decription}</Typography>
            </CardContent>
        </Grid >
    )
}
CommonCards.propTypes = {
    className: propTypes.string,
    title: propTypes.string,
    value: propTypes.number,
    decription: propTypes.string,
    lastUpdate: propTypes.string
}
export default CommonCards;
