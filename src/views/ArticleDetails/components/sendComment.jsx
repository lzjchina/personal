import React from "react";
import "../ArticleDetails.scss";
import { Modal, Form, Input, Button } from "antd";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 14 },
};

const SendComment = (props) => {
  const handleOk = (e) => {
    console.log(e);
    props.hideModal();
  };

  const handleCancel = (e) => {
    console.log(e);
    props.hideModal();
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    props.hideModal();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="sendComment">
      <Modal
        title="评论"
        visible={props.Modalvisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="评论"
            name="comment"
            rules={[
              {
                required: true,
                message: "请输入评论!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="名字"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入姓名!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              {
                required: true,
                message: "请输入邮箱!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              发布
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SendComment;
