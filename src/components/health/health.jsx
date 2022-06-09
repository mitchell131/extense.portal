import * as React from 'react';

const Health = () => {

  var health = {"status": "Healthy"}
  return (
      <span class="health">{JSON.stringify(health)}</span>
  );
}

export default Health;