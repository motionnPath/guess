import './index.css';
import Ligne from "./ligne";
import React from "react";



export default class App extends React.Component{
    constructor(){
        super();
        this.state = {

        }

    }
    render(){
        return(
            <div>
                
            <div id='body'>

                <div className="bigContainer">

                    <h1 id='title'>Guess</h1>
                    <Ligne arr={[0,1,2,3,4]}        />
                    <Ligne arr={[5,6,7,8,9]}        />
                    <Ligne arr={[10,11,12,13,14]}   />
                    <Ligne arr={[15,16,17,18,19]}   />
                    <Ligne arr={[20,21,22,23,24]}   />
                    <a href="" target='_self'><h1>Reset</h1></a>    
                </div>
                
                <div className="Legend">
                    <div className='LegendChild'><div className="yellow s"></div><h3>Wrong index</h3></div>
                    <div className='LegendChild'><div className="orange s"></div><h3>Completely wrong!</h3></div>
                    <div className='LegendChild'><div className="green  s"></div><h3>Right index</h3></div>
                </div>
                
                <h5>Happy Playing !</h5>
            </div>
                
                
            </div>
        )
    }
}