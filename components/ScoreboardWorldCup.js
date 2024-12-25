import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const ScoreboardWorldCup = () => {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);
  const [winner, setWinner] = useState("");

  const increaseScore = (team) => {
    if (team === "A") {
      const newScore = scoreTeamA + 1;
      setScoreTeamA(newScore);
      if (newScore === 10) {
        setWinner("🏆 Brazil Wins!");
      }
    } else if (team === "B") {
      const newScore = scoreTeamB + 1;
      setScoreTeamB(newScore);
      if (newScore === 10) {
        setWinner("🏆 Argentina Wins!");
      }
    }
  };

  const decreaseScore = (team) => {
    if (team === "A" && scoreTeamA > 0) {
      setScoreTeamA(scoreTeamA - 1);
    } else if (team === "B" && scoreTeamB > 0) {
      setScoreTeamB(scoreTeamB - 1);
    }
  };

  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
    setWinner("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ World Cup Scoreboard 🏆</Text>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/FIFA_World_Cup_2022_Logo.svg/1024px-FIFA_World_Cup_2022_Logo.svg.png",
        }}
        style={styles.logo}
      />

      {winner !== "" && (
        <View style={styles.winnerContainer}>
          <Text style={styles.winnerText}>{winner}</Text>
        </View>
      )}

      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>🇧🇷 Brazil</Text>
        <Text style={styles.score}>{scoreTeamA}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => increaseScore("A")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => decreaseScore("A")}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>🇦🇷 Argentina</Text>
        <Text style={styles.score}>{scoreTeamB}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => increaseScore("B")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => decreaseScore("B")}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>🔄 Reset Match</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#004080",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 20,
  },
  winnerContainer: {
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  winnerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  teamContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#004080",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    minWidth: 50,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  resetButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ScoreboardWorldCup;
