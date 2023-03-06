import React from 'react';
import { HolderOutlined } from '@ant-design/icons';

export const Table6: React.FC<any> = (props) => {
  return (
    <div
      className="table"
      ref={props.innerRef}
      {...props.draggableProps}
      {...props.dragHandleProps}>
      <div className="icon">
        <HolderOutlined />
      </div>
      <div className="content">Content 6</div>
    </div>
  );
};
