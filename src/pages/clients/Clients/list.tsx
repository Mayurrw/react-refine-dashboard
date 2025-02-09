import {
    DeleteButton,
    EditButton,
    List,
    ShowButton,
    useTable,
  } from "@refinedev/antd";
  import { type BaseRecord } from "@refinedev/core";
  import { Space, Table } from "antd";

/*
* This code snippet defines a React functional component named `ClientList`. Inside the component, it
* uses the `useTable` hook to get the `tableProps` object with the option `syncWithLocation` set to
* `true`. The component then returns a JSX structure that renders a list using the `List` component
* from the `@refinedev/antd` library.
*/
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

