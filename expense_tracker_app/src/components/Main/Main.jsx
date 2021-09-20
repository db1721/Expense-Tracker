import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

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
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs = {12}>
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
