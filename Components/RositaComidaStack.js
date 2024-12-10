const RositaStack = createStackNavigator();

function RositaComidasStack() {
  return (
    <RositaStack.Navigator>
      <RositaStack.Screen name="Comidas" component={ParaComer} />
      <RositaStack.Screen name="Bebidas" component={ParaTomar} />
    </RositaStack.Navigator>
  );
}
