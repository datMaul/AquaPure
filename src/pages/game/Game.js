import "./game.css";
export default function Gmae() {

  return (
  <div className="body">
    <div className="green" ></div>
    <div className="red"></div>
    <div className= "card">
        <h1 className= "question">test</h1>
        <div className= "button-group">
            <button className= "answer-button" data-number="1">ans1</button>
            <button className= "answer-button" data-number="2">ans2</button>
            <button className= "answer-button" data-number="3">ans3</button>
            <button className= "answer-button" data-number="4">ans4</button>
        </div>
        <div className="score">Score 0</div>
    </div>
    <script src="gamerunning.js"></script>
  </div>
  );
}
