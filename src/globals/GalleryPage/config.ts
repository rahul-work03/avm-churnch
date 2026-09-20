import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_PHOTO_ARCH = {
  imageFallback: '/figma-assets/45bec61b214b67c667153f241277fe878b702ad9.png',
  alt: 'Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula under Floral Arch',
  caption: 'Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Yoseph Narula - Ankur Narula Ministries',
}

const DEFAULT_TOP_ROW_SIDE_PHOTOS = [
  {
    imageFallback: '/figma-assets/b833aca853efbb1993ea3ceec33bdb2370c72d55.png',
    alt: 'Pastor Sonia Yoseph Narula Preaching Grace and Faith',
    caption: 'Pastor Sonia Yoseph Narula Ministering during Live Thursday Service',
  },
  {
    imageFallback: '/figma-assets/c8bf30f9b8fba99b96a4a677bce778175f7ced54.png',
    alt: 'Pastor Sonia Preaching with Illuminated Cross Backdrop',
    caption: 'Worship Atmosphere with the Glorious Cross in Signs & Wonders Church',
  },
  {
    imageFallback: '/figma-assets/486004153a5fb17a63faceadf3329f632f2ca308.png',
    alt: 'Pastor Sonia Preaching to Multitudes',
    caption: 'Pastor Sonia Yoseph Narula Ministering with Power and Grace',
  },
  {
    imageFallback: '/figma-assets/6fe9bb9c428168edabd3bf3e9d70abf0e844aa67.png',
    alt: 'Apostle Dr. Ankur Narula Delivering Prophetic Ministry',
    caption: 'Apostle Dr. Ankur Yoseph Narula Preaching under the Holy Spirit Anointing',
  },
  {
    imageFallback: '/figma-assets/a0b9ad1da9274b9feeeec8bf6b846c7b4a65656e.png',
    alt: 'Apostle Dr. Ankur Narula Leading Believers in Worship',
    caption: 'Prophetic Proclamation and Deliverance Ministry',
  },
  {
    imageFallback: '/figma-assets/bc7ea4ca22ad61ffd9b4bd5b0288c00b0a12f9c3.png',
    alt: 'Ministry Leadership Gathering and Blessings',
    caption: 'Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Yoseph Narula Blessing Believers',
  },
]

const DEFAULT_MIDDLE_ROW_PHOTOS = [
  {
    imageFallback: '/figma-assets/e3a1ee00f87a2759a0968e2f45aadffe3e59db3a.png',
    alt: 'Pastor Sonia Narula Ministering on Stage',
    caption: 'Preaching Healing and Deliverance to the Congregation',
  },
  {
    imageFallback: '/figma-assets/91a48d8819d4a79ed4de540109e29c8b41950461.png',
    alt: 'Worship Choir in Red Robes with Pastor Sonia',
    caption: 'The Anointed Signs and Wonders Worship Choir Leading Heavenly Praises',
  },
  {
    imageFallback: '/figma-assets/fe3431f583ff049d667066b50b2d048cf34afc72.png',
    alt: 'Pastor Sonia Preaching Live Service',
    caption: 'Live Service Broadcast across Nations',
  },
  {
    imageFallback: '/figma-assets/0ad2c07b6a72c78c1e66fec5b816a26e3f587185.png',
    alt: 'Pastor Sonia Preaching with Golden Bokeh Lights',
    caption: 'The Glorious Light of Christ Touching Hearts and Transforming Lives',
  },
  {
    imageFallback: '/figma-assets/3bf5187d2c81a326176bf967e4f68ddc522f2d87.png',
    alt: 'Glorious Illuminated Holy Cross Worship',
    caption: 'Reverent Worship before the Glorious Cross of Christ',
  },
]

const DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_LEFT = [
  {
    imageFallback: '/figma-assets/408cbe685022eb94200ab9e84237419210301602.png',
    alt: 'Apostle Dr. Ankur Narula with Open Bible',
    caption: 'Teaching the Uncompromised Word of God with Power and Clarity',
  },
  {
    imageFallback: '/figma-assets/c979751e5b128a8dc12e9605e600298e99e9ff49.png',
    alt: 'Apostle Dr. Ankur Narula on Stage',
    caption: 'Holy Spirit Fire and Apostolic Revival Gathering',
  },
]

const DEFAULT_PHOTO_PODIUM_HERO = {
  imageFallback: '/figma-assets/4df0fea0316253c732268b8cea549e1e2e66ff56.png',
  alt: 'Apostle Dr. Ankur Yoseph Narula Preaching with Signs and Wonders',
  caption: 'Man of God Apostle Dr. Ankur Yoseph Narula Delivering the Living Word of God',
}

const DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_RIGHT = [
  {
    imageFallback: '/figma-assets/74e8182af8627fad3ae428aad2b17d4eca519897.png',
    alt: 'Mass Congregation Gathering at Signs and Wonders Church',
    caption: 'Hundreds of Thousands Gathering Weekly for Worship and Miracles',
  },
  {
    imageFallback: '/figma-assets/85761e6b2486d02d0c483eb7871b0ab19ace8c46.png',
    alt: 'Atmosphere of Prayer and Devotion',
    caption: 'Atmosphere of Praise and Worship at Ankur Narula Ministries',
  },
  {
    imageFallback: '/figma-assets/a12f7a8578aca49746f879f50d3567e9cc929dad.png',
    alt: 'Pastoral Leaders Fellowship',
    caption: 'Leadership Devotion and Ministry Milestones',
  },
  {
    imageFallback: '/figma-assets/ff7b25464623ab07ec009c6cc6d0508eb168c5a7.png',
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
