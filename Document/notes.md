<strong> Setting up environment</strong>
<ul>
<li> Install yarn</li>
<li> install <strong>create-react-app</strong> fromyarn package manager<BR/>
 cmd> yarn global add create-react-app@1.5.2<BR/>
 create-react-app --help<br/>
 create-react-app 'project-name'<BR/>
 yarn start</li>
</ul>

<strong> Use reactstrap </strong>
<ul>
<li>yarn add bootstrap@4.0.0 </li>
<li>yarn add reactstrap@5.0.0</li>
<li>yarn add react-popper@0.9.2</li>
<li>Modify index.js and import bootstrap CSS file<BR/>
import 'bootstrap/dist/css/bootstrap.min.css';</li>
</ul>

<strong>Using navbar </strong><BR/>
indside App.js<br/>
<code><BR/>
import { Navbar, NavbarBrand } from 'reactstrap';
<BR/>
.<BR/>
class App extends Component {<BR/>
&nbsp;render() {<BR/>
&nbsp;&nbsp;&nbsp;return (<BR/>
&nbsp;&nbsp;&nbsp;\<div className="App"><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;\<Navbar dark color="primary"><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<div className="container"><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<NavbarBrand href="/">Ristorante Con Fusion\</NavbarBrand><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\</div><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;\</Navbar><BR/>
&nbsp;&nbsp;&nbsp;\</div><BR/>
&nbsp;&nbsp;&nbsp;);<BR/>
&nbsp;}<BR/>
}<BR/>
</code>

<strong>React Components Part 1</strong><BR/>
<code><BR/>
import React, { Component } from 'react';<BR/>
import { Media } from 'reactstrap';<BR/>
class Menu extends Component {<BR/>
&nbsp;constructor(props) {<BR/>
&nbsp;&nbsp;super(props);<BR/>
&nbsp;&nbsp;this.state = {<BR/>
&nbsp;&nbsp;&nbsp;dishes: [<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: 0,<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:'Uthappizza',<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: 'assets/images/uthappizza.png',<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category: 'mains',<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label:'Hot',<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price:'4.99',<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description:'A unique combination of Indian Uthappam (pa...' <BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<BR/>
&nbsp;&nbsp;&nbsp;};<BR/>
&nbsp;&nbsp;}<BR/>
&nbsp;&nbsp;render() { <BR/>
&nbsp;&nbsp;&nbsp;const menu = this.state.dishes.map((dish) => {<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<div key={dish.id} className="col-12 mt-5"><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<Media tag="li"><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<Media left middle><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<Media object src={dish.image} alt={dish.name} /><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\</Media><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<Media body className="ml-5"><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<Media heading>{dish.name}\</Media><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<p>{dish.description}\</p><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\</Media><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\</Media><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\</div><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);<BR/>
&nbsp;&nbsp;&nbsp;});<BR/>
&nbsp;&nbsp;&nbsp;return (<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;\<div className="container"><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<div className="row"><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<Media list><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\{menu}<BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\</Media><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\</div><BR/>
&nbsp;&nbsp;&nbsp;&nbsp;\</div><BR/>
&nbsp;&nbsp;&nbsp;);<BR/>
&nbsp;&nbsp;}<BR/>
}<BR/>
export default Menu;
</code>
 