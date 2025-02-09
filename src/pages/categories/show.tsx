import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

/**
 * The `CategoryShow` component displays the ID and title of a record fetched using a custom hook
 * `useShow`.
 * @returns The `CategoryShow` component is being returned. It displays the ID and Title of a record
 * fetched using the `useShow` hook. The component shows a loading state while fetching the data and
 * then displays the ID and Title values once the data is loaded.
 */
export const CategoryShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"Title"}</Title>
      <TextField value={record?.title} />
    </Show>
  );
};
