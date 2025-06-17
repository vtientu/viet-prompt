import React, { useState, useEffect } from "react";
import {
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Upload,
  Space,
  Tag,
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import http from "../api/http";

const { TextArea } = Input;

const PackageForm = ({ visible, onCancel, initialValues = null }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [inputTag, setInputTag] = useState("");
  const [prompts, setPrompts] = useState([{ question: "", answer: "" }]);

  const handleClose = () => {
    form.resetFields();
    setTags([]);
    setPrompts([{ question: "", answer: "" }]);
    onCancel();
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();

      if (!values.thumbnail || !values.thumbnail[0]?.originFileObj) {
        alert("Vui lòng tải lên ảnh đại diện!");
        setLoading(false);
        return;
      }

      // Xử lý tags và prompts
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (key !== "thumbnail" && key !== "images") {
          formData.append(key, values[key]);
        }
      });

      // Thêm tags và prompts
      formData.append("tags", JSON.stringify(tags));
      formData.append(
        "prompts",
        JSON.stringify(prompts.filter((p) => p.question && p.answer))
      );

      // Xử lý files
      if (values.thumbnail?.[0]?.originFileObj) {
        formData.append("thumbnail", values.thumbnail[0].originFileObj);
      }
      if (values.images?.length) {
        values.images.forEach((file) => {
          if (file.originFileObj) {
            formData.append("images", file.originFileObj);
          }
        });
      }

      await http.post("/package", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      //   form.resetFields();
      setTags([]);
      setPrompts([{ question: "", answer: "" }]);
    } catch (error) {
      console.error("Form validation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTag = () => {
    if (inputTag && !tags.includes(inputTag)) {
      setTags([...tags, inputTag]);
      setInputTag("");
    }
  };

  const handleRemoveTag = (removedTag) => {
    setTags(tags.filter((tag) => tag !== removedTag));
  };

  const handleAddPrompt = () => {
    setPrompts([...prompts, { question: "", answer: "" }]);
  };

  const handleRemovePrompt = (index) => {
    setPrompts(prompts.filter((_, i) => i !== index));
  };

  const handlePromptChange = (index, field, value) => {
    const newPrompts = [...prompts];
    newPrompts[index][field] = value;
    setPrompts(newPrompts);
  };

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        ...initialValues,
        thumbnail: undefined, // Reset file inputs
        images: undefined,
      });
      setTags(initialValues.tags || []);
      setPrompts(initialValues.prompts || [{ question: "", answer: "" }]);
    }
  }, [initialValues, form]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await http.get("/category");
        if (response.status === 200) {
          setCategories(response.data.metadata);
        } else {
          toast.error(response.data.message || "Lỗi khi lấy dữ liệu");
        }
      } catch (error) {
        toast.error(error.response.data.message || "Lỗi khi lấy dữ liệu");
      }
    };

    fetchCategories();
  }, []);

  return (
    <Modal
      title={initialValues ? "Cập nhật Package" : "Tạo Package Mới"}
      open={visible}
      onCancel={handleClose}
      centered
      width={800}
      bodyStyle={{
        maxHeight: "80vh",
        overflowY: "auto",
        paddingRight: "16px",
      }}
      footer={[
        <Button key="back" onClick={handleClose}>
          Hủy
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleSubmit}
        >
          {initialValues ? "Cập nhật" : "Tạo"}
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          isActive: true,
        }}
      >
        <Form.Item
          name="name"
          label="Tên Package"
          rules={[{ required: true, message: "Vui lòng nhập tên package!" }]}
        >
          <Input placeholder="Nhập tên package" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Mô tả"
          rules={[{ required: true, message: "Vui lòng nhập mô tả package!" }]}
        >
          <TextArea rows={4} placeholder="Nhập mô tả chi tiết về package" />
        </Form.Item>

        <div style={{ display: "flex", gap: "20px" }}>
          <Form.Item
            name="price"
            label="Giá (VNĐ)"
            rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
            style={{ flex: 1 }}
          >
            <InputNumber
              style={{ width: "100%" }}
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              placeholder="Nhập giá package"
            />
          </Form.Item>

          <Form.Item
            name="category"
            label="Danh mục"
            rules={[{ required: true, message: "Vui lòng chọn danh mục!" }]}
            style={{ flex: 1 }}
          >
            <Select placeholder="Chọn danh mục">
              {categories.map((category) => (
                <Select.Option key={category._id} value={category._id}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>

        <Form.Item label="Tags">
          <Space style={{ marginBottom: 8 }}>
            <Input
              value={inputTag}
              onChange={(e) => setInputTag(e.target.value)}
              onPressEnter={handleAddTag}
              placeholder="Nhập tag"
            />
            <Button type="primary" onClick={handleAddTag}>
              <PlusOutlined /> Thêm Tag
            </Button>
          </Space>
          <div style={{ marginTop: 8 }}>
            {tags.map((tag) => (
              <Tag
                key={tag}
                closable
                onClose={() => handleRemoveTag(tag)}
                style={{ marginBottom: 8 }}
              >
                {tag}
              </Tag>
            ))}
          </div>
        </Form.Item>

        <Form.Item
          name="thumbnail"
          label="Ảnh đại diện"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
          rules={[
            { required: true, message: "Vui lòng tải lên ảnh đại diện!" },
          ]}
        >
          <Upload maxCount={1} listType="picture" beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Tải lên ảnh đại diện</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="images"
          label="Ảnh bổ sung"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
        >
          <Upload
            multiple
            maxCount={5}
            listType="picture"
            beforeUpload={() => false}
          >
            <Button icon={<UploadOutlined />}>Tải lên ảnh bổ sung</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="Prompts">
          {prompts.map((prompt, index) => (
            <div
              key={index}
              style={{
                marginBottom: 16,
                border: "1px solid #d9d9d9",
                padding: 16,
                borderRadius: 4,
              }}
            >
              <Space direction="vertical" style={{ width: "100%" }}>
                <Input
                  value={prompt.question}
                  onChange={(e) =>
                    handlePromptChange(index, "question", e.target.value)
                  }
                  placeholder="Nhập câu hỏi"
                />
                <TextArea
                  value={prompt.answer}
                  onChange={(e) =>
                    handlePromptChange(index, "answer", e.target.value)
                  }
                  placeholder="Nhập câu trả lời"
                  rows={2}
                />
                {prompts.length > 1 && (
                  <Button
                    type="link"
                    danger
                    onClick={() => handleRemovePrompt(index)}
                  >
                    Xóa prompt
                  </Button>
                )}
              </Space>
            </div>
          ))}
          <Button type="dashed" onClick={handleAddPrompt} block>
            <PlusOutlined /> Thêm prompt
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PackageForm;
