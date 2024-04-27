'use client'

import { useEffect, useState } from 'react'
import { Typography, Spin, Descriptions, Image, Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function GroceryItemDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [groceryItem, setGroceryItem] = useState<Model.Groceryitem | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!params.id) {
      enqueueSnackbar('No grocery item ID provided', { variant: 'error' })
      router.push('/grocery-items')
      return
    }

    const fetchGroceryItem = async () => {
      try {
        const item = await Api.Groceryitem.findOne(params.id, {
          includes: ['user', 'itemimagesAsItem'],
        })
        setGroceryItem(item)
      } catch (error) {
        enqueueSnackbar('Failed to fetch grocery item details', {
          variant: 'error',
        })
        router.push('/grocery-items')
      } finally {
        setLoading(false)
      }
    }

    fetchGroceryItem()
  }, [params.id, router])

  if (loading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!groceryItem) {
    return (
      <PageLayout layout="narrow">
        <Text>No details available for this grocery item.</Text>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => router.push('/grocery-items')}
      >
        Back to List
      </Button>
      <Title level={2}>{groceryItem.name}</Title>
      <Paragraph>
        {groceryItem.description || 'No description provided.'}
      </Paragraph>
      <Descriptions bordered>
        <Descriptions.Item label="Created By">
          {groceryItem.user?.name || 'Unknown'}
        </Descriptions.Item>
        <Descriptions.Item label="Date Created">
          {dayjs(groceryItem.dateCreated).format('MMMM D, YYYY')}
        </Descriptions.Item>
        <Descriptions.Item label="Last Updated">
          {dayjs(groceryItem.dateUpdated).format('MMMM D, YYYY')}
        </Descriptions.Item>
      </Descriptions>
      {groceryItem.itemimagesAsItem?.map((image, index) => (
        <Image
          key={index}
          src={image.imageUrl}
          alt={`Image ${index + 1}`}
          style={{ marginTop: 16 }}
        />
      ))}
    </PageLayout>
  )
}
