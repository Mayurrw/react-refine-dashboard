import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

/**
 * The CategoryEdit component in TypeScript React renders a form for editing category details with a
 * title input field.
 * @returns The `CategoryEdit` component is being returned. It includes an `Edit` component with
 * `saveButtonProps` passed as a prop, and a `Form` component with `formProps` spread and a single
 * `Form.Item` for the "Title" input field.
 */
export const CategoryEdit = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Title"}
          name={["title"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
