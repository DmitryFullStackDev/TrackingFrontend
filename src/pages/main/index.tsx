import React from 'react'
import Navigation from 'src/components/navigation'

export default function Main() {
  return (
    <Navigation dashboardChildren={<div>child</div>}>
      <div>hello</div>
    </Navigation>
  )
}
