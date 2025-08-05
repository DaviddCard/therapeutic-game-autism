import { useState } from 'react';

const rounds = [
  {
    prompt: "i'm sad",
    answer: "😢",
    options: ["😢", "😡", "😀"]
  },
  {
    prompt: "i'm happy",
    answer: "😀",
    options: ["😐", "😢", "😀"]
  }
];

function EmotionMatch() {
  const [roundIndex, setRoundIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  const round = rounds[roundIndex];

  const handleGuess = (emoji) => {
    if (emoji === round.answer) {
      setFeedback("✅ nice job!");
      setTimeout(() => {
        setFeedback("");
        setRoundIndex((prev) => (prev + 1) % rounds.length);
      }, 1000);
    } else {
      setFeedback("❌ try again");
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{round.prompt}</h2>
      <div style={{ fontSize: '2rem', margin: '1rem' }}>
        {round.options.map((emoji) => (
          <button
            key={emoji}
            onClick={() => handleGuess(emoji)}
            style={{
              fontSize: '2rem',
              margin: '0.5rem',
              padding: '1rem',
              borderRadius: '12px',
              border: '2px solid #ccc'
            }}
          >
            {emoji}
          </button>
        ))}
      </div>
      {feedback && <p>{feedback}</p>}
    </div>
  );
}

export default EmotionMatch;
