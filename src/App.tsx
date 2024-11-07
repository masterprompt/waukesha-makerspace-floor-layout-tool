import './App.css'
import { Stage } from './components/Stage';
import { Providers } from './components/Providers';
import { ToolBar } from './components/ToolBar';

function App() {
  return (
    <Providers>
      <ToolBar />
      <Stage />
    </Providers>
    
  )
}

export default App
