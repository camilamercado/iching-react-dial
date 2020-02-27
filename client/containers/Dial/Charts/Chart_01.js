import React, {PropTypes} from 'react'
import Column_01 from './Column_01'

class Chart_01 extends React.Component {
  static displayName = 'Chart_01'

  static propTypes = {
    'binary' : PropTypes.array.isRequired,
    'selected' : PropTypes.array.isRequired
  }

  render() {

    let data = this.props.binary 
    let table = data.map((item, index) => {
    return <Column_01
            zeroVal={this.props.zeroVal}
            oneVal={this.props.oneVal}
            keyState={this.props.keyState}
            keyVal = {this.props.keyVal}
            data = {item}
            indexVal = {index}
            setRowNum = {this.props.setRowNum}
            rowNum ={this.props.rowNum}
            sliceIndex ={this.props.sliceIndex}
            setSliceIndex ={this.props.setSliceIndex}/>        
    })

    return (
      <div className="Chart_01">
        <svg className="Radial">
        {table}
       </svg>
      </div>
    )
  }
}

export default Chart_01
