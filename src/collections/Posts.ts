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
        name: 'createdAt',
        type: 'date',
        label: 'Created At',
        admin: {
            readOnly: true,
        },
    }
    ],
    hooks:{
        beforeChange: [
            async ({ data }) => {
                if (!data.createdAt) {
                    data.createdAt = new Date()
                }
                return data
            },
        ],
    }
}

export default Posts