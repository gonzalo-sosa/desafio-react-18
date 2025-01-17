import { Route, Routes } from 'react-router';
import ExampleUseActionState from '@/components/pages/example-use-action-state';
import ExampleUseCallback from '@/components/pages/example-use-callback';
import ExampleUseContext from '@/components/pages/example-use-context';
import ExampleUseDebugValue from '@/components/pages/example-use-debug-value';
import ExampleUseDeferredValue from '@/components/pages/example-use-deferred-value';
import ExampleUseEffect from '@/components/pages/example-use-effect';
import ExampleUseId from '@/components/pages/example-use-id';
import ExampleUseImperativeHandle from '@/components/pages/example-use-imperative-handle';
import ExampleUseInsertionEffect from '@/components/pages/example-use-insertion-effect';
import ExampleUseLayoutEffect from '@/components/pages/example-use-layout-effect';
import ExampleUseMemo from '@/components/pages/example-use-memo';
import ExampleUseOptimistic from '@/components/pages/example-use-optimistic';
import ExampleUseReducer from '@/components/pages/example-use-reducer';
import ExampleUseRef from '@/components/pages/example-use-ref';
import ExampleUseState from '@/components/pages/example-use-state';
import ExampleUseExternalStore from '@/components/pages/example-use-sync-external-store';
import ExampleUseTransition from '@/components/pages/example-use-transition';
import Home from './components/pages/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/use-action-state" element={<ExampleUseActionState />} />
      <Route path="/use-callback" element={<ExampleUseCallback />} />
      <Route path="/use-context" element={<ExampleUseContext />} />
      <Route path="/use-debug-value" element={<ExampleUseDebugValue />} />
      <Route path="/use-deferred-value" element={<ExampleUseDeferredValue />} />
      <Route path="/use-effect" element={<ExampleUseEffect />} />
      <Route path="/use-id" element={<ExampleUseId />} />
      <Route
        path="/use-imperative-handle"
        element={<ExampleUseImperativeHandle />}
      />
      <Route
        path="/use-insertion-effect"
        element={<ExampleUseInsertionEffect />}
      />
      <Route path="/use-layout-effect" element={<ExampleUseLayoutEffect />} />
      <Route path="/use-memo" element={<ExampleUseMemo />} />
      <Route path="/use-optimistic" element={<ExampleUseOptimistic />} />
      <Route path="/use-reducer" element={<ExampleUseReducer />} />
      <Route path="/use-ref" element={<ExampleUseRef />} />
      <Route path="/use-state" element={<ExampleUseState />} />
      <Route
        path="/use-sync-external-store"
        element={<ExampleUseExternalStore />}
      />
      <Route path="/use-transition" element={<ExampleUseTransition />} />
    </Routes>
  );
};

export default AppRoutes;
