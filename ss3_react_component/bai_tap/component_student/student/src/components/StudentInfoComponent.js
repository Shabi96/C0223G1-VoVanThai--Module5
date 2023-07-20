import React from "react";

class StudentComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr key={this.props.student.id}>
                <td>{this.props.student.id}</td>
                <td>{this.props.student.name}</td>
                <td>{this.props.student.age}</td>
                <td>{this.props.student.address}</td>
            </tr>
        )
    }
};

export default StudentComponent;