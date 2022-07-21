import { Provider as PaperProvider } from 'react-native-paper';

import Main from './src/ReactNativePaperSample';

export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}
