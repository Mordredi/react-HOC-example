import React, { Component } from 'react';

import { lensPath, set } from 'ramda';

export const FormValidation = (validations, FormComponent) => (
  class extends Component {
    constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
      this.state = {
        validations,
      };
    }
    onChange(ev) {
      const { value, name } = ev.target;
      const valid = !!value.length;
      const path = lensPath(['validations', name]);
      this.setState(prevState => set(
        path,
        Object.assign({}, prevState.validations[name], { valid }),
        prevState,
      ));
    }
    render() {
      return (
        <FormComponent
          {...this.props}
          onChange={this.onChange}
          validations={this.state.validations}
        />
      );
    }
  }
);
  // const onChange = (ev) => {
    // const newValidations = validations[name].required && value.length
      // ? Object.assign({}, validations, {
        // [name]: Object.assign({}, validations[name], { valid: true }),
      // })
      // : Object.assign({}, validations, {
        // [name]: Object.assign({}, validations[name], { valid: false }),
      // });
    // return <FormComponent {...props} onChange={onChange} validations={newValidations} />;
  // };
