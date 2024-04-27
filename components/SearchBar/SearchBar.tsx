import React from 'react';
import { TextInput } from 'react-native';
import { s } from './SearchBar.style';

const SearchBar = ({ onSubmit }: { onSubmit: (city: string) => void }) => {
  return (
    <TextInput
      placeholder="Chercher une ville"
      style={s.input}
      onSubmitEditing={(e)=>onSubmit(e.nativeEvent.text)}
      clearTextOnFocus
    />
  );
};

export default SearchBar;
