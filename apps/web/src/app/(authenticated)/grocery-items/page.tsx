'use client'

import { useEffect, useState } from 'react'
import { Button, Table, Typography, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function GroceryItemsListPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [groceryItems, setGroceryItems] = useState<Model.Groceryitem[]>([])

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('You must be logged in to view this page.', {
        variant: 'error',
      })
      router.push('/home')
      return
    }

    const fetchGroceryItems = async () => {
      try {
        const items = await Api.Groceryitem.findMany({
          filters: { userId: { eq: userId } },
          includes: ['user', 'itemimagesAsItem'],
        })
        setGroceryItems(items)
      } catch (error) {
        enqueueSnackbar('Failed to fetch grocery items.', { variant: 'error' })
      }
    }

    fetchGroceryItems()
  }, [userId, router])

  const columns = [
    {
      title: 'Item Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Date Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (dateCreated: string) => dayjs(dateCreated).format('YYYY-MM-DD'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Model.Groceryitem) => (
        <Space size="middle">
          <Button onClick={() => router.push(`/grocery-items/${record.id}`)}>
            View Details
          </Button>
          <Button
            onClick={() =>
              router.push(`/grocery-items/${record.id}/upload-image`)
            }
          >
            Upload Image
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Grocery Items List</Title>
      <Text type="secondary">
        Below is a list of all your grocery items. You can manage them or add
        new items.
      </Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        style={{ marginBottom: 16 }}
        onClick={() => router.push('/grocery-items/create')}
      >
        Add New Item
      </Button>
      <Table dataSource={groceryItems} columns={columns} rowKey="id" />
    </PageLayout>
  )
}
