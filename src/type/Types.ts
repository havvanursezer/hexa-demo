import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { ReactNode } from 'react';
import { ImageProps, ViewStyle } from 'react-native';

export type RootStackParamList = {
  input: undefined;
  output: undefined;
};

export interface BackgroundGradientProps {
    children: ReactNode;
    style?: ViewStyle;
}

export interface TitleProps {
  title: string;
  buttonTitle?: string;
  alignCenter?: boolean;
  onPress?: () => void;
  closeEnabled?: boolean
}

export interface ButtonProp {
  title?: string,
  size?: "primary" | "mini",
  children?: ReactNode,
  imgUrl?: ImageProps,
  selected?: boolean,
  onPress: () => void
}

export interface CreateStatusProp {
  status: "pending" | "fullfilled" | "rejected",
  title: string,
  subtitle: string,
  imgUrl?: ImageProps,
  onPress?: () => void
}

export type InputScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'input'>;
export type OutputScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'output'>;

export type OutputScreenRouteProp = RouteProp<RootStackParamList, 'output'>;
