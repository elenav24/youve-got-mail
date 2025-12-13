import { useState } from 'react'
import Envelope from './Envelope'
import Confetti from 'react-confetti'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleEnvelopeClick = () => {
    setIsOpen(true)
    setShowConfetti(true)
    
    // Stop confetti after 10 seconds
    setTimeout(() => {
      setShowConfetti(false)
    }, 10000)
  }

  return (
    <div className="app">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
        />
      )}
      {!isOpen && <Envelope onClick={handleEnvelopeClick} />}
      {/* {!isOpen ? (
        <Envelope onClick={handleEnvelopeClick} />
      ) : (
        // <BirthdayMessage />
      )} */}
    </div>
  )
}

export default App

