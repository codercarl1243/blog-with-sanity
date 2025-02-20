import Image from '@/components/image';
import {client} from '@/sanity/lib/client'
import { GET_ALL_POSTS } from '@/sanity/lib/queries'

export default async function PostsPage(){

    const posts = await client.fetch(GET_ALL_POSTS);

    return (
        <div>
            <h1>Post Page</h1>

            <div>
                {posts.map(post => {
                    return (
                        <div key={post._id}>
                            <p>{post.title}</p>
                            <Image asset={post.image.asset} alt={post.image.alt} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}