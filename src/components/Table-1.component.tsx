import { HolderOutlined } from '@ant-design/icons';

export const Table1: React.FC<any> = (props) => {
  return (
    <div
      className="table"
      ref={props.innerRef}
      {...props.draggableProps}
      {...props.dragHandleProps}>
      <div className="icon">
        <HolderOutlined />
      </div>
      <div className="content">Content 1</div>
      <div className="content">{props.data.message}</div>
    </div>
  );
};
