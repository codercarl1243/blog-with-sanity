import { client } from "@/sanity/lib/client"
import { GET_ALL_POSTS } from "@/sanity/lib/queries"


export default async function PostsPage(){

    const posts = await client.fetch(GET_ALL_POSTS);

    return (
        <div>
            <h1>posts page</h1>

            <div>
                {posts.map(post => {
                    return (
                        <div key={post._id}>
                            <p>{post.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}