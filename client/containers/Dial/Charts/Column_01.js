  import React, {PropTypes} from 'react'

class Column_01 extends React.Component {
  static displayName = 'Column_01'

  static propTypes = {
    'data': PropTypes.object.isRequired,
    'indexVal': PropTypes.number.isRequired
  }

  constructor() {
    super()
    this.state = {startAngle : 0, selected : false, sliceIndex: 12}
  }

  ComponentWillMount(){
    this.setInterval()
  }

  setStartAngle(){    
    this.setState({startAngle : (this.state.startAngle + 0.8)})
  }

  selectToggle(){    
    console.log("clicked")
    this.setState({selected : !this.state.selected})
  }

  setRowNum(){
    this.props.setRowNum(this.props.indexVal)
    if (this.props.keyVal === true) {
      setInterval(() => this.setStartAngle(), 100);
      console.log("TTT", this.props.keyVal)
    };
    console.log("FFF", this.props.keyVal)
  }

  setRowNull(){
    this.props.setRowNum(null)
  }


  whois(index){
    //console.log("index", me)
    //this.setState({sliceIndex: index})
    this.props.setSliceIndex(index)
    //setInterval(() => this.setStartAngle(), 100);
    //this.selectToggle()
  }

  render() {
    //console.log("DIAL PROPS",this.props)
    let radius = (this.props.data.radius + 5) * 15
    let circumfrence = radius * 2
    let fillColor = "transparent"
    let startAngle = this.state.startAngle
    let endAngle = 360 / 64

    let x1 = radius + radius * Math.cos(Math.PI * startAngle/180)
    let y1 = radius + radius * Math.sin(Math.PI * startAngle/180)     
    let x2 = radius + radius * Math.cos(Math.PI * endAngle/180)
    let y2 = radius + radius * Math.sin(Math.PI * endAngle/180)


    let offset = (500 - circumfrence) / 2
    let position = "translate("+ offset +","+ offset +")"

    let slices = this.props.data.array.map((item, index) => {
      
      let val = "M"+radius+","+radius +" L" + x1 + "," + y1 + " A" + radius + "," + radius + " 0 0,1 " + x2 + "," + y2 + " z"
      
      let cn = "slice " + index 
      let fill = "lightgrey"
      let selected = this.state.selected
      let keyState = this.props.keyState
      let newID = this.props.indexVal
      let rowNum = this.props.rowNum
      //let sliceIndex = this.state.sliceIndex
      let sliceIndex = this.props.sliceIndex

      
      if (item === 1){
        
        if(newID === rowNum ){fill = "yellow"}
        if(keyState === true ){
          fill = "red"
          if(sliceIndex === index ){fill = "white"}
        }
        if(keyState === false ){
          fill = "white"
          if(sliceIndex === index ){fill = "yellow"}
        }
        
        
      }

      if (item === 0){
        if(newID === rowNum ){fill = "grey"}
        if(keyState === true){
          fill = "blue"
          if( sliceIndex === index ){
            fill = "black"
          }
        }

        
        if(keyState === false ){
          fill = "black"
          if( sliceIndex === index ){
            fill = "blue"
          }
        }
        
        
      }


      // if (item === 1 && selected === true ){fill = "red"}
      // if (item === 0 && selected === true ){fill = "blue"}
     
      let style = {
        background: fill
      }

      let angle =  (endAngle ) * index 
      let rotate = "rotate("+ angle +" "+radius+" "+radius+")" 

      let rotateTxt = "rotate("+ (angle + 130) +" "+(radius )+" "+(radius)+")" 
      


      return <svg>
      <path className={cn} key={index} id={newID} d={val} fill={fill} transform={rotate} 
         onClick= {() => this.whois(index)}/>
        <text fontFamily="andale mono" fontSize="10" x="0" y="0" fill="yellow" text-anchor="middle" transform={rotate}>
        </text>
      </svg>
    })
   
    return (

      <g height={radius} 
         width={radius} 
         transform={position} 
         id={this.props.indexVal}
         onMouseOver= {() => this.setRowNum()}
         onMouseOut= {() => this.setRowNull()}>

        <circle id={this.props.indexVal} 
                cx="250" 
                cy="250" 
                r={radius} 
                fill={fillColor}/>

        {slices}
      </g>


    )
  }
}

export default Column_01
