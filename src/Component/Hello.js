

const Hello = (props) => {

    console.log(props);

    // console.log(props.children[0])
    // console.log(props.children[1])


    return(
        <div>
            <h1>Hello World</h1>
            <p>This is a paragraph</p>
            {
                props.children
            }
            <hr />

            
            
        </div>
    )
}

export default Hello;



 {/* {
                name=="Nitin" ? <h1>Hey I am a software Developer</h1> : ""
            }
            {
                name=="Mariya" ? <h1>Hey I am a Frontend Developer</h1> : ""
            } */}