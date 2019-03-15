import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Button extends Component{
    _startGame = (is_start) => {
        this.props._handleStartGame(is_start);
    }

    render(){
        return(
            <Fragment>
                <header>
                    <button className={this.props.is_start !== true ? "game__start" : "game__restart"} 
                        onClick={()=>{this._startGame(true)}}>
                        {this.props.is_start !== true ? '게임 시작' : '게임 재시작'}
                    </button>
                </header>
            </Fragment>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    _handleStartGame: (is_start) => { dispatch(actions.startGame(is_start)) }
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


export default connect(mapStateToProps,mapDispatchToProps)(Button);
  