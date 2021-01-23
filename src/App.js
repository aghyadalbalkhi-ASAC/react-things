import React from 'react';

import './App.css';

function Header(props){
  return(
    <header className='App' >
        <h1>Device Hub</h1>
        <h3>Number of Device in The Hub {props.count}</h3>
        <h3>{props.count}</h3>
    </header>
);
}

function Footer(props){
  return(
    <footer className='App'>
      <h2>{props.text}</h2>
    </footer>
  )
}

function ThingItem(props){
  return(
    <li>
      <h3>
        Device Name : {props.device.name}
      </h3>
      <h3>
        Device company : {props.device.company}
      </h3>
      <h3>
        Device Price : {props.device.price}
      </h3>
    </li>
  )
}
function ThingList(props){
  return(
    <>
      <h1>Device List</h1>
      <ul>
        {props.deviceHub.map(item => <ThingItem device = {item}/>)}
      </ul>
    </>
  )

}

class DeviceForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      device_name : "",
      device_company :"",
      device_price :0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render(){
    return(
      <div>
        <h2>Add A New Device</h2>
        <form onSubmit={this.handleSubmit} id='form'>
          <label> Enter The Device Name
            <input type="text" id = 'name' onChange={this.handleChange}></input>
          </label>
          <br></br>          <br></br>
          <label> Enter The Device Company
            <input id='company' type="text" onChange={this.handleChange}></input>
          </label>
          <br></br>          <br></br>
          <label> Enter The Device Price
            <input id='price' type="text" onChange={this.handleChange}></input>
          </label>
          <br></br>          <br></br>
          <input type="submit" value="Add" />
        </form>
    </div>
    )
  }

  handleChange(event){
    this.setState({
      name:document.getElementById('name').value,
      company: document.getElementById('company').value,
      price: document.getElementById('price').value

    });
  }


  handleSubmit(event){
    event.preventDefault();
    this.props.AddDevice(this.state);
  }
}
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      thingList: [
        {
          id:1,
          name:"Huawei Mate 10 Pro",
          company:"Huawei",
          price : 200
        },
        {
          id:2,
          name:"Samsung note 20 ultra",
          company:"Samsung",
          price :600
        }
      ],
    };
  }
  handelAddDevice(item){
    this.state.thingList.push({id:this.state.thingList.length+1, name:item.name, company: item.company, price: item.price})
    this.setState({device:this.state.thingList})
  }
  render(){
    return(
      <div >
        <Header count= {this.state.thingList.length}/>
        <DeviceForm  AddDevice = {(item)=> this.handelAddDevice(item)}/>
        <ThingList  deviceHub = {this.state.thingList}/>
        <Footer text = "@Copy Right  Aghead Albalke "/>
      </div>
    )
  }
}

export default App;
