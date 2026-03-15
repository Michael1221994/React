import propTypes from 'prop-types'
function Student(props){
    return(
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student: {props.IsStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes ={
    name: propTypes.string,
    age: propTypes.number,
    IsStudent: propTypes.bool,
}

Student.defaultProps ={
    name: "Guest",
    age: 0,
    IsStudent: false,
}
export default Student