import propTypes from 'prop-types'
function Student(props){
    return(
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Student: {props.IsStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes ={
    name: propTypes.string,
    IsStudent: propTypes.bool,
}

Student.defaultProps ={
    name: "Guest",
    IsStudent: false,
}
export default Student