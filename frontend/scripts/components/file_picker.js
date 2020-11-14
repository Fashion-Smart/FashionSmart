import React from 'react';

const FilePicker = props => (
  <div className="input">
    <input
      type="file"
      onChange={e => props.onChange(e.target.files)}
    />
  </div>
);

export default FilePicker;