import React from 'react';
import {Button} from './components/Button'

const App = () => {
  return (
    <div>
     <h1>Hello Focusit</h1>
     
     <Button
      color="blue">
       ButtonOne
     </Button>

     <Button
      color="purple">
       ButtonTwo
     </Button>

     <Button
      color="grey">
       ButtonThree
     </Button>
    </div>
  );
}

export default App;
