import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';
import { useAppSelector, useAppDispatch } from '@/store';
import { getCities } from '@/features/city/cityThunks';
import { CityResponse } from '@/types/city';

interface Item {
  label: string;
  value: string;
}

const DropdownComponent: React.FC = () => {
  const [value, setValue] = useState<string | null>(null);
  const cities = useAppSelector((state: { cities: CityResponse }) => state.cities.cities);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, []);

  const renderItem = (item: { label: string; value: string; }, selected?: boolean | undefined) => (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
      {selected && (
        <AntDesign style={styles.icon} color="black" name="find" size={20} />
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
    } else {
      setValue(null);
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
    width: 140,
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
