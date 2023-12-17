import Hello from "./Component/Hello";
import Counter from "./Component/Counter";

const App=()=> {
  return (
    <div>
        <Hello>
           <p> I am Aditya</p>
           <pre> I am a software Developer</pre>
        </Hello>


        <Hello> 
          <div>
            <h1> I am Girish</h1>
          </div>

        </Hello>


        <Hello> 
            <Counter />
        </Hello>
        
    </div>
  );
}




export default App;




