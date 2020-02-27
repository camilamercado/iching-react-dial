
export function setBinary(data) {
  return (dispatch) => (
    dispatch({'type': 'SET_DIAL_DATA', 'data': data})
  )
}

export function setHexBin(num) {
  return (dispatch) => (
  	//console.log("SETTING HEX BIN", num ),
    dispatch({'type': 'SET_HEX_BINARY', 'data': num})
  )
}

export function setRowNum(num) {
  return (dispatch) => (
  	//console.log("SETTING ROW NUM", num ),
    dispatch({'type': 'SET_ROW_NUM', 'data': num})
  )
}

export function setSliceIndex(num) {
  return (dispatch) => (
  	console.log("SETTING SLICE INDEX", num ),
    dispatch({'type': 'SET_SLICE_INDEX', 'data': num})
  )
}





