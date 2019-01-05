import React, { Component } from "react";

// a function that doesn't take the props, but a configuration
// Note! Do not manipulate (change state or props) of the wrapped component!
// You can also return a stateful component
// const withClass = (WrappedComponent, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

// You can also return a stateful component
// It's an anonymous class, a class factory
const withClass = (WrappedComponent, className) => {
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withClass;
