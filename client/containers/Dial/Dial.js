import React, {PropTypes} from 'react'
import Binary from '../../../server/Data/Binary'
import Chart_00 from './Charts/Chart_00'
import Chart_01 from './Charts/Chart_01'
import Chart_11 from './Charts/Chart_11'
import Chart_10 from './Charts/Chart_10'

import keydown, { Keys } from 'react-keydown';
const { ENTER, TAB, SPACE } = Keys;

class Dial extends React.Component {
  static displayName = 'Dial'

  static propTypes = {
    'setBinary': PropTypes.func.isRequired,
    'Binary': PropTypes.object.isRequired,
    'binary': PropTypes.array.isRequired,
    'selected': PropTypes.array.isRequired
  }

  constructor() {
    super()
    this.state = {
                  binary : false, 
                  selected : false, 
                  keyState : false,
                  keyVal : false,
                  reveal : null,
                }
  }

componentWillMount() {
   this.props.setBinary(Binary)
}

componentWillReceiveProps( { keydown } ) {
  if ( keydown.event ) {
    console.log( "kko", keydown.event.which, this.state.keyState );
    
     if ( event.which === ENTER ) {
        this.setState({keyVal : false, keyState : true})
     }if ( event.which === TAB ) {
        this.setState({keyVal : true, keyState : false})
     }if ( event.which === SPACE ) {
       this.setState({keyVal : false, keyState : false})
     }
  }
}

keyEvent(){   
  this.setState({keyState : !this.state.keyState})
}

Chart00 = () => {
  if (this.props.hasData === true && this.state.reveal === "00"){
     return <Chart_00
       binary = {this.props.binary}
       selected = {this.props.selected}
       keyState = {this.state.keyState}
       keyVal = {this.state.keyVal}
       setRowNum = {this.props.setRowNum}
       rowNum ={this.props.rowNum}
       sliceIndex ={this.props.sliceIndex}
       setSliceIndex ={this.props.setSliceIndex}/>
     } if (!this.props.hasData){
     return <p>loading data</p>
  }
}

Chart11 = () => {
  if (this.props.hasData === true && this.state.reveal === "11"){
     return <Chart_11
       keyState = {this.state.keyState}
       keyVal = {this.state.keyVal}
       string = {this.props.string}
       binary = {this.props.binary}
       selected = {this.props.selected}
       hexBin = {this.props.hexBin}
       setHexBin = {this.props.setHexBin}/>
     } if (!this.props.hasData){
     return <p>loading data</p>
  }
}

Chart10 = () => {
  if (this.props.hasData === true && this.state.reveal === "10"){
     return <Chart_10
       keyState = {this.state.keyState}
       keyVal = {this.state.keyVal}
       string = {this.props.string}
       hexBin = {this.props.hexBin}
       setHexBin = {this.props.setHexBin}
       rowNumber = {null}
       selected = {this.props.selected}/>
     } if (!this.props.hasData){
     return <p>loading data</p>
  }
}

showChart(x){
  console.log(this.state.reveal)
  this.setState({reveal : x})
}

  render() {
     let nightStyle = {background : "#efdc37"}
     let twixtStyle = {background : "dodgerblue"}
     //let twixtStyle = {background : "red"}
     //let twixtStyle = {background : "grey"}
     let dayStyle = {background : "black"}
     console.log("TESTTTTT", this.state.keyState)

     if (this.state.keyState === false){
     	setTimeout(function(){
             this.setState({keyState:true});
        }.bind(this),5000);  // wait 5 seconds, then reset to false
     	
     }
     if (this.state.keyState === true){dayStyle = nightStyle}
     if (this.state.keyVal === true){dayStyle = twixtStyle}

    return (
      <div className="Dial" style={dayStyle}> 

        <div className="button_01" onClick= {() => this.showChart("00")}></div>
        <div className="button_02" onClick= {() => this.showChart("11")}></div>
        <div className="button_03" onClick= {() => this.showChart("10")}></div>
        
        <div className="Page_00">

          {this.Chart00()}
          {this.Chart11()}
          {this.Chart10()}
  
        </div>
      
      </div>
    )
  }
}

export default keydown(Dial)
