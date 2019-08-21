import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardText, Badge, Button } from 'reactstrap';

class List extends React.Component
{
    render ()
    {
        const { data, onDelete } = this.props;
        return (
            <div>
                {data && data.length > 0 && <div style={{ margin: "100px", width: "700px" }}>
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
        data: state
    }
};
const mapDispatchToProps = dispatch =>
{
    return {
        onDelete: (id, data) =>
        {
            let filteredData = data.filter(item =>
            {
                return item.id !== id
            })
            return dispatch({ type: "DELETE", data: filteredData })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);