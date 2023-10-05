// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> MERILYN HUNT </h1>
        <h3>My interests</h3>
        <div className="Row">
          <div className="Column">
            <ul>
              <li>Music</li>
              <li>Coding</li>
              <li>Dance</li>
              <li>Video games</li>
              <li>Making games</li>
              <li>Hanging out with friends</li>
            </ul>
          </div>
          <div className="Column">
          <ul>
              <li>Hiking</li>
              <li>Gym</li>
              <li>Clubbing</li>
              <li>Longboarding</li>
              <li>Running</li>
              <li>Gardening</li>
            </ul>
          </div>
        </div>
        <div className="Contact-form">
          <form>
            <label htmlFor="question" className="Form-padding">Question</label>
            <input type="text" name="question" id="question" className="Form-input-align" placeholder="Ask a question"></input>
            <br></br>
            <label htmlFor="name" className="Form-padding">Name</label>
            <input type="text" name="name" id="name" className="Form-input-align" placeholder="Enter your name"></input>
            <br></br>
            <label htmlFor="email" className="Form-padding">Email</label>
            <input type="email" name="email" id="email" className="Form-input-align" placeholder="Enter your email"></input>
            <br></br>
            <input type="submit" name="submit" id="submit"></input>
            <br></br>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App; 