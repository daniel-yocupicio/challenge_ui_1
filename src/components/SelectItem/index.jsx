import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import TextFontFamily from '../TextFontFamily';
import { styles } from './styles';

const icon = require('../../assets/icons/chevrondown.png');

const data = [
  { id: '1', label: 'Apple' },
  { id: '2', label: 'Banana' },
  { id: '3', label: 'Orange' },
  { id: '4', label: 'Pineapple' },
  { id: '5', label: 'Mango' },
];

const SelectItem = ({ title, placeholder = 'Type a text' }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showList, setShowList] = useState(false);

  const handleSearch = (text) => {
    setQuery(text);
    if (text) {
      const filtered = data.filter(item =>
        item.label.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
      setShowList(true); // Mostrar la lista al escribir
    } else {
      setFilteredData([]);
      setShowList(false); // Ocultar la lista si el input está vacío
    }
  };

  const handleSelect = (item) => {
    setQuery(item.label);
    setFilteredData([]);
    setShowList(false); // Ocultar la lista al seleccionar un item
  };

  const handlePress = () => {
    if (!showList) {
      // Si se abre desde el botón, mostrar toda la lista
      setFilteredData(data);
      setShowList(true);
    } else {
      // Si ya está abierta, cerrarla
      setFilteredData([]);
      setShowList(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextFontFamily style={styles.title}>{title}</TextFontFamily>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={query}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={handlePress}>
          <Image source={icon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {showList && filteredData.length > 0 && (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          style={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default SelectItem;
