import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';

const Details = ({ title }) => {
    const classes = useStyles();

    return (
        <div>
            <Card className = {classes.income}>
                <CardHeader title={title === 'Income' ? classes.income : classes.expense} />
                <CardContent>
                    <Typography variant = "h5">$50</Typography>
                    {/* <Doughnut data="DATA"/> */}
                </CardContent>
            </Card>
        </div>
    )
}

export default Details
