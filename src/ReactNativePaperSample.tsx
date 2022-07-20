import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Button, Caption, Card, Headline, Paragraph, Subheading, Title } from 'react-native-paper';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Headline>Paper紹介</Headline>
        <Title>タイトル</Title>
        <Subheading>Typography</Subheading>
        <Paragraph>これが段落です</Paragraph>
        <Paragraph>
          ほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ
        </Paragraph>
        <Caption>キャプションもかけます</Caption>
        <Subheading>Button</Subheading>
        <Button style={{ marginTop: 5, marginBottom: 5, borderRadius: 12 }}>ふつうのボタン(mode: text)</Button>
        <Button mode="contained" style={{ marginTop: 5, marginBottom: 5, borderRadius: 12 }}>
          containedなボタン
        </Button>
        <Button mode="outlined" style={{ marginTop: 5, marginBottom: 5, borderRadius: 12 }}>
          outlinedなボタン
        </Button>
        <Subheading>Card</Subheading>
        <Card>
          <Card.Cover source={require('../assets/ramen.jpg')} />
          <Card.Title
            title="ラーメン紀行 2日目"
            subtitle="炎のラーメンチャンネル"
            left={(props) => <Avatar.Text {...props} label="YN" />}
          />
          <Card.Content>
            <Paragraph>とうとうこの伝説のお店にやってきました</Paragraph>
          </Card.Content>
          <Card.Actions style={{ justifyContent: 'flex-end' }}>
            <Button>見ない</Button>
            <Button mode="contained">見る</Button>
          </Card.Actions>
        </Card>
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
