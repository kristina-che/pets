import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: true,
        title: 'Yo!'
    }

    activateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return(
            <div>
                {!this.state.editMode &&
                    <div>
                        <input autofocus={true} value={this.state.title} />
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode }>{this.state.title}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;