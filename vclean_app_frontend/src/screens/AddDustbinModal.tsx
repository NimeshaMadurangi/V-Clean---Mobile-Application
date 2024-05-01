import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, TextInput, TouchableOpacity } from 'react-native';

interface AddDustbinModalProps {
  isVisible: boolean;
  toggleModal: () => void;
  onSave: (city: string, street: string, fillingLevel: number, smell: number) => void;
}

const AddDustbinModal: React.FC<AddDustbinModalProps> = ({ isVisible, toggleModal, onSave }) => {
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [cityError, setCityError] = useState('');
  const [streetError, setStreetError] = useState('');

  const generateRandomValue = () => {
    // Generate random value between 0 and 100 for filling level
    const fillingLevel = Math.floor(Math.random() * 101);

    // Generate random float value between 0 and 10 for smell
    const smell = Math.random() * 10;

    return { fillingLevel, smell };
  };

  const handleSave = () => {
    // Validate city and street fields
    if (!city.trim()) {
      setCityError('Please enter a city');
      return;
    }
    if (!street.trim()) {
      setStreetError('Please enter a street');
      return;
    }

    // Clear error messages
    setCityError('');
    setStreetError('');

    // Generate random values for filling level and smell
    const { fillingLevel, smell } = generateRandomValue();

    // Call onSave callback with input values and generated values
    onSave(city, street, fillingLevel, smell);

    // Clear input fields after saving
    setCity('');
    setStreet('');

    // Close the modal
    toggleModal();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add Dustbin</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter City"
            value={city}
            onChangeText={setCity}
          />
          {cityError ? <Text style={styles.errorText}>{cityError}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder="Enter Street"
            value={street}
            onChangeText={setStreet}
          />
          {streetError ? <Text style={styles.errorText}>{streetError}</Text> : null}
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontSize: 40,
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#53e88b',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default AddDustbinModal;
