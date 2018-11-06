import React from 'react'
import axios from 'axios'
import {Grid, Card, Divider} from '@material-ui/core/'
import RobotPreview from './RobotPreview'

export default class OrderHistoryComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            orders: [{}],
        }
    }
    
    async componentDidMount() {
        const { userId } = this.props.match.params;
        const response = await axios.get(`/api/completedOrders/${userId}`);
        this.setState({orders: response.data});
    }

    render() {
        return (
        <Grid container spacing={24} style={{padding: 24}}>
        {this.state.orders.map(order => (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={robot.id}>
                <Card>

                </Card>
            </Grid>
        ))}
        </Grid>
        )
    }
}