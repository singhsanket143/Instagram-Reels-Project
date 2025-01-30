import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Reel } from './components/organism/reel/Reel';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <Reel />
    </QueryClientProvider>
  )
}

export default App
