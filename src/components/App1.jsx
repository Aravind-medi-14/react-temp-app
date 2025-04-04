import  "./App1.css"
export default function App1() {
  const mystyle ={
    backgroundColor:"orange",
    color:"white"
  }
  return (
    <>
      <h3>This is App1</h3>
      <p style={{backgroundColor:'pink',color:'red'}}>This is paragragh </p>
      <p style={mystyle}> This is Paragrapgh</p>
      <p className="external-text">Internal style</p>
    </>
  );
}
