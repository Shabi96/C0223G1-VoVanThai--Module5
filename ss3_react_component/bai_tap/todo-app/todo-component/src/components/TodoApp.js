import React from 'react';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: '',
        }
    }

    render() {
        return (
            <>
                <input type='text' onChange={this.handleChange}></input>
                <button onClick={this.handleAddItem}>Add</button>
                {
                    this.state.list.length > 0 ?
                        this.state.list.map( 
                            (todo, index) => (
                                <ul>
                                    <li key={index}>
                                        {todo}
                                    </li>
                                </ul>
                            )
                        ) : <h5>There's nothing to do</h5>
                }
            </>
        )
    }

    handleChange = (event) => {
        if (event.target.value !== '') {
            this.setState((previousState) => {
                return ({
                    item: event.target.value,
                    list: previousState.list
                })
            }
            )
        }
    }

    handleAddItem = () => {
        this.setState((previousState) => {
            if (previousState.item !== '') {
                let newList = [...previousState.list, previousState.item];
                console.log(newList);
                return ({
                    list: newList,
                    item: ''
                })
            } else {
                return ({
                    ...previousState
                })
            }
        }
        )
    }   
}

export default TodoApp;