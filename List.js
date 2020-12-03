import React from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

const List = (props) => {
  const text = `The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives outside of Seattle, Washington.[3] The adventures of Rick and Morty, however, take place across an infinite number
    of realities, with the characters travelling to other planets
    and dimensions through portals and Rick's flying car. Rick is an
    eccentric and alcoholic mad scientist, who eschews many ordinary
    conventions such as school, marriage, love, and family. He
    frequently goes on adventures with his 14-year-old grandson,
    Morty, a kind-hearted but easily distressed boy, whose naïve but
    grounded moral compass plays counterpoint to Rick's
    Machiavellian ego. Morty's 17-year-old sister, Summer, is a more
    conventional teenager who worries about improving her status
    among her peers and sometimes follows Rick and Morty on their
    adventures. The kids' mother, Beth, is a generally level-headed
    person and assertive force in the household, though
    self-conscious about her professional role as a horse surgeon.
    She is dissatisfied with her marriage to Jerry, a simple-minded
    and insecure person, who disapproves of Rick's influence over
    his family. Different versions of the characters inhabit other
    dimensions throughout the multiverse and their personal
    characteristics can vary from one reality to another. The show's
    original Rick identifies himself as "Rick Sanchez of Earth
    Dimension C-137", in reference to his original universe, but
    this does not necessarily apply to every other member of the
    Smith household. For instance, in the first-season episode "Rick
    Potion #9", after turning the entire world population into
    monsters, Rick and Morty move to a different dimension, leaving
    Summer, Beth and Jerry behind. Episodes`;
  const item = {
    id: '23',
    description: text.split('\n').join(),
    title: 'Rick & Morty',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0191/7850/products/RICKMORTY_39_-_COVER_A_FNL_WEB.jpg?v=1569002808',
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {console.log(props)}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => props.navigation.push('Detail', {item})}>
          <View>
            <SharedElement id={`item.${item.id}.image`}>
              <Image
                resizeMode={'center'}
                style={styles.baner}
                source={{
                  uri: item.imageUrl,
                }}
              />
            </SharedElement>

            <View style={styles.textWrapper}>
              <SharedElement id={`item.${item.id}.title`}>
                <Text style={styles.title}>{item.title}</Text>
              </SharedElement>
              <SharedElement id={`item.${item.id}.description`}>
                <Text style={styles.description}>{item.description}</Text>
              </SharedElement>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#41297E',
  },
  baner: {
    borderRadius: 50,
    height: 400,
    width: '100%',
  },
  card: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 50,
    paddingBottom: 30,
  },
  title: {
    paddingVertical: 10,
    fontWeight: '800',
    fontSize: 20,
    paddingBottom: 15,
    textAlign: 'center',
  },
  description: {
    overflow: 'hidden',
    textAlign: 'left',
  },
  textWrapper: {
    maxHeight: 200,
    paddingBottom: 20,
    overflow: 'hidden',
  },
});

export default List;
