import {
  ScrollView,
} from 'react-native';

import StateBasic from "./src/components/StateBasic"
import TextInputBasic from './src/components/TextInputBasic';

export default function App() {
  return (
    <ScrollView>
      <StateBasic />
      <TextInputBasic />
    </ScrollView>
  );
}
