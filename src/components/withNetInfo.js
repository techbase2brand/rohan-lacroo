import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { View, Text } from 'react-native';

// Higher-Order Component to provide network status to the wrapped component
const withNetInfo = (WrappedComponent) => {
  return (props) => {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener((state) => {
        setIsConnected(state.isConnected);
      });

      // Cleanup the event listener when the component unmounts
      return () => unsubscribe();
    }, []);

    return (
      <View style={{ flex: 1 }}>
        {/* Optionally show a message when offline */}
        {!isConnected && (
          <View style={{ backgroundColor: 'red', padding: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>You are offline</Text>
          </View>
        )}
        {/* Pass the network status as a prop to the wrapped component */}
        <WrappedComponent isConnected={isConnected} {...props} />
      </View>
    );
  };
};

export default withNetInfo;
