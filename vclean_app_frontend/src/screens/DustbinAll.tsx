import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Dustbin, { DustbinData } from './Dustbin';
import AddDustbinModal from './AddDustbinModal';

interface DustbinAllProps {
  navigation: any;
}

const DustbinAll: React.FC<DustbinAllProps> = ({ navigation }) => {
  const [dustbins, setDustbins] = useState<DustbinData[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddDustbin = () => {
    setIsModalVisible(true);
  };

  const handleSaveDustbin = (city: string, street: string) => {
    const fillingLevel = Math.floor(Math.random() * 101);
    const smell = Math.random() * 10;

    const newDustbin: DustbinData = {
      name: `Dustbin ${dustbins.length + 1}`,
      image: require('.././assets/images/dustbin1.png'),
      route: `Dustbin${dustbins.length + 1}`,
      city,
      street,
      fillingLevel,
      smell: smell.toString(),
    };

    setDustbins([...dustbins, newDustbin]);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Button to toggle the AddDustbinModal */}
      <Button title="Add Dustbin" onPress={handleAddDustbin} />

      {/* Dustbin component */}
      <Dustbin dustbins={dustbins} navigation={navigation} onAddDustbin={function (): void {
              throw new Error('Function not implemented.');
          } } />

      {/* AddDustbinModal */}
      <AddDustbinModal isVisible={isModalVisible} toggleModal={() => setIsModalVisible(!isModalVisible)} onSave={handleSaveDustbin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default DustbinAll;