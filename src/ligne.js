import React from "react";

let randomi = Math.random();


const func = (arr,w) => {
        
    let result = [];
    for(let i = 0; i<5; i++){
        
        if (arr[i]===w[i]){
            result.push(1);
        }
        else if (w.match(arr[i]) !== null && w.match(arr[i]).index !== i){
            result.push(-1);
        }
        else{
            result.push(0);
        }
    }
    return result;
}
const sum = (arr)=>{

    let count = 0;
    for(let i=0; i<5; i++){
        count +=arr[i];
    }
    return count;
}


export default class Ligne extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            guess:'HELLO',
            input:[],
            sum:0,
        }
        this.handelChange = this.handelChange.bind(this);
    }
    handelChange (l) {

        this.setState({
            input:[...this.state.input,l.target.value.toUpperCase()]
        });
        
    }
    componentWillMount(){
        fetch('https://api.frontendexpert.io/api/fe/wordle-words')
        .then(d => d.json())
        .then(d=>{
            this.setState({
                guess:d[Math.floor(randomi*d.length)]
            })
        })

    }
    
    render (){

        console.log(this.state.guess)
        
        if(this.state.input.length === 5){

            for(let i = 0; i<5; i++){
                
                if(func(this.state.input,this.state.guess)[i]=== 0){
                    document.getElementById(this.props.arr[i]).className ='orange';
                }
                else if(func(this.state.input,this.state.guess)[i]===1){
                    document.getElementById(this.props.arr[i]).className ='green';

                }else{
                    document.getElementById(this.props.arr[i]).className ='yellow';
                }
            }
        }
        
      return(
        <div>
            
                <div className="container">
                    <input style={{'transitionDelay':'0.0s'}} type={'text'} maxLength='1' id={this.props.arr[0]} onChange={this.handelChange} />
                    <input style={{'transitionDelay':'0.4s'}} type={'text'} maxLength='1' id={this.props.arr[1]} onChange={this.handelChange} />
                    <input style={{'transitionDelay':'0.8s'}} type={'text'} maxLength='1' id={this.props.arr[2]} onChange={this.handelChange} />
                    <input style={{'transitionDelay':'1.2s'}} type={'text'} maxLength='1' id={this.props.arr[3]} onChange={this.handelChange} />
                    <input style={{'transitionDelay':'1.6s'}} type={'text'} maxLength='1' id={this.props.arr[4]} onChange={this.handelChange} />
                </div>

                {(sum(func(this.state.input,this.state.guess))===5) && <h3 id="congratuation">Congras !! You found the right Word ! </h3>}
            
        </div>
      )
    }
}

