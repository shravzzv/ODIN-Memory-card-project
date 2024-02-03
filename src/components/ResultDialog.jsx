import './../styles/ResultDialog.css'

export default function ResultDialog({ isWin, showDialog, handleRestart }) {
  return (
    <dialog open={showDialog}>
      {isWin ? <h2>Congratulations! You won.</h2> : <h2>You Lost!</h2>}
      <button onClick={handleRestart}>Restart</button>
    </dialog>
  )
}
