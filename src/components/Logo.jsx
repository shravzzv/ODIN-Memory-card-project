import '../styles/Logo.css'

export default function Logo({ showHome, navigateHome }) {
  return (
    <div className='logo'>
      <img
        src='/marvel_logo.svg'
        alt='the marvel logo with white text against a red background'
        className={!showHome ? 'inGAme' : ''}
        onClick={navigateHome}
      />
      {showHome && <h1>Memory Game</h1>}
    </div>
  )
}
