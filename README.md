##Create library

https://reactnative.dev/docs/native-modules-setup


#Run:

npx create-react-native-library react-native-awesome-module

#Comment this line in example/ios/Podfile:
use_flipper!({ 'Flipper' => '0.80.0' })

#Run:

npx react-native-builder-bob init

yarn

yarn example ios

