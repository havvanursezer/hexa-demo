import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  input: undefined;
  output: undefined;
};

export type InputScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'input'>;
export type OutputScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'output'>;

export type OutputScreenRouteProp = RouteProp<RootStackParamList, 'output'>;
