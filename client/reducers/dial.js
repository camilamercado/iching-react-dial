export default function dial(
	state = {
		binary: [{}, {}], 
		binary01: [{}, {}], 
		hasData: false,
		selected: [{}, {}],
		string: [],
		hexBin: ['0','0','0','0','0','0'],
		rowNum: null,
		sliceIndex: null
	}, action) {
	switch (action.type) {

		case 'SET_DIAL_DATA':

		return {
			...state, 
			binary: action.data.data00,
			binary01: action.data.data01,
			selected: action.data.selected,
			string: action.data.strungOut,
			hasData: true

		} 

		case 'SET_HEX_BINARY':

		return {
			...state, hexBin: action.data
		}

		case 'SET_ROW_NUM':

		return {
			...state, rowNum: action.data
		}

		case 'SET_SLICE_INDEX':

		return {
			...state, sliceIndex: action.data
		}


	  default:
      return state
	}
}
