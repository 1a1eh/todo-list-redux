import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardText, Badge, Button } from 'reactstrap';
import { DeleteAction } from '../redux/action-creators/index';

class List extends React.Component
{
    render ()
    {
        const { data, onDelete } = this.props;
        console.log(data)
        return (
            <div style={{ margin: "100px auto", width: "700px" }}>
                {data && data.length > 0 && <div>
                    <h1><Badge color="secondary">Count: {data.length}</Badge></h1>
                    {data.map((item) =>
                    {
                        return (
                            <Card color="primary" key={item.id}>
                                <CardBody>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardText>{item.body}</CardText>
                                    <Button onClick={() => onDelete(item.id, data)} className="float-right" color="secondary">Delete</Button>
                                </CardBody>
                            </Card>
                        );
                    })}
                </div>}
            </div>
        );
    };
};

const mapStateToProps = state =>
{
    return {
        data: state.AddListReducer
    }
};
const mapDispatchToProps = dispatch =>
{
    return {
        onDelete: (id, data) => dispatch(DeleteAction(id, data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);