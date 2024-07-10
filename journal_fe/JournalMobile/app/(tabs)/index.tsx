import { Button, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import apiService from '../../services/apiService';


export default function CreateUserScreen  ()  {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const createUser = async () => {
      const newUser = { username: name, email : email };
      // const response = await apiService.createUser(newUser);
      // console.log(newUser, " ", response);
      try {
      const response = await fetch('http://your-django-server-url/register/');
      const data = await response.json();
      const csrfToken = data.csrftoken;
      console.log("csrfToken: ", csrfToken);
      } catch(error: any) {
        console.error('fetch error: ', error);
      }
  };

  return (
      <View>
          <TextInput placeholder="Username" onChangeText={text => setName(text)} />
          <TextInput placeholder="Email" onChangeText={text => setEmail(text)} />
          <Button title="Create User" onPress={createUser} />
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
