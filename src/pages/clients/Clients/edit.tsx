// Imports
import { Edit, useForm } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

/**
 * The `ClientEdit` component in TypeScript React renders a form for editing client details with input
 * fields for name and email.
 * @returns The `ClientEdit` component is being returned. It consists of an `Edit` component with
 * `saveButtonProps` and `isLoading` props, and a `Form` component with form fields for "Name" and
 * "Email" inputs. The form is connected to formProps, saveButtonProps, and formLoading from the
 * useForm hook.
 */
export const ClientEdit: React.FC = () => {
    const { formProps, saveButtonProps, formLoading } = useForm({});

    return (
        <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Name"}
          name={["owner_name"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Email"}
          name="owner_email"
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
    )
}