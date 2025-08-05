import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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

export default function EmotionMatch() {
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
    <View style={styles.container}>
      <Text style={styles.prompt}>{round.prompt}</Text>
      <View style={styles.emojiContainer}>
        {round.options.map((emoji) => (
          <TouchableOpacity
            key={emoji}
            onPress={() => handleGuess(emoji)}
            style={styles.button}
          >
            <Text style={styles.emoji}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {feedback !== "" && <Text style={styles.feedback}>{feedback}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  prompt: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 16,
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 8,
  },
  emoji: {
    fontSize: 32,
  },
  feedback: {
    fontSize: 18,
    color: '#333',
  },
});
