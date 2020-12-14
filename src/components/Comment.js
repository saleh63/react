import React, {Component} from "react";
import {DISH, formatDate} from "../shared/dateutil"


class Comments extends Component{
    constructor(props) {
        super(props);
        this.state= {
            comments : props.comments
        }
        console.log("Comments constructor", props);
    }

    render() {
        console.log("Comments render", this.props.comments);
        const commentsList = this.props.comments.map((cmnt) =>{
            const dt = new Date(Date.parse(cmnt.date));
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            console.log(cmnt.date, dt);
           return (
               <div className="row" key={cmnt.id}>
                   <div  className="col-12 m-1">
                       <p>{cmnt.comment}</p>
                       <p>-- {cmnt.author}, {formatDate(dt)}</p>
                   </div>
               </div>
           );
        });
        console.log("Comments list", commentsList);
        return (
            <div>
                <strong>Comments</strong>
                <div>{commentsList}</div>

            </div>
             //{commentsList}
        );
    }

}
export default Comments;