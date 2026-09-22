import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_PHOTO_ARCH = {
  imageFallback: '/gallery/arch_leaders.png',
  alt: 'Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula under Floral Arch',
  caption: 'Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Yoseph Narula - Ankur Narula Ministries',
}

const DEFAULT_TOP_ROW_SIDE_PHOTOS = [
  {
    imageFallback: '/gallery/top_row_1.png',
    alt: 'Pastor Sonia Yoseph Narula Preaching Grace and Faith',
    caption: 'Pastor Sonia Yoseph Narula Ministering during Live Thursday Service',
  },
  {
    imageFallback: '/gallery/top_row_2.png',
    alt: 'Pastor Sonia Preaching with Illuminated Cross Backdrop',
    caption: 'Worship Atmosphere with the Glorious Cross in Signs & Wonders Church',
  },
  {
    imageFallback: '/gallery/top_row_3.png',
    alt: 'Pastor Sonia Preaching to Multitudes',
    caption: 'Pastor Sonia Yoseph Narula Ministering with Power and Grace',
  },
  {
    imageFallback: '/gallery/top_row_4.png',
    alt: 'Apostle Dr. Ankur Narula Delivering Prophetic Ministry',
    caption: 'Apostle Dr. Ankur Yoseph Narula Preaching under the Holy Spirit Anointing',
  },
  {
    imageFallback: '/gallery/top_row_5.png',
    alt: 'Apostle Dr. Ankur Narula Leading Believers in Worship',
    caption: 'Prophetic Proclamation and Deliverance Ministry',
  },
  {
    imageFallback: '/gallery/top_row_6.png',
    alt: 'Ministry Leadership Gathering and Blessings',
    caption: 'Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Yoseph Narula Blessing Believers',
  },
]

const DEFAULT_MIDDLE_ROW_PHOTOS = [
  {
    imageFallback: '/gallery/middle_row_1.png',
    alt: 'Pastor Sonia Narula Ministering on Stage',
    caption: 'Preaching Healing and Deliverance to the Congregation',
  },
  {
    imageFallback: '/gallery/middle_row_2.png',
    alt: 'Worship Choir in Red Robes with Pastor Sonia',
    caption: 'The Anointed Signs and Wonders Worship Choir Leading Heavenly Praises',
  },
  {
    imageFallback: '/gallery/middle_row_3.png',
    alt: 'Pastor Sonia Preaching Live Service',
    caption: 'Live Service Broadcast across Nations',
  },
  {
    imageFallback: '/gallery/middle_row_4.png',
    alt: 'Pastor Sonia Preaching with Golden Bokeh Lights',
    caption: 'The Glorious Light of Christ Touching Hearts and Transforming Lives',
  },
  {
    imageFallback: '/gallery/middle_row_5.png',
    alt: 'Glorious Illuminated Holy Cross Worship',
    caption: 'Reverent Worship before the Glorious Cross of Christ',
  },
]

const DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_LEFT = [
  {
    imageFallback: '/gallery/bottom_left_1.png',
    alt: 'Apostle Dr. Ankur Narula with Open Bible',
    caption: 'Teaching the Uncompromised Word of God with Power and Clarity',
  },
  {
    imageFallback: '/gallery/bottom_left_2.png',
    alt: 'Apostle Dr. Ankur Narula on Stage',
    caption: 'Holy Spirit Fire and Apostolic Revival Gathering',
  },
]

const DEFAULT_PHOTO_PODIUM_HERO = {
  imageFallback: '/gallery/podium_hero.png',
  alt: 'Apostle Dr. Ankur Yoseph Narula Preaching with Signs and Wonders',
  caption: 'Man of God Apostle Dr. Ankur Yoseph Narula Delivering the Living Word of God',
}

const DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_RIGHT = [
  {
    imageFallback: '/gallery/bottom_right_1.png',
    alt: 'Mass Congregation Gathering at Signs and Wonders Church',
    caption: 'Hundreds of Thousands Gathering Weekly for Worship and Miracles',
  },
  {
    imageFallback: '/gallery/bottom_right_2.png',
    alt: 'Atmosphere of Prayer and Devotion',
    caption: 'Atmosphere of Praise and Worship at Ankur Narula Ministries',
  },
  {
    imageFallback: '/gallery/bottom_right_3.png',
    alt: 'Pastoral Leaders Fellowship',
    caption: 'Leadership Devotion and Ministry Milestones',
  },
  {
    imageFallback: '/gallery/bottom_right_4.png',
    alt: 'Mass Crusade Miracle Service',
    caption: 'Miracles, Signs, and Wonders across Multitudes',
  },
]

export const GalleryPageGlobal: GlobalConfig = {
  slug: 'gallery-page',
  access: {
    read: anyone,
    update: adminsOrEditors,
  },
  admin: {
    group: 'Website Settings',
  },
  hooks: {
    beforeRead: [
      ({ doc }) => {
        if (!doc) return doc
        return {
          ...doc,
          photoArch: doc.photoArch?.imageFallback || doc.photoArch?.image ? doc.photoArch : DEFAULT_PHOTO_ARCH,
          topRowSidePhotos:
            doc.topRowSidePhotos && doc.topRowSidePhotos.length > 0
              ? doc.topRowSidePhotos
              : DEFAULT_TOP_ROW_SIDE_PHOTOS,
          middleRowPhotos:
            doc.middleRowPhotos && doc.middleRowPhotos.length > 0
              ? doc.middleRowPhotos
              : DEFAULT_MIDDLE_ROW_PHOTOS,
          bottomRowSidePhotosLeft:
            doc.bottomRowSidePhotosLeft && doc.bottomRowSidePhotosLeft.length > 0
              ? doc.bottomRowSidePhotosLeft
              : DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_LEFT,
          photoPodiumHero:
            doc.photoPodiumHero?.imageFallback || doc.photoPodiumHero?.image
              ? doc.photoPodiumHero
              : DEFAULT_PHOTO_PODIUM_HERO,
          bottomRowSidePhotosRight:
            doc.bottomRowSidePhotosRight && doc.bottomRowSidePhotosRight.length > 0
              ? doc.bottomRowSidePhotosRight
              : DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_RIGHT,
        }
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Top Mosaic Section',
          fields: [
            {
              name: 'photoArch',
              type: 'group',
              label: 'Left Arch Hero Photo (2 Cols x 2 Rows)',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Photo',
                },
                {
                  name: 'imageFallback',
                  type: 'text',
                  label: 'Fallback Image Path',
                  defaultValue: DEFAULT_PHOTO_ARCH.imageFallback,
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                  defaultValue: DEFAULT_PHOTO_ARCH.alt,
                },
                {
                  name: 'caption',
                  type: 'text',
                  label: 'Lightbox Caption',
                  defaultValue: DEFAULT_PHOTO_ARCH.caption,
                },
              ],
            },
            {
              name: 'topRowSidePhotos',
              type: 'array',
              label: 'Top Right 6 Photos (3 Cols x 2 Rows)',
              defaultValue: DEFAULT_TOP_ROW_SIDE_PHOTOS,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Photo',
                },
                {
                  name: 'imageFallback',
                  type: 'text',
                  label: 'Fallback Image Path',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                },
                {
                  name: 'caption',
                  type: 'text',
                  label: 'Lightbox Caption',
                },
              ],
            },
          ],
        },
        {
          label: 'Middle Strip Section',
          fields: [
            {
              name: 'middleRowPhotos',
              type: 'array',
              label: 'Middle Strip Photos (5 Uniform Cards)',
              defaultValue: DEFAULT_MIDDLE_ROW_PHOTOS,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Photo',
                },
                {
                  name: 'imageFallback',
                  type: 'text',
                  label: 'Fallback Image Path',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                },
                {
                  name: 'caption',
                  type: 'text',
                  label: 'Lightbox Caption',
                },
              ],
            },
          ],
        },
        {
          label: 'Bottom Mosaic Section',
          fields: [
            {
              name: 'bottomRowSidePhotosLeft',
              type: 'array',
              label: 'Bottom Left Photos (2 Stacked Cards)',
              defaultValue: DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_LEFT,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Photo',
                },
                {
                  name: 'imageFallback',
                  type: 'text',
                  label: 'Fallback Image Path',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                },
                {
                  name: 'caption',
                  type: 'text',
                  label: 'Lightbox Caption',
                },
              ],
            },
            {
              name: 'photoPodiumHero',
              type: 'group',
              label: 'Bottom Center Podium Hero (2 Cols x 2 Rows)',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Photo',
                },
                {
                  name: 'imageFallback',
                  type: 'text',
                  label: 'Fallback Image Path',
                  defaultValue: DEFAULT_PHOTO_PODIUM_HERO.imageFallback,
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                  defaultValue: DEFAULT_PHOTO_PODIUM_HERO.alt,
                },
                {
                  name: 'caption',
                  type: 'text',
                  label: 'Lightbox Caption',
                  defaultValue: DEFAULT_PHOTO_PODIUM_HERO.caption,
                },
              ],
            },
            {
              name: 'bottomRowSidePhotosRight',
              type: 'array',
              label: 'Bottom Right Photos (4 Grid Cards)',
              defaultValue: DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_RIGHT,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Photo',
                },
                {
                  name: 'imageFallback',
                  type: 'text',
                  label: 'Fallback Image Path',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                },
                {
                  name: 'caption',
                  type: 'text',
                  label: 'Lightbox Caption',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
