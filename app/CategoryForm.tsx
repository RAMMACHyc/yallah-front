import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HsvColor } from 'react-native-color-picker/dist/typeHelpers';
import PickerColor from '@/components/PickerColor';
import { createCategory } from '@/features/category/categoryThunks';
import { useAppDispatch } from '@/store';
import { CategoryType } from '@/types/category';


interface CategoryFormProps {
  onSubmit: (category: Category) => void;
}

interface Category {
  name: string;
  IconName: string;
  color: string;
}

const CategoryForm: React.FC<CategoryFormProps> = () => {
  const [category, setCategory] = useState({
    name: '',
    IconName: '',
    color: '#6ecd83',
  });

  const [showColorPicker, setShowColorPicker] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    const newCategory: CategoryType = {
      name: category.name,
      IconName: category.IconName,
      color: category.color,
    };
    dispatch(createCategory(newCategory));
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Category Name</Text>
      <TextInput
        style={styles.input}
        value={category.name}
        onChangeText={(name) => setCategory((prev) => ({ ...prev, name }))}
        placeholder="Enter category name"
      />

      <Text style={styles.label}>Icon Name</Text>
      <View >
        <TextInput
          style={styles.input}
          value={category.IconName}
          onChangeText={(IconName) => setCategory((prev) => ({ ...prev, IconName }))}
          placeholder="Enter icon name"
        />
        {/* <Ionicons name={'apps'} size={24} color={color} /> */}
      </View>

      <Text style={styles.label}>Color</Text>
      <TouchableOpacity
        style={[styles.colorPreview, { backgroundColor: '#6ecd83' }]}
        onPress={() => setShowColorPicker(!showColorPicker)}
      />
    

      {showColorPicker && (
        <PickerColor  />
      )}
     

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Category</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '90%',
    maxWidth: 400,

  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,

    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
//   iconContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
  colorPreview: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CategoryForm;