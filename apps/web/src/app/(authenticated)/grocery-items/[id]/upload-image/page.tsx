'use client'

import { useState } from 'react'
import { Upload, Button, Typography } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function UploadItemImagePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [fileList, setFileList] = useState([])

  const handleUpload = async options => {
    const { file } = options
    try {
      const imageUrl = await Api.Upload.upload(file)
      await Api.Itemimage.createOneByItemId(params.id, { imageUrl })
      setFileList(fileList => [...fileList, { url: imageUrl, status: 'done' }])
      enqueueSnackbar('Image uploaded successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to upload image', { variant: 'error' })
    }
  }

  const uploadProps = {
    onRemove: file => {
      const index = fileList.indexOf(file)
      const newFileList = fileList.slice()
      newFileList.splice(index, 1)
      setFileList(newFileList)
    },
    beforeUpload: file => {
      setFileList([...fileList, file])
      return false
    },
    fileList,
    customRequest: handleUpload,
    maxCount: 1,
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Upload Image for Grocery Item</Title>
      <Text>Please upload an image for the grocery item.</Text>
      <Upload.Dragger {...uploadProps} style={{ marginTop: 16 }}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single upload. Strictly prohibit from uploading company
          data or other band files
        </p>
      </Upload.Dragger>
      <Button
        type="primary"
        onClick={() => router.push(`/grocery-items/${params.id}`)}
        style={{ marginTop: 16 }}
      >
        Back to Item Details
      </Button>
    </PageLayout>
  )
}
