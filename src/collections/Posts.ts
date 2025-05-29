import { CollectionConfig } from "payload"

const Posts: CollectionConfig = {
    slug: 'posts',
    fields: [{
        name: 'title',
        type: 'text',
        required: true,
        label: 'Post Title',
    },
    {
        name: 'content',
        type: 'richText',
        required: true,
        label: 'Post Content',
    },
    {
        name: 'author',
        type: 'relationship',
        relationTo: 'users',
        label: 'Author',
    },
    {
        name: 'featuredImage',
        type: 'upload',
        label: 'Featured Image',
        relationTo: 'media'
    },
    { 
        name: 'tags',
        type: 'array',
        fields: [{
            name: 'tag',
            type: 'text',
        }]
    },
    {
        name: 'createdAt',
        type: 'date',
        label: 'Created At',
        admin: {
            readOnly: true,
        },
    }
    ],
    hooks: {
        beforeChange: [
            async ({ data, operation }) => {
                if (operation === 'create') {
                    data.createdAt = new Date()
                }
                return data
            },
        ],
    }
}

export default Posts