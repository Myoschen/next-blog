---
title: Code Block Example
description: A sample to demonstrate how to use Markdown to write a TypeScript and React code block.
date: 2024-07-28
slug: code-block-example
---

# TypeScript and React Example

This is a sample to demonstrate how to use `Markdown` to write a `TypeScript` and `React` code block.


## Code Block

```tsx twoslash
import React, { useState, useEffect } from 'react'

interface User {
  id: number
  name: string
  email: string
}

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null)
  //     ^?


  useEffect(() => {
    fetch('https://example.com/api/v1/user')
      .then(response => response.json())
      .then(data => setUser(data.user))
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex-col gap-y-1">
        <h2>{user?.name}</h2>
        <p>Email: {user?.email}</p>
      </div>
    </div>
  )
}
```
