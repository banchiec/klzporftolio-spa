import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/cartContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10*(60*1000),
      cacheTime: 15*(60*1000),
      //refetchInterval: 5000
    }
  }
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router> 
     <CartProvider>       
    <QueryClientProvider client={queryClient}>     
      <App />
    </QueryClientProvider>
    </CartProvider>
  </Router>
);
