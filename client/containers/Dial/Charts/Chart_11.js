import React, {PropTypes} from 'react'
import Chart_01 from './Chart_01'
import Chart_10 from './Chart_10'

// var yellow = "rgb(239, 220, 55)"
let yellow = "grey"

class Chart_11 extends React.Component {
  static displayName = 'Chart_11'

  static propTypes = {
    'binary': PropTypes.array.isRequired,
    'selected': PropTypes.array.isRequired
  }

  constructor() {
    super()
    this.state = {rowNumber : 0, 
                  rowCount: "Row_0", 
                  value: 0,
                  timer: true
                }
    this.incrementor = null

  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(this.state.rowNumber, nextProps.rowNumber)
  // }

  handleChange(){
    let inputVal

    if(this.props.keyState === true){
      inputVal= Number(this.refs.input_Feild2.value)
    }if(this.props.keyState === false){
      inputVal= Number(this.refs.input_Feild.value)
    }

    let newClass= "Row_" + inputVal
    let newCount= inputVal
    console.log("inputVal:", inputVal)
     
     this.setState({rowNumber: newCount, rowCount: newClass, value: inputVal})
     clearInterval(this.incrementer)
     let binaryStr = newCount.toString(2)
     this.setHexBin(binaryStr)
  }

  startInputCount(){
    this.setState({timer: !this.state.timer})
    if(this.state.timer === true){
      clearInterval(this.incrementer)
      this.incrementer = setInterval(() => this.setRow(), 800);

    }if(this.state.timer === false){
      clearInterval(this.incrementer)
    }
  }

  setRow(){
    let newClass= "Row_"+ (this.state.rowNumber + 1)
    let newCount= this.state.rowNumber + 1
    this.setState({rowNumber: newCount, rowCount: newClass, value: newCount})

    let binaryStr = newCount.toString(2)
    this.setHexBin(binaryStr)
  }

  setHexBin(binaryStr){

    while(binaryStr.length < 6) {
    binaryStr = "0" + binaryStr;
    }
    let hexArr = binaryStr.match(/.{1,6}/g);
    
    let hexBlock = hexArr.map((item, index) => {
      var rev = item.split('').sort(()=>1).join('')
      var hexStr = rev.match(/.{1}/g);
      this.props.setHexBin(hexStr)
      //console.log(this.props)
    })

  }

  startRowCount(x){
  let newClass= "Row_" + x
  let newCount= x
  this.setState({rowNumber: newCount, rowCount: newClass, value: x})
  let binaryStr = newCount.toString(2)
  this.setHexBin(binaryStr)
  }

  stop_style () {
    return {
      background : "red",
      color: "whitesmoke"
    }
  }

  start_style () {
    return {
       background : yellow,
       border: "1px solid " + yellow
    }
  }

  stop_styleI () {
    return {
      color: "red"
    }
  }

  start_styleI () {
    return {
       color : yellow,
    }
  }

  showSequence(){
    if(this.props.keyState === true){
      return  <div className="Right_Feild">
          <div className="input_Container">
            <input type="text"
            ref="input_Feild2"
            className="input_Feild" 
            value={this.state.value} 
            onChange={() => this.handleChange()}/>
          
              <div className="input_Button"
             onClick={() => this.startInputCount()}></div>
          </div>

            <div className="Square">
                <Chart_10 
                  string = {this.props.string}
                  rowNumber = {this.state.rowNumber}
                  hexBin = {this.props.hexBin}
                  setHexBin = {this.props.setHexBin}/>
                  <p>Shao Yong Sequence of Iching Hexagrams</p>
              </div>
        </div>         
    }if (this.props.keyState === false){
      return <div></div>
    }
  }



  render() {    
    let str = this.props.string
    let res = str.split("")

    let table = res.map((item, index) => {

    let x = index / 6

    if ((x % 1) >= 0 ){
      x = Math.floor(x)
    }

    let myRowClass = "Row_" + x
    //Set Row #
    let myClass = "biBlock " + myRowClass

    //Set Column #
    let rowNum = index % 6
    let newID = "Col_" + String.fromCharCode(65 + rowNum) + "_" + rowNum

    //Set fill color based on binary value
    let num = Number(item)
    let fill = "grey"
    let textColor = "transparent"

    if (num === 0 ){fill = "black"}
    if (num === 1){fill = "white"}
    if (num === 0 && myRowClass === this.state.rowCount){
      fill = "dimgrey"
      textColor = "black"
    }
    
    if (num === 1 && myRowClass === this.state.rowCount){
      fill = "lightgrey"
      textColor = "black"
    }

    let style = {
     background: fill,
     color: textColor
    }

      return <div className={myClass} 
                  key={index} 
                  id={newID} 
                  style={style}>{item}
              </div>       
    })

    let count = 64
    let newCount = Array.apply(null, {length: count}).map(Number.call, Number)

    let button_Style = this.state.timer ? this.start_style() : this.stop_style()
    let input_Style = this.state.timer ? this.start_styleI() : this.stop_styleI()
    let right_Style = this.state.timer ? this.start_styleI() : this.stop_styleI()


    let table2 = res.map((item, index) => {

    let x = index / 6

    if ((x % 1) >= 0 ){
      x = Math.floor(x)
    }

    let myRowClass = "Row_" + x
    //Set Row #
    let myClass = "biBlock " + myRowClass

    //Set Column #
    let rowNum = index % 6
    let newID = "Col_" + String.fromCharCode(65 + rowNum) + "_" + rowNum

    //Set fill color based on binary value
    let num = Number(item)
    let fill = "transparent"
    let textColor = "white"

    if (num === 0 ){
      textColor = "black" 
    }
    if (num === 1){
      textColor = "black" 
    }
    if (num === 0 && myRowClass === this.state.rowCount){
      fill = "dimgrey"
      textColor = "black"  
    }
    
    if (num === 1 && myRowClass === this.state.rowCount){
      fill = "darkgrey" 
      textColor = "black"
    }

    let style = {
     background: fill,
     color: textColor
    }

      return <div className={myClass} 
                  key={index} 
                  id={newID} 
                  style={style}>{item}
              </div>       
    })

    let decimal = newCount.map((item, index) => {

    let textColor = "black"
    let fill = "transparent"
    let triFill = "transparent"
    
    if (item === this.state.rowNumber){
      fill = "red"
      textColor = "black"
      triFill = "red"
    }

    let style = {
     background: fill,
     color: textColor
    }

    let triStyle = {
      "border-color": "transparent transparent transparent " + triFill
    }

      return <div className="decBlock" 
                  key={index} 
                  id={item} 
                  style={style}
                  onClick= {() => this.startRowCount(item)}>{item}
                  <div className="arrow-right" style={triStyle}></div>
              </div>   
    })

    let table3 = res.map((item, index) => {

    let x = index / 6

    if ((x % 1) >= 0 ){
      x = Math.floor(x)
    }

    let myRowClass = "Row_" + x
    //Set Row #
    let myClass = "biBlock " + myRowClass

    //Set Column #
    let rowNum = index % 6
    let newID = "Col_" + String.fromCharCode(65 + rowNum) + "_" + rowNum

    //Set fill color based on binary value
    let num = Number(item)
    let fill = "transparent"
    let lineFill = "grey"

    if (num === 0 ){
      fill = "black" 
    }
    if (num === 1){
      fill = "black" 
    }
    if (num === 0 && myRowClass === this.state.rowCount){
      fill = "dimgrey"
      lineFill = "black"
    }
    
    if (num === 1 && myRowClass === this.state.rowCount){
      fill = "lightgrey" 
      lineFill = "black"
    }

    let lineStyle = {
     background: lineFill,
    }

    let blockStyle = {
     background: fill,
    }


    let lineVal = Number(item)
      if (lineVal === 0){
       myClass = "biBlock yin " + myRowClass

        return <div className={myClass} 
                    id={newID}
                    style={blockStyle}>
                <div className="line_01"
                     style={lineStyle}></div>
                <div className="line_02"
                     style={lineStyle}></div>
              </div>
        }if (lineVal === 1){
          myClass = "biBlock yang " + myRowClass
          return <div className={myClass} 
                      key={index} 
                      id={newID}
                      style={blockStyle}>
                  <div className="line_00"
                       style={lineStyle}></div>
                  </div>
        }  
    })

    //console.log(this.props)

    let renderHex = this.props.hexBin.map((item, index) => {

      //console.log(item, index)
      if (item === "0"){
        return <div className="yin">
                <div className="lineVal">{item}</div>
                <div className="line_01"></div>
                <div className="line_02"></div>
              </div>
      }
      if (item === "1"){
        return <div className="yang">
                <div className="lineVal">{item}</div>
                <div className="line_00"></div>
                </div>
      }

    })
    
    return (
      <div className="Chart_11">
      
      <div className="Fixed_Key">
        <div className="Key" id="Dec">Decimal</div>
        <div className="Key" id="Bin">Binary</div>
        <div className="Key" id="Pat">Pattern</div>
        <div className="Key" id="Line">Lines</div>
        <div className="Key" id="Hex">Hexagram</div>
      </div>
        
      <div className="Left_Feild">
        
        <div className="Chart_Container2" id="chart_01">
           <div className="Decimal_chart">{decimal}</div>
          <div className="Binary_chart">{table2}</div>
        </div>

        <div className="Chart_Container" id="chart_02">
          <div className="Binary_chart">{table}</div>
        </div>

        <div className="Vertical_Chart">
          <Chart_10 string = {this.props.string}
                    rowNumber = {this.state.rowNumber}
                    hexBin = {this.props.hexBin}
                    setHexBin = {this.props.setHexBin}/>
        </div>

        <div className="hexFeild">
          <input type="text"
            ref="input_Feild"
            className="input_Feild" 
            style={input_Style}
            value={this.state.value} 
            onChange={() => this.handleChange()}/>
          
          <div className="input_Button"
             style={button_Style}
             onClick={() => this.startInputCount()}></div>

            <div className="Display_Chart">
             {renderHex}
             </div>
        </div> 

      </div>

      {this.showSequence()}


      </div>
    )
  }
}

export default Chart_11
