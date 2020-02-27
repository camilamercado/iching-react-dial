import React, {PropTypes} from 'react'
import Column_00 from './Column_00'
import Chart_01 from './Chart_01'

class Chart_00 extends React.Component {
  static displayName = 'Chart_00'

  static propTypes = {
    'binary': PropTypes.array.isRequired,
    'selected': PropTypes.array.isRequired
  }


  constructor() {
    super()
    this.state = {zeroVal : "black", 
                  oneVal : "white",
                }

  }

  render() {

    if (this.props.keyVal === true){

    }

    let data = this.props.binary 
    let table = data.map((item, index) => {
    return <Column_00
            keyState = {this.props.keyState}
            keyVal = {this.props.keyVal}
            data = {item}
            key =  {index}
            indexVal = {index}
            setRowNum = {this.props.setRowNum}
            rowNum ={this.props.rowNum}
            sliceIndex ={this.props.sliceIndex}
            setSliceIndex ={this.props.setSliceIndex}/>        
    })

    let fill = {background : "transparent"}
    let newFill = {background : "black"}

    if(this.props.keyState === true){
      fill = newFill
    }

    let foilStyle = fill

    return (

      <div className="Foil" style={foilStyle}>

        <div className="IndexVal">{this.props.sliceIndex}</div>

        <div className="Info" id="left">
          <h2>shao yong sequ</h2><h2>ence</h2>
        </div>

        <Chart_01
          zeroVal={this.state.zeroVal}
          oneVal={this.state.oneVal}
          keyState = {this.props.keyState}
          keyVal = {this.props.keyVal}
          binary = {this.props.binary}
          selected = {this.props.selected}
          setRowNum = {this.props.setRowNum}
          rowNum ={this.props.rowNum}
          sliceIndex ={this.props.sliceIndex}
          setSliceIndex ={this.props.setSliceIndex}/>

        <div className="Chart_00">
          <div className="spin">
          <div className="table">
          {table}
          </div>
          </div>
        </div>

       </div>
    )
  }
}

export default Chart_00
