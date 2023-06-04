import React from 'react';

const componentFactoryFrom = function(sources) {
  function Component(props) {
    const type = props.type;
    const source = sources[type];
    if (!source) {
      return null;
    }
    return React.createElement(source, props);
  }
  return Component;
};

export default componentFactoryFrom;
