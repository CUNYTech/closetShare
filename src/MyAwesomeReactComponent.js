import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DatePicker from 'material-ui/DatePicker';

const style = {
  marginRight: 20,
};

const MyAwesomeReactComponent = () => (
  <div>
    <RaisedButton label="Default" />

    <FlatButton label="Default" />
    <FlatButton label="Primary" primary={true} />
    <FlatButton label="Secondary" secondary={true} />
    <FlatButton label="Disabled" disabled={true} />
    <br />
    <br />
    <FlatButton label="Full width" fullWidth={true} />

    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton mini={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>

    <DatePicker hintText="Portrait Dialog" />
    <DatePicker hintText="Open to Year" openToYearSelection={true} />
  </div>
);

export default MyAwesomeReactComponent;