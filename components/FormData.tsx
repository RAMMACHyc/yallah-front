import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useAppDispatch } from "@/store";
import { createPost } from "@/features/post/postThunks";
import { PostType } from "@/types/post";
import { useForm, Controller } from "react-hook-form";

const FormData: React.FC = () => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm<PostType>({
    defaultValues: {
      id: "",
      title: "",
      file: "",
    },
  });

  const onSubmit = (formData: PostType) => {
    dispatch(createPost(formData));
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="title"
            multiline
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="file"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="File"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "#0874d7",
          padding: 20,
          borderRadius: 10,
          marginBottom: 10,
        }}
        onPress={handleSubmit(onSubmit)}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          create post
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default FormData;
