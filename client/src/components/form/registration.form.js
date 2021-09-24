import React from 'react-native';
import { useForm, controller } from 'react-hook-form';
import { Button, TextInputField } from 'react-native';

export default RegistrationForm = () => {
  const { register, handleSubmit, watch, formState: { erros } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <View>
      <Controller></Controller>
    </View>


  )
}