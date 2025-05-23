import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { ReactNode } from 'react';
import { ImageProps, ViewStyle } from 'react-native';

export type RootStackParamList = {
  input: undefined;
  output: { docId: string };
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
  type?: "copy" | "cancel",
  imgUrl?: ImageProps,
  selected?: boolean,
  onPress: () => void
}

export type StatusTypes = "pending" | "fullfilled" | "rejected"

export interface StatusIndicatorProp {
  status: StatusTypes,
  title: string,
  subtitle: string,
  imgUrl?: ImageProps,
  onPress?: () => void
}

export interface LogoInterface {
  id: number,
  title?: string,
  imgUrl?: ImageProps
}

export interface OutputResponse {
  selectedScheme: LogoInterface,
  imgUrl: ImageProps,
  text?: string,
}

export type InputScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'input'>;
export type OutputScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'output'>;

export type OutputScreenRouteProp = RouteProp<RootStackParamList, 'output'>;
