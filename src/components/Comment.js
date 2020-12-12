import React, {Component} from "react";


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
           return (
               <div className="row" key={cmnt.id}>
                   <div  className="col-12 m-1">
                       <p>{cmnt.comment}</p>
                       <p>{cmnt.author}</p>
                   </div>
               </div>
           );
        });
        console.log("Comments list", commentsList);
        return (
            <div>{commentsList}</div>
             //{commentsList}
        );
    }

}
export default Comments;