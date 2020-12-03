/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import List from './List';
import {StatusBar} from 'react-native';
import Detail from './Details';
import {enableScreens} from 'react-native-screens';

enableScreens();

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator initialRouteName="List" headerMode={'none'}>
          <Stack.Screen
            name="List"
            component={List}
            sharedElements={(route) => {
              const {item} = route.params;
              return [
                {
                  id: `item.${item.id}.image`,
                  animation: 'move',
                  resize: 'clip',
                  align: 'center-center',
                },
                {
                  id: `item.${item.id}.title`,
                  animation: 'fade',
                  resize: 'clip',
                  align: 'center-center',
                },

                {
                  id: `item.${item.id}.description`,
                  animation: 'fade',
                  resize: 'clip',
                  align: 'center-center',
                },
              ];
            }}
            options={() => ({
              transitionSpec: {
                open: {animation: 'timing', config: {duration: 500}},
                close: {animation: 'timing', config: {duration: 500}},
              },
              gestureEnabled: true,
              cardStyleInterpolator: ({current: {progress}}) => {
                return {
                  cardStyle: {
                    opacity: progress,
                  },
                };
              },
            })}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            sharedElements={(route) => {
              const {item} = route.params;
              return [
                {
                  id: `item.${item.id}.image`,
                  animation: 'move',
                  resize: 'clip',
                  align: 'center-center',
                },
                {
                  id: `item.${item.id}.title`,
                  animation: 'fade',
                  resize: 'clip',
                  align: 'center-center',
                },

                {
                  id: `item.${item.id}.description`,
                  animation: 'fade',
                  resize: 'clip',
                  align: 'center-center',
                },
              ];
            }}
            options={() => ({
              transitionSpec: {
                open: {animation: 'timing', config: {duration: 500}},
                close: {animation: 'timing', config: {duration: 500}},
              },
              gestureEnabled: true,
              cardStyleInterpolator: ({current: {progress}}) => {
                return {
                  cardStyle: {
                    opacity: progress,
                  },
                };
              },
            })}
          />
          {/* <Stack.Screen
            name="Detail"
            component={DetailScreen}
            sharedElements={(route, otherRoute, showing) => {
              const {item} = route.params;
              return [`item.${item.id}.photo`];
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
