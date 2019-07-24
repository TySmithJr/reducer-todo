
import React, { Component } from 'react';

class UserForm extends Component {
    state= {
        info: ""
    }
    render() {
        const handleChanges = (e) => {
            this.setState({[e.target.name]: e.target.value})
        }
        const submit = (e) => {
            e.preventDefault();
            this.setState({info:""})
            this.props.add_item(e,this.state.info)
        }
        return (

            <div>
                <form onSubmit={submit}>
                    <input autoComplete="off" type="text" name="info" placeholder="todos" value={this.state.info} onChange={handleChanges}/>

                    
                </form>
            </div>
        );
    }
}

export default UserForm;