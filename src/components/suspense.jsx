import React,{Component} from 'react'
import Spinner from 'react-bootstrap/Spinner'
// This component is loaded dynamically
const OtherComponent = React.lazy(() => import('./movies'));

export default function MyComponent() {
  return (
    // Displays <Spinner> until OtherComponent loads
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}