const intialState = {
  is_start:false,
  left:[],
  leftCount:0,
  right:[],
  rightCount:0,
  origin:[
    { value : 0, is_selected: false },
    { value : 1, is_selected: false },
    { value : 2, is_selected: false },
    { value : 3, is_selected: false },
    { value : 4, is_selected: false },
    { value : 5, is_selected: false },
    { value : 6, is_selected: false },
    { value : 7, is_selected: false },
    { value : 8, is_selected: false },
    { value : 9, is_selected: false },
    { value : 10, is_selected: false },
    { value : 11, is_selected: false },
    { value : 12, is_selected: false },
    { value : 13, is_selected: false },
    { value : 14, is_selected: false },
    { value : 15, is_selected: false },
    { value : 16, is_selected: false },
    { value : 17, is_selected: false },
    { value : 18, is_selected: false },
    { value : 19, is_selected: false },
    { value : 20, is_selected: false },
    { value : 21, is_selected: false },
    { value : 22, is_selected: false },
    { value : 23, is_selected: false },
    { value : 24, is_selected: false }
  ]
};

const COPY = (obj) => {
  if (obj !== undefined && obj !== null) {
    return JSON.parse(JSON.stringify(obj));
  }

  return null;
}

export default (state = intialState, action) => { 
    switch (action.type) {
      case 'SELECT':
        var selectState = COPY(state);
      
        if(action.key.indexOf('left') !== -1){
            selectState.left[action.idx].is_selected = true;
            selectState.right.forEach((v) => {
              if(v.value === action.value){
                v.is_selected = true;
              }
            });
        }else{
          selectState.right[action.idx].is_selected = true;
          selectState.left.forEach((v)=>{
            if(v.value === action.value){
              v.is_selected = true;
            }
          });
        }

        selectState[action.key] = selectState[action.key] + 1 
        return selectState;
      case 'START':
        let startState = COPY(state);
        const shuffle = (state) => {
          const get_zero_or_one = () => {
              return Math.floor((Math.random() * 2))
          }
          const get_random = (max) => {
              if(max <= 1) return 0;
              let v = 1;
              let c = 0;
              while(true){
                  v = 2*v;
                  c = 2*c + get_zero_or_one();
                  if(v >= max){
                      if(c < max) { return(c) }
                      v = v - max;
                      c = c - max;
                  }
              }
          }        
          let getIdx = get_random(state.length);        
          let newArr = [];
          let newLeft = [];
          let newRight = [];
          
          newLeft = newLeft.concat(state.slice(getIdx, state.length),state.slice(0, getIdx));
          newRight = newRight.concat(newLeft.slice(getIdx, newLeft.length),newLeft.slice(0, getIdx));
          newArr.push(newLeft, newRight);
          return newArr;
        }

        const shuffleOrigin = shuffle(startState.origin);
        startState.is_start = action.is_start
        startState.left = shuffleOrigin[0];
        startState.right = shuffleOrigin[1];
        startState.leftCount = 0;
        startState.rightCount = 0;
        return startState;
      default:
        return state
    }
  }