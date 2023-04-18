import "./StartScreen.css";

const GameStart = ({ startGame }) => {
  return (
    <div>
      <form>
        <label className='usuario'>
          User:
          <input type="text" />
        </label>
        <label className='senha'>
          Password:
          <input type="password" />
        </label>
        <button onClick={startGame}>Entrar</button>
      </form>
    </div>



  )
};

export default GameStart;