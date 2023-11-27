import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { Container } from './App.style';
import React from 'react';
import { LayoutModal } from './cp/LayoutModal';

function App() {
  return (
    <Container>
      <LayoutModal/>
      <StatusBar style="auto" />
    </Container>
  );
}

export default registerRootComponent(App);

