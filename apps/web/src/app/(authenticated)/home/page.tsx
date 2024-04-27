'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Typography } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [user, setUser] = useState(null)
  const [notifications, setNotifications] = useState([])
  const [groceryItems, setGroceryItems] = useState([])

  useEffect(() => {
    if (userId) {
      fetchUserData()
      fetchNotifications()
      fetchGroceryItems()
    }
  }, [userId])

  const fetchUserData = async () => {
    try {
      const userData = await Api.User.findOne(userId, {
        includes: ['notifications', 'groceryitems'],
      })
      setUser(userData)
    } catch (error) {
      enqueueSnackbar('Failed to fetch user data', { variant: 'error' })
    }
  }

  const fetchNotifications = async () => {
    try {
      const notificationsData = await Api.Notification.findManyByUserId(userId)
      setNotifications(notificationsData)
    } catch (error) {
      enqueueSnackbar('Failed to fetch notifications', { variant: 'error' })
    }
  }

  const fetchGroceryItems = async () => {
    try {
      const groceryItemsData = await Api.Groceryitem.findManyByUserId(userId)
      setGroceryItems(groceryItemsData)
    } catch (error) {
      enqueueSnackbar('Failed to fetch grocery items', { variant: 'error' })
    }
  }

  const navigateToGroceryItems = () => {
    router.push('/grocery-items')
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Welcome to Your Grocery Marketplace</Title>
      <Text>
        Welcome {user?.name || 'Guest'}, here's what's happening today!
      </Text>
      <Button
        type="primary"
        icon={<ShoppingCartOutlined />}
        onClick={navigateToGroceryItems}
      >
        View Grocery Items
      </Button>
      <Row gutter={16} style={{ marginTop: 20 }}>
        {groceryItems?.map(item => (
          <Col key={item.id} span={8}>
            <Card title={item.name} bordered={false}>
              <p>{item.description}</p>
              <p>Added on: {dayjs(item.dateCreated).format('MMMM D, YYYY')}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
