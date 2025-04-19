import React, { FC, useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, Image } from 'react-native';

import TextFontFamily from '../TextFontFamily';
import { styles } from './styles';

const icon = require('../../assets/icons/chevrondown.png');

interface ItemType {
  id: string,
  label: string,
}

interface Props {
  title: string,
  placeholder: string,
  data: ItemType[],
}


const SelectItem : FC<Props> = ({ title, placeholder = 'Type a text', data = [] }) => {
    const [query, setQuery] = useState<string>('');
    const [filteredData, setFilteredData] = useState<ItemType[]>([]);
    const [showList, setShowList] = useState<boolean>(false);

    const handleSearch = (text : string) => {
      setQuery(text);
      if (text) {
        const filtered = data.filter(item =>
          item.label.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filtered);
        setShowList(true);
      } else {
        setFilteredData([]);
        setShowList(false);
      }
    };

    const handleSelect = (item : ItemType) => {
      setQuery(item.label);
      setFilteredData([]);
      setShowList(false);
    };

    const handlePress = () => {
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
          placeholderTextColor={'#181725'}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={handlePress}>
          <Image source={icon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {showList && filteredData.length > 0 && (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
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
