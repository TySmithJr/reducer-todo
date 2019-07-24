
import React, { Component } from 'react';

class UserForm extends Component {
    state= {
        info: ""
    }
    render() {
        // created a change handler to target the names and values
        const handleChanges = (e) => {
            this.setState({[e.target.name]: e.target.value})
        }
        // created a submit function to set the state and to pass props from app.js (UserForm)
        const submit = (e) => {
            e.preventDefault();
            this.setState({info:""})
            this.props.add_item(e,this.state.info)
        }
        return (

            <div> 
                {/* put an onSubmit on the form */}
                <form onSubmit={submit}>
                    <input autoComplete="off" type="text" name="info" placeholder="todos" value={this.state.info} onChange={handleChanges}/>

                    
                </form>
            </div>
        );
    }
}

export default UserForm;