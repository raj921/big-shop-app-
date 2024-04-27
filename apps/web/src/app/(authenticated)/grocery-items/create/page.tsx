'use client'

import { Button, Form, Input, Typography } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreateGroceryItemPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const handleSubmit = async (values: {
    name: string
    description?: string
  }) => {
    if (!userId) {
      enqueueSnackbar('User must be logged in to add items', {
        variant: 'error',
      })
      return
    }

    try {
      const newItem = await Api.Groceryitem.createOneByUserId(userId, {
        name: values.name,
        description: values.description,
        userId,
      })
      enqueueSnackbar('Item added successfully!', { variant: 'success' })
      router.push(`/grocery-items/${newItem.id}`)
    } catch (error) {
      enqueueSnackbar('Failed to add item', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Add New Grocery Item</Title>
      <Paragraph>
        Fill in the details below to add a new grocery item to the marketplace.
      </Paragraph>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="Item Name"
          rules={[{ required: true, message: 'Please input the item name!' }]}
        >
          <Input placeholder="Enter item name" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: false }]}
        >
          <Input.TextArea rows={4} placeholder="Enter item description" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            icon={<PlusCircleOutlined />}
          >
            Add Item
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
