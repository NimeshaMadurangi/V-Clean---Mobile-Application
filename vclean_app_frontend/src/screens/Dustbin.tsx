import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

export interface DustbinData {
  name: string;
  image: any;
  route: string;
  city: string;
  street: string;
  fillingLevel: number;
  smell: string;
}

interface DustbinProps {
  dustbins: DustbinData[];
  onAddDustbin: () => void;
  navigation: any;
}

const Dustbin: React.FC<DustbinProps> = ({ dustbins, onAddDustbin, navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {dustbins.map((dustbin, index) => (
          <View key={index} style={styles.box}>
            <View style={styles.inner}>
              <View style={styles.dustbinInfo}>
                <Image source={dustbin.image} style={styles.image} />
                <Text style={styles.text1}>{`Filling Level: ${dustbin.fillingLevel}%`}</Text>
                <View style={styles.progressContainer}>
                  <Progress.Bar
                    progress={dustbin.fillingLevel / 100}
                    width={100}
                    height={10}
                    color={dustbin.fillingLevel > 75
                      ? 'red'
                      : dustbin.fillingLevel > 25
                      ? 'green'
                      : '#FFD700'}
                  />
                </View>
                <Text style={styles.text1}>{`Smell: ${dustbin.smell}`}</Text>
                <View style={styles.progressContainer}>
                    <Progress.Bar
                      progress={dustbin.smell === 'Good' ? 0.25 : dustbin.smell === 'Medium' ? 0.5 : 0.75}
                      width={100}
                      height={10}
                      color={
                        dustbin.smell === 'Good'
                          ? 'green'
                          : dustbin.smell === 'Medium'
                          ? '#FFD700'
                          : 'red'
                      }
                    />
                  </View>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textname}>{dustbin.name}</Text>
                <Text style={styles.text}>{`City: ${dustbin.city}`}</Text>
                <Text style={styles.text}>{`Street: ${dustbin.street}`}</Text>
                <Text style={styles.text}>{`Status: ${dustbin.fillingLevel > 75 ? 'Bad' : 'Good'}`}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.buttonedit} onPress={() => navigation.navigate('')}>
                    <Text style={styles.buttonText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttondelete} onPress={() => navigation.navigate('')}>
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollView: {
    flexGrow: 1,
  },
  box: {
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginVertical: 10,
  },
  inner: {
    flexDirection: 'row', // Align children horizontally
    alignItems: 'center', // Vertically center children
    justifyContent: 'space-between', // Add space between buttons
  },
  dustbinInfo: {
    marginRight: 20,
    marginLeft: 10,
  },
  progressContainer: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1, // Take remaining space
    marginLeft: 20,
  },
  textname: {
    marginBottom: 5,
    marginTop: 5,
    fontSize: 28,
    fontWeight: 'bold',
  },  
  text: {
    marginBottom: 5,
    marginTop: 5,
    fontSize: 24,
  },
  text1: {
    marginBottom: 5,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons in a row
    alignItems: 'center', // Vertically center buttons
  },
  buttonedit: {
    marginHorizontal: 5, // Add space between buttons
    paddingVertical: 10, // Adjust button padding
    paddingHorizontal: 10, // Adjust button padding
    borderRadius: 5, // Adjust button border radius
    backgroundColor: '#53e88b', // Button background color
  },
  buttondelete: {
    marginHorizontal: 5, // Add space between buttons
    paddingVertical: 10, // Adjust button padding
    paddingHorizontal: 10, // Adjust button padding
    borderRadius: 5, // Adjust button border radius
    backgroundColor: '#f44336', // Button background color
  },
  buttonText: {
    color: '#FFFFFF', // Button text color
    fontWeight: 'bold', // Button text bold
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 25,
  },
});

export default Dustbin;
