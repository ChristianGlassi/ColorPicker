import  React, { Component } from 'react'
import Map from '../Components/mapButtons'

const background =  document.getElementById('color').style

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color : '',
            colorList : [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }

    handleChange(event) {
        this.setState({color: event.target.value})
    }
    
    handleSubmit(event) {
        background.backgroundColor = this.state.color

        if(background.backgroundColor === '' && this.state.color !== 'white') {

        } else if(this.state.colorList.includes(this.state.color.toLowerCase())) {
            background.backgroundColor = ''

        } else {
            background.backgroundColor = ''
            var colorlistThing = this.state.colorList
            colorlistThing.push(this.state.color.toLowerCase())
            this.setState({colorList: colorlistThing})
        }
        event.preventDefault()
    }

    handleClear() {
        this.setState({colorList: [], color: ''})
    }


    render() {
        return (
            <div id='input-field'>
                <form onSubmit={this.handleSubmit}>
                    <h1 id='color2' style={{backgroundColor: this.state.color, color: 'Black'}} >{this.state.color === ''? "Color's Will Show Here" : " " }</h1>
                    <input value={this.state.color} onChange={this.handleChange} type='text' id='inputtext' placeholder="Input Color" />
                    <input type="submit" value="Button" id='mButton' />
                    <button onClick={this.handleClear} id='mButtontwo'>Clear</button>
                </form>
                <div id='buttonDisplay'>
                    <Map colors={this.state.colorList}/>
                </div>
            </div>
        )
    }
    
}

export default Main