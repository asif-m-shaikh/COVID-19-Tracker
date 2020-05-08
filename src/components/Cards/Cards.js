import React from "react";
import { Grid } from '@material-ui/core';
import cx from "classnames"
import styles from './Cards.module.css';
import CommonCards from "../CommonComponents/CommonCards"
const Cards = (props) => {
    const { confirmed, recovered, deaths, lastUpdate } = props.data;
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">

                <CommonCards
                    className={cx(styles.card, styles.infected)}
                    title="Infected"
                    value={confirmed.value}
                    lastUpdate={lastUpdate}
                    decription="Number of active cases of COVID-19"
                />

                <CommonCards
                    className={cx(styles.card, styles.recovered)}
                    title="Recovered"
                    value={recovered.value}
                    lastUpdate={lastUpdate}
                    decription="Number of recoveries from COVID-19"
                />

                <CommonCards
                    className={cx(styles.card, styles.deaths)}
                    title="Deaths"
                    value={deaths.value}
                    lastUpdate={lastUpdate}
                    decription="Number of deaths caused by COVID-19"
                />

            </Grid>
        </div>
    )
}
export default Cards;