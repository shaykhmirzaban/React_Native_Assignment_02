import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

function Detail({navigation, route}) {
  let data = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#1b0a26',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View onTouchStart={() => navigation.navigate('home')}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                  paddingHorizontal: 5,
                  fontWeight: 'bold',
                }}>
                {'<'}
              </Text>
            </View>
            <Text
              style={{
                color: '#eee',
                paddingHorizontal: 10,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Product Detail
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 250,
              paddingVertical: 10,
              backgroundColor: '#fff',
            }}>
            <Image
              resizeMode="contain"
              source={{
                width: '100%',
                height: '100%',
                uri: data.image,
              }}
            />
          </View>
          <View style={{padding: 15}}>
            <Text style={{fontWeight: 'bold'}}>{data.category}</Text>
            <Text
              style={{
                fontSize: 18,
                color: '#1b0a26',
                paddingVertical: 10,
                fontWeight: '700',
              }}>
              {data.title}
            </Text>
            <Text style={{fontSize: 15, color: '#333'}}>
              {data.description}
            </Text>

            <Text
              style={{
                fontSize: 18,
                color: '#000',
                paddingVertical: 10,
                fontWeight: 'bold',
              }}>
              ${data.price}
            </Text>

            <Text style={{fontWeight: 'bold'}}>Rating: {data.rating.rate}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Detail;
