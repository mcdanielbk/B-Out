import React from 'react'
import { usePosition } from 'use-position'

export const Locate = ({ watch, settings }) => {
  const { latitude, longitude } = usePosition(settings)

  return (
    <>
      <code>
        latitude: {latitude}
        <br />
        longitude: {longitude}
        <br />
      </code>
    </>
  )
}
