import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import IconButton from './IconButton';
import color from '../styles/color';

type Props = {
  value?: string;
  onChangeText?: (text: string) => void;
};

const SearchInput: FC<Props> = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={28} color="#3ba5b9" />
      <TextInput
        style={styles.input}
        value={value}
        placeholder={'Search'}
        onChangeText={onChangeText}
        placeholderTextColor="#999"
      />
       <IconButton
          icon="sliders"
          roundness="small"
          size="big"
          iconColor="#3ba5b9"
          style={{backgroundColor: color.gray}}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'white',
    height: 50,
    
  },
  input: {
    marginLeft: 10,
    fontSize: 20,
    color: '#333',
    width: '70%',
  },
});

export default SearchInput;