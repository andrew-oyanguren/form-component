import { Suspense } from 'react';
import Layout from './components/Layout/Layout';
import Routes from './routes/Routes';

function App() {
  return (
    <Layout>
      <Suspense fallback="Loading...">
        <Routes />
      </Suspense>
    </Layout>
  );
}

export default App;
