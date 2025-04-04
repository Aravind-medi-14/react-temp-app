import React from 'react'

export default function Parent(props) {
  return (
    <div style={{backgroundColor:'yellow'}}>
      {props.children}
    </div>
  )
}
