import { useState } from "react"
import { Form, Input, Button, Modal } from "antd"

const ModalUser = (props) => {
  const [email, setEmail] = useState("")
  const { onFinishModal, addModal, editModal, onCancelModal } = props

  const validateEmail = {
    required: "Email is required!",
    types: {
      email: `${email} is not a valid email!`
    }
  }

  return (
    <>
      <Modal
        title={addModal ? "Add user" : "Edit user"}
        visible={addModal || editModal}
        onCancel={onCancelModal}
        footer={""}
        destroyOnClose={true}
      >
        <Form
          name="nest-messages"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinishModal}
          initialValues={editModal}
          validateEmail={validateEmail}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            onChange={(evt) => setEmail(evt.target.value)}
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "Please input your city!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="form-btn">
            <Button style={{ marginRight: 10 }} onClick={onCancelModal}>
              Close
            </Button>
            <Button type="primary" htmlType="submit" className="btn-submit">
              {addModal ? "Add" : "Save"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ModalUser
