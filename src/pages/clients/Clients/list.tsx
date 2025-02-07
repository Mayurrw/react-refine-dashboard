import {
    DateField,
    DeleteButton,
    EditButton,
    List,
    MarkdownField,
    ShowButton,
    useTable,
  } from "@refinedev/antd";
  import { type BaseRecord } from "@refinedev/core";
  import { Space, Table } from "antd";

export const ClientList: React.FC = () => {

    const { tableProps } = useTable({
        syncWithLocation: true,
    })
    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title={"ID"} />
                <Table.Column dataIndex="owner_name" title={"Name"} />
                <Table.Column dataIndex="owner_email" title={"Email"} />
                <Table.Column
                title={"Actions"}
                dataIndex="actions"
                render={(_, record: BaseRecord) => (
                    <Space>
                    <EditButton hideText size="small" recordItemId={record.id} />
                    <ShowButton hideText size="small" recordItemId={record.id} />
                    <DeleteButton hideText size="small" recordItemId={record.id} />
                    </Space>
                )}
                />
            </Table>
        </List>
    )
}

