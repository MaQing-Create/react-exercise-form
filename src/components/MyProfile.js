import React, {Component} from 'react';
import './myProfile.less';
import '../style/MyProfile.css'

class MyProfile extends Component {
    state = {
        name: '',
        gender: 'Male',
        description: 'Description about yourself',
        confirmation: false,
    }

    onChange = (field, event) => {
        this.setState({
            [field]: event.target.value,
        })
    }

    onCheck = (field, event) => {
        this.setState({
            [field]:event.target.checked,
        })
    }

    onSubmit = (event)=>{
        console.log(this.state)
        alert(`Name is ${this.state.name}，Gender is ${this.state.gender}, and description is "${this.state.description}"`)
    }

    render() {
        return (
            <form className="myProfile" onSubmit={this.onSubmit}>
                <label htmlFor="name">Name</label><br/>
                <input type="text" id="name" name='name' value={this.state.name} size="25"
                       onChange={(event) => this.onChange("name", event)}/><br/>
                <label htmlFor="gender">Gender</label><br/>
                <select id="gender" name="gender" value={this.state.gender} onChange={(event) => this.onChange("gender", event)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select><br/>
                <label htmlFor="description">Description</label><br/>
                <textarea id="description" name="description" value = {this.state.description}
                          onChange={(event) => this.onChange("description", event)}/><br/>
                <input type="checkbox" name="confirmation" id="confirmation" checked={this.state.confirmation}
                       onChange={(event) => this.onCheck("confirmation", event)}/>
                <label htmlFor="confirmation">I have read the terms of conduct</label><br/>
                <input type="submit" value="submit" id="submit"
                       disabled={!this.state.name || !this.state.gender || !this.state.description || !this.state.confirmation}/>
            </form>
        );
    }
}

export default MyProfile;


