import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';

const Main = () => {
    const classes = useStyles();

    return (
        <Card classname={classes.root}>
            <CardHeader title="Expense Tracker" subheader = "Powered by Speechly"/>
            <CardContent>
                <Typography align = "center" variant="h5">Total balance $100</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>Total balance $100</Typography>
                {/* Info Card */}
                Try saying: add income for $100 in category salary for Monday
                <Divider/>
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid xs = {12}>
                        {/* List */}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
