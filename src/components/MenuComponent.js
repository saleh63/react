import React, {Component} from "react";
import {Media} from "reactstrap";
import {Card, CardTitle, CardBody, CardImg, CardImgOverlay, CardText} from "reactstrap";

class Menu extends Component{
    constructor(props) {
        super(props);
        console.log("Menu component constructor called");
        this.state = {
            dishes: props.dishes,
            selectedDish : null

        };
    }

    componentDidMount() {
        console.log("Menu component componentDidMount called");
    }

    onDishSelect(dish){
        this.setState({
            selectedDish : dish
        });

    }

    renderDish(dish){
        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.alt}/>
                    <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return (
                <div></div>
            )
        }
    }

    render() {
        const menu = this.state.dishes.map(
            (dish) =>{
                return(
                    <div  key={dish.id} className="col-12 col-md-5 m-1">
                        <Card key={dish.id} onClick = {()=> this.onDishSelect(dish)}>
                            <CardImg  width="100%" src={dish.image} alt={dish.alt} />
                            <CardImgOverlay className="ml-5">
                                <CardTitle> {dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                )
            }
        );
        console.log("Menu component render called");
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }

}
export default Menu;