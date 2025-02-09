import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

/**
 * The `CategoryCreate` component in TypeScript React renders a form for creating a category with a
 * title input field.
 * @returns The CategoryCreate component is being returned. It includes a form for creating a category
 * with a title input field and a save button.
 */
export const CategoryCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
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
    </Create>
  );
};
