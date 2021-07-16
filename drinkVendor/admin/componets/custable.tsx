import { Table } from 'antd';

type cusProps = {
  cols: any[],  data: any[], onSelectRow: Function | undefined,
}

const CusTable = ({ cols, data, onSelectRow }: cusProps) => {
  const onRow = (record: any, _rowIndex: any) => {
    return {
      onClick: ( _event: any ) => onSelectRow ? onSelectRow(record.key) : null,
    }
  }
  return (<Table columns={cols} dataSource={data} onRow={onRow} />)
}

export default CusTable;