import { useState } from 'react';

const emotions = [
  { label: "i'm happy", emoji: "😄" },
  { label: "i'm sad", emoji: "😢" },
  { label: "i'm angry", emoji: "😠" },
  { label: "i'm scared", emoji: "😱" },
  { label: "i'm confused", emoji: "😕" },
  { label: "i'm proud", emoji: "😌" }
];

const EmotionMatch = () => {
  const [currentEmotion, setCurrentEmotion] = useState(getRandomEmotion());
  const [ feedback, setFeedback] = useState(null);
  
  function getRandomEmotion() {
    return emotions[Math.floor(Math.random() * emotions.length)];
  }

  function handleEmojiClick(clickEmoji) {
    if (clickEmoji == currentEmotion.emoji) {
      setFeedback('✅');
    } else {
      setFeedback('❌');
    }

    setTimeout(() => {
      setCurrentEmotion(getRandomEmotion());
      setFeedback(null);
    }, 1000);
  }
  const shuffledEmojis = [...emotions].sort(() => Math.random() - 0.5);

  return (
    <div style={{textAlign: 'center', marginTop: '100px'}}>
      <h2>{currentEmotion.label}</h2>

      {feedback && <p style={{ fontSize: '2rem'}}>{feedback}</p>}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px'}}>
        {shuffledEmojis.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleEmojiClick(item.emoji)}
            style={{
              fontSize: '2rem',
              padding: '10px 20px',
              border: feedback && item.emoji === currentEmotion.emoji ? '2px solid green' : '1px solid #ccc',
              borderRadius: '10px',
            }}
            >
              {item.emoji}
              </button> 
            ))}       
      </div>
    </div>
  );
};

export default EmotionMatch;

/*
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
*/