import React from 'react';

import Cat from './Cat';
import Dog from './Dog';

function Body(props) {
  return (
    <div>
        {
            // props.name === "shaghayegh" ? < Cat /> : < Dog />
            props.age ===  3 && props.name === "shaghayegh" ? <Dog /> : <Cat />
        }
    </div>
  )
}

export default Body