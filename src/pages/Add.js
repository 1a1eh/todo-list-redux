import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, Button, CardText } from 'reactstrap';
import { AddAction } from '../redux/action-creators';

class Add extends React.Component
{
    render ()
    {
        let initId = new Date().getTime();
        return (
            <div style={{ margin: "100px auto", width: "500px", backgroundColor: "gray" }}>
                <Card color="success">
                    <CardHeader>
                        <input ref={e => this.title = e} />
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            <input ref={e => this.body = e} />
                        </CardText>
                        <Button onClick={() =>
                        {
                            this.props.onAdd(this.title.value, this.body.value, ++initId);
                            this.props.history.push("/list");
                        }}>Save</Button>
                    </CardBody>
                </Card>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch =>
{
    return {
        onAdd: (title, body, id) => dispatch(AddAction(title,body,id))
    }
};

export default connect(null, mapDispatchToProps)(Add);