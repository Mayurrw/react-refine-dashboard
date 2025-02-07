import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

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