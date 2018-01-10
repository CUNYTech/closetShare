import React from 'react';
import TextField from 'material-ui/TextField';

class AddressSection extends React.Component {
  render() {
    return (
        <div>
        <TextField
        hintText=""
        floatingLabelText="First Name"
        />
        <TextField
        hintText=""
        floatingLabelText="Last Name"
        /><br />
        <TextField
          hintText=""
          floatingLabelText="Address Line 1"
          fullWidth={true}
        /><br />
        <TextField
        hintText=""
        floatingLabelText="Address Line 2"
        fullWidth={true}
        /><br />
        <br /><br />
      </div>
    );
  }
};

export default AddressSection;