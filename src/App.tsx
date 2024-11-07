import './App.css'

import { Stage } from './components/Stage';
import { Providers } from './components/Providers';
import { ToolBar } from './components/ToolBar';
import { LayoutLoader } from './components/LayoutLoader';
import { LayoutUpdater } from './components/LayoutUpdater';
import { Toaster } from './components/Toaster';


function App() {
  return (
    <Providers>
      <LayoutLoader />
      <LayoutUpdater />
      <ToolBar />
      <Stage />
      <Toaster />
    </Providers>
    
  )
}

export default App
