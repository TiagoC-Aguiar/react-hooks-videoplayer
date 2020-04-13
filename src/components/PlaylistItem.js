import React from 'react'
import StyledPlaylistitem from './styles/StyledPlaylistitem'

const PlaylistItem = ({ video, active, played }) => (
  <StyledPlaylistitem active={active} played={played}>
    <div className="wbn-player__video-nr">{video.num}</div>
    <div className="wbn-player__video-name">{video.title}</div>
    <div className="wbn-player__video-time">{video.duration}</div>
    PlaylistItem!
  </StyledPlaylistitem>
)

export default PlaylistItem
