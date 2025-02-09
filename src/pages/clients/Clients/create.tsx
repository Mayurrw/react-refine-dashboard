// Imports
import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

/**
 * The `ClientCreate` function is a React component that renders a form for creating a client with
 * input fields for name and email.
 * @returns The `ClientCreate` component is being returned. It is a functional component that renders a
 * form for creating a client. The form includes input fields for the client's name and email, with
 * validation rules for both fields. The form is wrapped in a `Create` component and uses the
 * `formProps` and `saveButtonProps` provided by the `useForm` hook.
 */
export const ClientCreate: React.FC = () => {
    const { formProps, saveButtonProps } = useForm({});
    return (
        <Create saveButtonProps={saveButtonProps}>
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
        </Create>
    )
}