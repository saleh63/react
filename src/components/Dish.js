import React, {Component} from "react";
import {Card, CardText, CardImg, CardBody, CardTitle} from "reactstrap";


class Dish extends Component{

    constructor(props) {
        super(props);
        this.state = {
            dish : props.dish
        }
    }


    render() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.alt}/>
                            <CardBody>
                                <CardTitle> {this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div></div>
            )
        }
    }

}
export default Dish;