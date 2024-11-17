import './App.css'

import { Stage } from './components/Stage';
import { Providers } from './components/Providers';
import { ToolBar } from './components/ToolBar';
import { Toaster } from './components/Toaster';


function App() {
  return (
    <Providers>
      <ToolBar />
      <Stage />
      <Toaster />
    </Providers>
    
  )
}

export default App
