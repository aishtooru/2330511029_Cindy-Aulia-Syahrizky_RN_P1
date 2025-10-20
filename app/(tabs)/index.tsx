import { View, Text, StyleSheet } from 'react-native';

function Card({ label }) {
  return (
    <View style={s.card}><Text style={s.cardText}>{label}</Text></View>
  );
}

export default function FlexDemo() {
  return (
    <View style={s.wrap}>
      <Card label="Card 1" />
      <Card label="Card 2" />
      <Card label="Card 3" />
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { flexDirection: 'row', gap: 12, padding: 16, justifyContent: 'space-around' },
  card: { flex: 1, flexWrap: 'wrap', backgroundColor: '#E8F0FE', padding: 16, alignItems: 'flex-end', borderRadius: 8 },
  cardText: { fontWeight: '600' }
});
