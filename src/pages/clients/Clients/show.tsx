//Imports
import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

/**
 * The `ClientShow` component in TypeScript React displays client information such as ID, name, and
 * email with loading state handling.
 * @returns The `ClientShow` component is being returned. It is a React functional component that
 * fetches data using the `useShow` hook, displays a loading indicator based on the `isLoading` state,
 * and then renders the fetched data in a `Show` component with fields for ID, Name, and Email.
 */

export const ClientShow: React.FC = () => {
    const { queryResult } = useShow({});
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{"ID"}</Title>
            <TextField value={record?.id} />
            <Title level={5}>{"Name"}</Title>
            <TextField value={record?.owner_name} />
            <Title level={5}>{"Email"}</Title>
            <TextField value={record?.owner_email} />
        </Show>
    )
}