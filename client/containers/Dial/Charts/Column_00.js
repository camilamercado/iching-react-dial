import React, {PropTypes} from 'react'

class Column_00 extends React.Component {
  static displayName = 'Column_00'

  static propTypes = {
    'data': PropTypes.object.isRequired,
    'key': PropTypes.number.isRequired
  }

  constructor() {
    super()
    this.state = {binary : false, selected : false, row_state : false, row_num: null}
  }

  setRowProp(){
    //this.props.setRowNum(this.props.indexVal)

  }

  binaryToggle(index){
    this.props.setSliceIndex(index)
  //this.setState({binary : !this.state.binary})
  }

  selectToggle(num){
  this.setState({row_state : !this.state.row_state})
  this.setState({row_num : num})
  this.setState({selected : !this.state.selected})

  //onMouseOver= {() => this.selectToggle(index + 1)}
  //onMouseOut= {() => this.selectToggle(index + 1)}
  //console.log(this.props)
  //this.props.setRowNum(this.props.indexVal)
  //console.log(this.state)
  }

  render() {
    let array = this.props.data.array    
    let blocks = array.map((item, index) =>{
    let char = String.fromCharCode(66)
    let keyState = this.props.keyState
    let selected = this.state.selected
    let binary = this.state.binary
    let row_state = this.state.row_state
    let row_num = this.state.row_num

    // let indexVal = char.charCodeAt(0) - 97
     //console.log(this.props)
     let sliceIndex = this.props.sliceIndex
     //let setSliceIndex = this.props.setSliceIndex

    
    let rowNum = this.props.rowNum
    let indexVal = this.props.indexVal


      let cn = "block"
      let fill = "red"
      let textColor = "transparent"

      if (item === 1){fill = "white"}
      if (item === 0 && keyState === false ){fill = "black"}
      if (item === 0 && keyState === true ){fill = "blue"}
      if (item === 1 && keyState === true ){fill = "red"}
      if (item === 0 && selected === true ){fill = "blue"}
      if (item === 1 && selected === true ){fill = "red"}
        
      if (item === 0 && binary === true ){fill = "transparent", textColor = "blue" }
      if (item === 1 && binary === true ){fill = "transparent", textColor = "white"}

      if (item === 1 && rowNum === indexVal ){fill = "magenta", textColor = "transparent"}
      if (item === 0 && rowNum === indexVal ){fill = "cyan", textColor = "transparent"}
      if (item === 0 && rowNum === indexVal && binary === true ){fill = "transparent", textColor = "red"}
      if (item === 1 && rowNum === indexVal && binary === true ){fill = "transparent", textColor = "yellow"}
      
      if (item === 1 && sliceIndex === index ){fill = "#efdc37", textColor = "black"}
      if (item === 0 && sliceIndex === index ){fill = "#efdc37", textColor = "black"}



      if (this.state.binary === true){
        style = {
          color: fill,
          background: "transparent"
        }
      }

      let style = {
       background: fill,
       color: textColor
      }

      return <div className={cn} 
                  key={index}
                  id={index + 1} 
                  style={style} 
                  onMouseOver= {() => this.binaryToggle(index)}>
                    <div className="binary">{item}</div>
              </div>
    })

    return (
      <div className="base_row" 
            id={this.props.indexVal} 
            onMouseOver= {() => this.setRowProp()}>{blocks}</div>
    )
  }
}

export default Column_00
