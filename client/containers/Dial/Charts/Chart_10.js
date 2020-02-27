import React, {PropTypes} from 'react'

class Chart_10 extends React.Component {
  static displayName = 'Chart_10'

  static propTypes = {
    'binary' : PropTypes.array.isRequired,
    'selected' : PropTypes.array.isRequired
  }

  render() {

    //console.log(this.props)
    let rowNumber = this.props.rowNumber

    let string = this.props.string
    var hexArr = string.match(/.{1,6}/g);
    
    let hexBlock = hexArr.map((item, index) => {
      var rev = item.split('').sort(()=>1).join('')
      var hexStr = rev.match(/.{1}/g);

       let lineFill = "black"
      if(rowNumber === index){lineFill = "red"}

      let lineStyle = {
        background: lineFill
      }

      let hex = hexStr.map((item, index) => {
      let lineVal = Number(item)


        if (lineVal === 0){
          return <div className="yin">
                  <div className="line_01" 
                        style={lineStyle}></div>
                  <div className="line_02"
                        style={lineStyle}></div>
                </div>
        }if (lineVal === 1){
          return <div className="yang"
                      style={lineStyle}></div>
        }

      })

      let fill = "transparent"
      if(rowNumber === index){
        fill = "red"
        //console.log("PROPS", this.props)
        // this.props.setHexBin(hexStr)
      }

      let hexStyle = {
        background: fill
      }

      return <div className="hexBlock">
              <div className="hexagram">
                {hex}
              </div>
            </div>

    })

    return (
      <div className="Chart_10">
        <div className="Content">
          <div className="hexChart">
          {hexBlock}
          </div>
        </div>
      </div>
    )
  }
}

export default Chart_10
