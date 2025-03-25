import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, Image, Platform, UIManager, LayoutAnimation } from 'react-native';
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

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


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
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShowList(true);
      } else {
        setFilteredData([]);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShowList(false);
      }
    };

    const handleSelect = (item) => {
      setQuery(item.label);
      setFilteredData([]);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setShowList(false);
    };

    const handlePress = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      if (!showList) {
        setFilteredData(data);
        setShowList(true);
      } else {
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
          scrollEnabled={false}
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
