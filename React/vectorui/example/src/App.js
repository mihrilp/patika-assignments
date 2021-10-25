import React from 'react'

import { Button } from 'vectorui'
import 'vectorui/dist/index.css'

const App = () => {
  return (
    <>
      <Button type='default'>default</Button>
      <Button type='primary'>primary</Button>
      <Button type='dashed'>dashed</Button>
      <Button type='text'>text</Button>
      <Button type='link'>link</Button>
    </>
  )
}

export default App
