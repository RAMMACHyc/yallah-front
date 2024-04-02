import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';
import { useAppSelector, useAppDispatch } from '@/store';
import { getCities } from '@/features/city/cityThunks';
import { CityResponse, CityType } from '@/types/city';
import { MaterialIcons } from '@expo/vector-icons';

interface Item {
  label: string;
  value: string;
}


interface DropdownProps {
  onCitySelect: (city: CityType | null) => void;
}

const DropdownComponent: React.FC<DropdownProps> = ({ onCitySelect }) => {
  const [value, setValue] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityType | null>(null);
  const cities = useAppSelector((state: { cities: CityResponse }) => state.cities.cities);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, []);


  useEffect(() => {
    onCitySelect(selectedCity);
  }, [selectedCity, onCitySelect]);

  const renderItem = (item: { label: string; value: string; }, selected?: boolean | undefined) => (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
      {selected && (
        <MaterialIcons style={styles.icon}  name="share-location" size={20} color="red" />
      )}
    </View>
  );
  

  return (
<Dropdown
  style={styles.dropdown}
  placeholderStyle={styles.placeholderStyle}
  selectedTextStyle={styles.selectedTextStyle}
  inputSearchStyle={styles.inputSearchStyle}
  iconStyle={styles.iconStyle}
  
  data={cities?.cities?.map((city) => ({ label: city.name, value: city.id.toString() })) || []}
  search
  maxHeight={300}
  labelField="label"
  valueField="value"
  placeholder="City"
  searchPlaceholder="Search..."
  value={value}
  onChange={(item: Item | null) => {
    if (item) {
      setValue(item.value);
      const selectedCityData = cities?.cities?.find((city) => city.id.toString() === item.value);
      setSelectedCity(selectedCityData || null);
    } else {
      setValue(null);
      setSelectedCity(null);
    }
  }}
  renderLeftIcon={() => (
    <AntDesign style={styles.icon} color="black" name="find" size={20} />
  )}
  renderItem={renderItem}
/>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    width: 145,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 14,
  },
  icon: { marginRight: 5 },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: { flex: 1, fontSize: 16 },
  placeholderStyle: { fontSize: 16 },
  selectedTextStyle: { fontSize: 16 },
  iconStyle: { width: 20, height: 20 },
  inputSearchStyle: { height: 40, fontSize: 16 },
});
