import React from 'react'
import PlaylistItem from '../PlaylistItem'
import StyledPlaylistitems from '../styles/StyledPlaylistitems'

const PlaylistItems = ({ videos, active }) => (
  <StyledPlaylistitems>
    {/* <PlaylistItem  /> */}
    {videos.map(video => (
      <PlaylistItem 
        key={video.id}
        video={video}
        active={video.id === active.id ? true : false}
        played={video.played}
      />
    ))}
  </StyledPlaylistitems>
)

export default PlaylistItems