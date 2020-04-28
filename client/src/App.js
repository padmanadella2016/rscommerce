import React from 'react';
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";
import './App.css';

class App extends React.Component {
  state = { apiResponse: [],
    search: ""
   }

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.json())
        .then(apiResponse => this.setState({apiResponse}));
}
productList = product => {
  const { search } = this.state;
    if( search !== "" && product.Name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
      return null
  }
  return (
    <div className="col-md-3 " class="customCard" >
      <Card>
        <CardBody>
          
              <img style={{ display:"inline-block", width: "200px", height: "200px"}}
                src={product.Image}
                alt={product.Name}
              />
            <CardTitle title={product.Name}>
            {product.Name}
            </CardTitle>
            <h4>
            {product.Price} </h4>
            
            {product.Category}
            
        </CardBody>
      </Card>
    </div>
  );
};
onchange = e => {
  this.setState({ search: e.target.value });
};
componentDidMount() {
    this.callAPI();
}
  render(){
  
  return (
    <div className="App">

        <main style={{ marginTop: "4rem" }}>
        <div className="container">
            <div className="row">
              <div className="col-12">
                <center>
                 <h1>My Shop</h1>
                </center>
              </div>
         <div className="col">
                <Input
                  label="Search Product"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
    
           <div className="row">
              {this.state.apiResponse.map(product => {
                return this.productList(product);
              })}
            </div>
          </div>
        </div>
       </main>
       <footer class="page-footer font-small fixed-bottom  blue">  
        <div class="footer-copyright text-center py-3">
          <span>&copy; {new Date().getFullYear()} Copyright    </span> 
        </div>
      </footer>  
    </div>
  );
}
}
export default App;
