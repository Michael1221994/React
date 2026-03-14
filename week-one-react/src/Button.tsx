

function Button(){
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        border: "none",
        color: "white",
        padding: "10px 20px",
        cursor: "pointer",
        border-radius: "5px",

    }
    return (
        <button className={"button"} style={styles}>Click Me</button>
    )
}

export default Button