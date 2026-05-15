import React from "react"

export default async function Blog({ params }) {
// fetching data from url
    const { slug } = await params

    return <div>my blog post is {slug}</div>
}