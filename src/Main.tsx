import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Headline } from 'react-native-paper';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Headline>Paper紹介</Headline>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
