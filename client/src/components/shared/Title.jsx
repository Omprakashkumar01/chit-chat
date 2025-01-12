import React from 'react'
import { Helmet } from 'react-helmet-async'
const Title = (title="Chat app",
    description="this ia a chat app"
) => {
  return (
    <Helmet>
      <title>Chat App</title>
      <meta name="description" content= {description} />

    </Helmet>
    );
}

export default Title