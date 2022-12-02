import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Error({navigation}) {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#c7ac97'} barStyle={'dark-content'} />
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 45,
            color: '#111029',
            fontWeight: 'bold',
            paddingVertical: 5,
          }}>
          Oops!
        </Text>
        <Text style={{paddingVertical: 5, color: '#ff517e', fontWeight: '700'}}>
          Error 404-Page Not Found
        </Text>
        <Text style={{fontSize: 15, color: '#333'}}>
          The page you requested could not be found.
        </Text>
        <Text style={{fontSize: 15, color: '#333'}}>
          We're working on it{' '}
          <Text style={{color: '#111029', fontWeight: 'bold'}}>:)</Text>
        </Text>

        <Image
          style={{width: '100%', height: 300}}
          source={require('../images/error.png')}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('home')}
          style={{
            width: 120,
            height: 50,
            backgroundColor: '#111029',
            borderRadius: 50,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#eee', fontSize: 17}}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Error;
