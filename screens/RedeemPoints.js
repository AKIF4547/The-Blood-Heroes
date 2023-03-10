import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

const RedeemPoints = () => {
  const [totalPoints, setTotalPoints] = useState(100);

  const handleRedeemPress = () => {
    if (totalPoints < 10) {
      Alert.alert('Not enough points', 'You need at least 10 points to redeem');
    } else {
      setTotalPoints(totalPoints - 10);
      Alert.alert('Points redeemed', 'You have redeemed 10 points');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>Total Points: {totalPoints}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRedeemPress}>
        <Text style={styles.buttonText}>Redeem 10 Points</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointsContainer: {
    marginBottom: 20,
  },
  pointsText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default RedeemPoints;
