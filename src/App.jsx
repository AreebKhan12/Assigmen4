import React from 'react';
import HeronCalculator from './HeronCalculator';
import AmbiguousCaseCalculator from './AmbiguousCaseCalculator';
import NewtonCalculator from './NewtonCalculator';
import PolynomialCalculator from './PolynomialCalculator';

const App = () => (
  <div className="container">
    <HeronCalculator />
    <AmbiguousCaseCalculator />
    <NewtonCalculator />
    <PolynomialCalculator />
  </div>
);

export default App;
