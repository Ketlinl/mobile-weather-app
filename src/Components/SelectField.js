import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Entypo } from '@expo/vector-icons';

export const SelectField = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(props.options);

  return (
    <DropDownPicker
      open={open}
      placeholder={props.placeholder}
      listMode="SCROLLVIEW"
      zIndex={1000}
      translation={{
          SELECTED_ITEMS_COUNT_TEXT: {
          1: "Foi selecionado 1 item",
          n: "Foi selecionado {count} items"
          },
          NOTHING_TO_SHOW: "Não há elementos na lista"
      }}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={{
        backgroundColor: "transparent",
        borderWidth: 0
      }}
      textStyle={{color: 'white', fontSize: 18}}
      placeholderStyle={{color: 'white'}}
      dropDownContainerStyle={{backgroundColor: "transparent", borderWidth: 0}}
      ArrowDownIconComponent={() => <Entypo name="chevron-small-down" size={24} color="white" />}
      ArrowUpIconComponent={() => <Entypo name="chevron-small-up" size={24} color="white" />}
      onChangeValue={props.onChange}
    />
  );
};