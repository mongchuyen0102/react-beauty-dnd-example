import { HolderOutlined } from '@ant-design/icons';

export const Table2 = ({
  content = 'Mong Chuyen xinh dep',
}: {
  content?: string;
}) => {
  return (
    <div className="table">
      <div className="icon">
        <HolderOutlined />
      </div>
      <div className="content">Table 2: {content}</div>
    </div>
  );
};
