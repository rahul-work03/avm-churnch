import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderNumber',
    group: 'Ministry Operations',
    defaultColumns: ['orderNumber', 'customerName', 'customerPhone', 'totalAmount', 'paymentStatus', 'status', 'createdAt'],
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
      name: 'items',
      type: 'array',
      label: 'Ordered Items',
      labels: {
        singular: 'Item',
        plural: 'Items',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Product Title',
              required: true,
            },
            {
              name: 'slug',
              type: 'text',
              label: 'Product Slug',
            },
            {
              name: 'productId',
              type: 'text',
              label: 'Product ID',
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'quantity',
              type: 'number',
              label: 'Quantity',
              required: true,
              defaultValue: 1,
            },
            {
              name: 'unitPrice',
              type: 'number',
              label: 'Unit Price (₹)',
              required: true,
            },
            {
              name: 'totalPrice',
              type: 'number',
              label: 'Total Item Price (₹)',
              required: true,
            },
            {
              name: 'image',
              type: 'text',
              label: 'Product Image',
            },
          ],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'productTitle',
          type: 'text',
          label: 'Primary Item Summary (Legacy)',
        },
        {
          name: 'quantity',
          type: 'number',
          label: 'Total Units',
        },
        {
          name: 'unitPrice',
          type: 'number',
          label: 'Unit Price (₹)',
        },
        {
          name: 'totalAmount',
          type: 'number',
          label: 'Total Paid Amount (₹)',
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
          label: 'Customer Mobile Phone (10 Digits)',
          required: true,
        },
        {
          name: 'customerEmail',
          type: 'email',
          label: 'Customer Email Address',
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
          label: 'Shipping Street Address / House No.',
          required: true,
        },
        {
          name: 'landmark',
          type: 'text',
          label: 'Nearby Landmark (Optional)',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'city',
          type: 'text',
          label: 'City / District',
          required: true,
        },
        {
          name: 'state',
          type: 'text',
          label: 'State / Province',
          defaultValue: 'Punjab',
        },
        {
          name: 'pincode',
          type: 'text',
          label: 'Postal PIN Code (6 Digits)',
          required: true,
        },
      ],
    },
    {
      name: 'deliveryNotes',
      type: 'textarea',
      label: 'Special Delivery Instructions or Prayer Burden',
    },
    {
      type: 'collapsible',
      label: 'Instamojo Payment Details',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'paymentGateway',
              type: 'text',
              label: 'Gateway Provider',
              defaultValue: 'instamojo',
              admin: {
                readOnly: true,
              },
            },
            {
              name: 'paymentStatus',
              type: 'select',
              label: 'Payment Gateway Status',
              defaultValue: 'pending',
              options: [
                { label: 'Pending Payment', value: 'pending' },
                { label: 'Payment Credited / Successful', value: 'credit' },
                { label: 'Failed / Cancelled', value: 'failed' },
                { label: 'Refunded', value: 'refunded' },
              ],
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'paymentRequestId',
              type: 'text',
              label: 'Instamojo Payment Request ID',
            },
            {
              name: 'paymentId',
              type: 'text',
              label: 'Instamojo Payment Transaction ID (MOJO...)',
            },
          ],
        },
        {
          name: 'paymentUrl',
          type: 'text',
          label: 'Instamojo Hosted Checkout URL',
        },
        {
          name: 'paidAt',
          type: 'date',
          label: 'Payment Confirmation Timestamp',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'customerEmailSent',
          type: 'checkbox',
          label: 'Customer Confirmation Email Dispatched',
          defaultValue: false,
        },
        {
          name: 'adminEmailSent',
          type: 'checkbox',
          label: 'Admin Alert Email Dispatched',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      label: 'Fulfillment Status',
      defaultValue: 'pending_payment',
      options: [
        { label: 'Pending Payment', value: 'pending_payment' },
        { label: 'Payment Confirmed / Paid', value: 'paid' },
        { label: 'Processing / Packing', value: 'processing' },
        { label: 'Dispatched / In Transit', value: 'shipped' },
        { label: 'Delivered', value: 'delivered' },
        { label: 'Cancelled / Failed', value: 'cancelled' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
