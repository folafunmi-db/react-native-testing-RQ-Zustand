import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {COMMON_STYLES} from '../theme/common-styles';

const ScreenLoading: React.FC = () => {
  return (
    <View style={COMMON_STYLES.flexCenter}>
      <ActivityIndicator size={'large'} color="cyan" />
    </View>
  );
};

export default ScreenLoading;
