import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    }

    render() {
        return(
           <div>
               <p>U are on the Exercise List component!</p>
           </div> 
        );
    }
}