import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderNumber',
    group: 'Ministry Operations',
    defaultColumns: ['orderNumber', 'customerName', 'productTitle', 'quantity', 'totalAmount', 'status', 'createdAt'],
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'orderNumber',
      type: 'text',
      label: 'Order ID / Reference',
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'productTitle',
          type: 'text',
          label: 'Product Title',
          required: true,
        },
        {
          name: 'quantity',
          type: 'number',
          label: 'Quantity',
          required: true,
        },
        {
          name: 'unitPrice',
          type: 'number',
          label: 'Unit Price (₹)',
        },
        {
          name: 'totalAmount',
          type: 'number',
          label: 'Total Amount (₹)',
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'customerName',
          type: 'text',
          label: 'Customer Full Name',
          required: true,
        },
        {
          name: 'customerPhone',
          type: 'text',
          label: 'Customer Phone',
          required: true,
        },
        {
          name: 'customerEmail',
          type: 'email',
          label: 'Customer Email',
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'shippingAddress',
          type: 'textarea',
          label: 'Shipping Address',
          required: true,
        },
        {
          name: 'city',
          type: 'text',
          label: 'City / District',
          required: true,
        },
        {
          name: 'pincode',
          type: 'text',
          label: 'PIN Code',
          required: true,
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      label: 'Order Status',
      defaultValue: 'pending',
      options: [
        { label: 'Pending Processing', value: 'pending' },
        { label: 'Payment Confirmed', value: 'processing' },
        { label: 'Dispatched / In Transit', value: 'shipped' },
        { label: 'Delivered', value: 'delivered' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
