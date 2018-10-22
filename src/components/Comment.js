import React, { Component } from 'react';
import axios from 'axios';

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            text: [],
            input: '',
            editInput: ''
        }
    }
    componentDidMount() {
        axios.get('/api/get-text').then(res => {
            this.setState({
                text: res.data
            });
        })
    }
    updateInput(e) {
        this.setState({
            input: e.target.value
        })
    }
    submit(val) {
        axios.post('/api/get-text', { text: val }).then(res => {
            this.setState({
                text: res.data,
                input: ''
            })
        })
    }

    edit(id) {
        axios.put(`/api/get-text/${id}`, { text: this.state.editInput }).then(res => {
            this.setState({
                text: res.data
                
            })
        })
    }

    editText(e) {
        this.setState({
            editInput: e.target.value
        })
    }

    delete(id) {
        axios.delete(`/api/get-text/${id}`).then(res => {
            this.setState({
                text: res.data
            })
        })
    }


    render() {
        let { text, input } = this.state
        console.log(this.state.text)
        let display = text.map(ele => {
            return (
                <div key={ele.id}>
                    <h1 >{ele.text}</h1>
                    <input onChange={(e) =>
                        this.editText(e)} placeholder="Edit Your Text"></input>
                    <button onClick={() =>
                        this.edit(ele.id)
                    }>Edit</button>
                    <button onClick={() =>
                        this.delete(ele.id)}>Delete</button>
                </div>
            )
        })
        return (
            <div>
                
                <div>
                <input value={this.state.input}placeholder="How's your weather?"onChange={(e) => {
                    this.updateInput(e)
                }
                }></input>
                </div>
                <button onClick={() => {
                    this.submit(input)
                }}>Submit</button>
                

                {display}
                
            </div>
        )
    }
}

export default Comment;