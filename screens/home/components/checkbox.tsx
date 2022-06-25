import React, {FC} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
type Props = {
  customCheck: () => void;
};

const CheckBox: FC<Props> = ({customCheck}) => {
  return (
    <BouncyCheckbox
      size={24}
      fillColor="#0078FF"
      unfillColor="#ffffff"
      iconStyle={{borderColor: '#CECECE', borderRadius: 4}}
      onPress={(isChecked: boolean) => {
        console.log('isChecked', isChecked);
        customCheck?.();
      }}
    />
  );
};

export default CheckBox;
