---
title: Code
description: This is a test post.
date: 2024-03-24
slug: code
---


## Code

```tsx twoslash
import { useEffect, useState } from 'react'

export function useMounted() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
  //      ^?
}
```
