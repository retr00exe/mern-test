import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => {
    return(
    <tr>
        <td>{props.exercises.username}</td>
        <td>{props.exercises.description}</td>
        <td>{props.exercises.duration}</td>
        <td>{props.exercises.date.substring(0,10)}</td>
        <td>
            <Link to={`/edit/${props.exercises._id}`} >Edit</Link> | <a href="#" onClick={() => props.deleteExercise(props.exercises._id)}>Delete</a>
        </td>
    </tr>
    )
}

export default class ExerciseList extends Component {
    constructor(props) {
        super(props); 
        this.deleteExercise = this.deleteExercise.bind(this);
        this.state = {exercises: []};
    }
 
    componentDidMount() {
        axios.get(`http://localhost:5000/exercises/`)
         .then(res => {
             this.setState({exercises: res.data})
         })
         .catch(err => console.log(`Error: ${err}`));
    }

    deleteExercise(id) {
        axios.delete(`http://localhost:5000/exercises/${id}`)
         .then(res => console.log(res.data))
         .catch(err => console.log(`Error: ${err}`));

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        });
    }

    exercisesList() {
        return this.state.exercises.map(currentExercise => {
            return <Exercise exercises={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id} />
        });
    }

    render() {
        return(
           <div id="body">
               <h3>Logged Exercises</h3>
               <table className="table">
                   <thead className="thead-light">
                       <tr>
                           <th>Username</th>
                           <th>Description</th>
                           <th>Duration</th>
                           <th>Date</th>
                           <th>Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.exercisesList()}
                   </tbody>
               </table>
           </div> 
        );
    }
}