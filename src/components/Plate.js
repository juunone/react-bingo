import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Plate extends Component{
    _selectPlate (idx,value,key,flag) {
        if(flag !== true){
            if(key === "leftCount"){
                if(this.props.leftCount > this.props.rightCount){
                    return alert('잘못된 차례입니다.');
                }
            }else if(key === "rightCount"){
                if(this.props.leftCount < this.props.rightCount){
                    return alert('잘못된 차례입니다.');
                }
            }
    
            this.props._handleSelectPlate(idx, value, key);
        }else{
            return alert('이미 선택된 영역입니다.')
        }
    }

    _makePlate(state, key) {
        if(state.length){
            let stateMerge = [];
            let stateHtml = [];

            for(let i = 0; i < state.length; i++){
                if((i+1) % 5 === 0){
                    stateHtml.push(
                        <li className={state[i].is_selected ? "selected" : undefined} 
                            key={state[i].value}
                            onClick={() => {state[i].is_selected ? this._selectPlate(i,state[i].value,key,true) : this._selectPlate(i,state[i].value,key,false) }}
                        >
                        {state[i].value}
                        </li>
                    );
                    stateMerge.push(<ul key={i}>{stateHtml}</ul>)
                    stateHtml = [];
                }else{
                    stateHtml.push(
                        <li className={state[i].is_selected ? "selected" : undefined} 
                            key={state[i].value}
                            onClick={() => {state[i].is_selected ? this._selectPlate(i,state[i].value,key,true) : this._selectPlate(i,state[i].value,key,false) }}
                        >
                        {state[i].value}
                        </li>
                    );
                }
            }
            return stateMerge;
        }        
    }

    render(){
        return(
            <Fragment>
                <main>
                    {this.props.is_start === false ? ( 
                        <section><p>게임을 시작해주세요</p></section>
                    ) : ( 
                        <Fragment>
                            <section className={"plate"}>
                                <h3>Left</h3>
                                {this._makePlate(this.props.left,"leftCount")}
                            </section>
                            <section className={"plate"}>
                                <h3>Right</h3>
                                {this._makePlate(this.props.right,"rightCount")}
                            </section>
                        </Fragment>
                    )}
                </main>
            </Fragment>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    _handleSelectPlate: (idx, value, key) => { dispatch(actions.selectPlate(idx, value,key)) }
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


export default connect(mapStateToProps,mapDispatchToProps)(Plate);
  