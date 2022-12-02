import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

function Home({navigation}) {
  let [data, setData] = useState([
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
  ]);
  let [specificItem, setSpecificItem] = useState(null);

  useEffect(() => {
    let a = axios
      .get('https://fakestoreapi.com/products/')
      .then(e => setData(e.data))
      .catch(e => console.log(e));
  }, []);

  const filterFn = e => {
    data.filter((value, index) => {
      if (value.title.toLowerCase().includes(e.toLowerCase())) {
        setSpecificItem(value);
      }
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar backgroundColor={'#c7ac97'} barStyle={'dark-content'} />
        <View>
          <ImageBackground
            style={Style.cover}
            source={require('../images/bg.jpg')}
            blurRadius={10}>
            <View style={Style.hoverContent}>
              <Text style={Style.mainHeading}>Shop Whatever</Text>
              <Text style={Style.mainHeading}>you want.</Text>
              <Text style={{fontSize: 14, color: '#333'}}>
                All is avalaible which you want.
              </Text>
              <TouchableOpacity
                style={Style.mainButton}
                onPress={() => navigation.navigate('error')}>
                <Text style={Style.mainButtonText}>Shop Now</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <View style={Style.product}>
            <View style={{paddingVertical: 10}}>
              <Text
                style={{fontSize: 18, color: '#1b0a26', fontWeight: 'bold'}}>
                All Products
              </Text>
            </View>

            <View style={Style.filterArea}>
              <TextInput
                placeholder="Enter Item name"
                style={Style.textInputArea}
                onChangeText={e => filterFn(e)}
                keyboardType={'default'}
              />
              <TouchableOpacity onPress={filterFn} style={Style.buttonStyle}>
                <Text
                  style={{color: '#eee', fontWeight: 'bold'}}
                  onPress={() =>
                    alert('bhai aap ka result nichay show ho raha hy.')
                  }>
                  Filter
                </Text>
              </TouchableOpacity>
            </View>

            {specificItem && (
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#1b0a26',
                      fontWeight: 'bold',
                    }}>
                    Search Result
                  </Text>
                </View>

                <View style={Style.childrenBox}>
                  <Image
                    fadeDuration={1000}
                    source={{
                      width: '100%',
                      height: 150,
                      uri: specificItem.image,
                    }}
                  />
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: '#eee',
                      padding: 10,
                      borderRadius: 5,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        color: '#333',
                        fontSize: 15,
                        paddingVertical: 5,
                      }}>
                      {specificItem.title && specificItem.title.length > 30
                        ? `${specificItem.title.slice(0, 30)}...`
                        : specificItem.title}
                    </Text>
                    <Text
                      style={{
                        width: '100%',
                        fontSize: 13,
                        paddingVertical: 5,
                      }}>
                      {specificItem.description &&
                      specificItem.description.length > 80
                        ? `${specificItem.description.slice(0, 80)}...`
                        : specificItem.description}
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#1b0a26',
                      }}>
                      ${specificItem.price}
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('error')}
                      style={{
                        padding: 20,
                        backgroundColor: '#1b0a26',
                        borderRadius: 5,
                        marginTop: 10,
                      }}>
                      <Text style={{fontSize: 15, color: '#eee'}}>
                        Add to card
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {data &&
                data.length > 0 &&
                data.map((value, index) => {
                  return (
                    <View key={index} style={Style.childrenBox}>
                      <Image
                        source={{width: 120, height: 120, uri: value.image}}
                      />
                      <View
                        style={{
                          backgroundColor: '#eee',
                          padding: 10,
                          borderRadius: 5,
                          marginTop: 10,
                        }}>
                        <Text
                          style={{
                            color: '#333',
                            fontSize: 15,
                            paddingVertical: 5,
                          }}>
                          {value.title && value.title.length > 20
                            ? `${value.title.slice(0, 20)}...`
                            : value.title}
                        </Text>
                        <Text
                          style={{
                            width: 150,
                            fontSize: 13,
                            paddingVertical: 5,
                          }}>
                          {value.description && value.description.length > 50
                            ? `${value.description.slice(0, 50)}...`
                            : value.description}
                        </Text>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#1b0a26',
                          }}>
                          ${value.price}
                        </Text>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('error')}
                          style={{
                            padding: 20,
                            backgroundColor: '#1b0a26',
                            borderRadius: 5,
                            marginTop: 10,
                          }}>
                          <Text style={{fontSize: 15, color: '#eee'}}>
                            Add to card
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Style = StyleSheet.create({
  cover: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  hoverContent: {
    padding: 15,
    backgroundColor: '#eee2',
    margin: 15,
    borderRadius: 10,
  },
  mainHeading: {
    fontSize: 22,
    color: '#1b0a26',
    fontWeight: 'bold',
  },
  mainButton: {
    width: 100,
    height: 30,
    backgroundColor: '#1b0a26',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  mainButtonText: {
    color: '#eee',
    fontWeight: 'bold',
  },
  product: {
    padding: 20,
  },
  filterArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 15,
  },
  textInputArea: {
    width: 250,
    backgroundColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 5,
  },
  buttonStyle: {
    width: 60,
    height: 55,
    backgroundColor: '#1b0a26',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  childrenBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#eee',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 4,
  },
});

export default Home;
