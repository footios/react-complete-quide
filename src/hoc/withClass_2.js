import React, { Component } from "react";

// a function that doesn't take the props, but a configuration
// Note! Do not manipulate (change state or props) of the wrapped component!
// You can also return a stateful component
// const withClass_2 = (WrappedComponent, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

// You can also return a stateful component
// It's an anonymous class, a class factory
// const withClass_2 = (WrappedComponent, className) => {
//   return class extends Component {
//     render() {
//       return (
//         <div className={className}>
//           <WrappedComponent {...this.props} />
//         </div>
//       );
//     }
//   };
// };

// modify to work with a forward ref
const withClass_2 = (WrappedComponent, className) => {
  const RefClass = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
        </div>
      );
    }
  };

  return React.forwardRef((props, ref) => {
    return <RefClass {...props} forwardedRef={ref} />;
  });
};

export default withClass_2;
