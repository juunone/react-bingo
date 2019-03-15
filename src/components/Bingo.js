import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Plate from './Plate';
import Button from './Button';

class Bingo extends Component{
    render(){
        return(
            <Fragment>
                <Button />
                <Plate />
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    
})

const mapStateToProps = (state) => {
    let obj = {};
    for(let i in state.bingoReducer){
         if(state.bingoReducer.hasOwnProperty(i)){
            if(Object.keys(state.bingoReducer[i]).length){
                obj[i] = state.bingoReducer[i] ? state.bingoReducer[i] : {};
            }else{
                obj[i] = state.bingoReducer[i]
            }
         }
    }
    return obj;
};


export default connect(mapStateToProps,mapDispatchToProps)(Bingo);
  