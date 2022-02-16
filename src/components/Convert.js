import React from 'react'

class Convert extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          valueCM: " "
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      event.preventDefault();
    }
  
    handleSubmit(event) {
      let Inches = this.state.value ;
      this.setState({valueCM: Inches*2.54})
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Inches To Centimeters" value={this.state.value} onChange={this.handleChange} className="border-2 rounded-md my-2 p-2" />
          <span className="p-1"/>
          <input type="submit" value="Convert" placeholder="Convert" className="bg-blue-500 text-white p-2 my-2 rounded-md hover:bg-blue-300 hover:text-blue-800" />
          <h1 className="text-lg">Value in CM: {this.state.valueCM}</h1>
        </form> 
        </div>
        
      );
    }
  }

  export default Convert