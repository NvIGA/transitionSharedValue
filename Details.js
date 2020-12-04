import {SharedElement} from 'react-navigation-shared-element';
import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Detail = (props) => {
  const {item} = props.route.params;

  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}>
          <SharedElement id={`item.${item.id}.image`}>
            <Image
              resizeMode={'center'}
              style={styles.baner}
              source={{
                uri: item.imageUrl,
              }}
            />
          </SharedElement>
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <TouchableOpacity>
            <SharedElement id={`item.${item.id}.title`}>
              <Text style={styles.title}>{item.title}</Text>
            </SharedElement>
          </TouchableOpacity>
          <SharedElement id={`item.${item.id}.description`}>
            <Text style={styles.description}>{item.description}</Text>
          </SharedElement>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#41297E',
  },
  baner: {
    height: 500,
    width: '100%',
  },
  card: {
    margin: 20,
    padding: 20,
    borderRadius: 50,
    paddingBottom: 30,
  },
  title: {
    color: 'white',
    paddingVertical: 30,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 20,
  },
  description: {
    color: 'white',
    paddingHorizontal: 40,
    textAlign: 'left',
    overflow: 'hidden',
    paddingBottom: 50,
  },
  textWrapper: {
    overflow: 'hidden',
  },
});

export default Detail;
