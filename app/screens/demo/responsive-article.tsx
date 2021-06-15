import React from "react"
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

const ResponsiveArticle = (props) => {
  return (
    <ContentLoader viewBox="0 0 1000 1000" width={props.width} height={1000} preserveAspectRatio="none" {...props}>
      <Rect x="0" y="0" rx="5" ry="5" width="40%" height="20" />
      <Rect x="0" y="42" rx="5" ry="5" width="100%" height="200" />
      <Rect x="0" y="265" rx="5" ry="5" width="100%" height="10" />
      <Rect x="0" y="285" rx="5" ry="5" width="100%" height="10" />
      <Rect x="0" y="305" rx="5" ry="5" width="100%" height="10" />
      <Rect x="0" y="335" rx="5" ry="5" width="65%" height="10" />
      <Rect x="75%" y="335" rx="5" ry="5" width="10%" height="10" />
      <Rect x="0" y="355" rx="5" ry="5" width="65%" height="10" />
      <Rect x="75%" y="355" rx="5" ry="5" width="30%" height="10" />
      <Rect x="0" y="375" rx="5" ry="5" width="65%" height="10" />
      <Rect x="75%" y="375" rx="5" ry="5" width="30%" height="10" />
      <Rect x="0" y="395" rx="5" ry="5" width="65%" height="8" />
      <Rect x="75%" y="395" rx="5" ry="5" width="30%" height="8" />
      <Rect x="0" y="415" rx="5" ry="5" width="65%" height="8" />
      <Rect x="75%" y="415" rx="5" ry="5" width="30%" height="8" />
      <Rect x="0" y="445" rx="5" ry="5" width="65%" height="8" />
      <Rect x="75%" y="445" rx="5" ry="5" width="30%" height="8" />
      <Rect x="0" y="465" rx="5" ry="5" width="65%" height="8" />
      <Rect x="75%" y="465" rx="5" ry="5" width="30%" height="8" />
      <Rect x="0" y="485" rx="5" ry="5" width="65%" height="8" />
      <Rect x="75%" y="485" rx="5" ry="5" width="30%" height="8" />
      <Rect x="0" y="505" rx="5" ry="5" width="65%" height="8" />
      <Rect x="75%" y="505" rx="5" ry="5" width="30%" height="8" />
      <Rect x="0" y="525" rx="5" ry="5" width="65%" height="8" />
      <Rect x="75%" y="525" rx="5" ry="5" width="30%" height="8" />
      <Rect x="75%" y="550" rx="5" ry="5" width="10%" height="10" />
      <Circle cx="76.5%" cy="590" r="18" />
      <Circle cx="80%" cy="590" r="18" />
      <Circle cx="83.5%" cy="590" r="18" />
      <Circle cx="87%" cy="590" r="18" />
      <Circle cx="90.5%" cy="590" r="18" />
      <Circle cx="94%" cy="590" r="18" /> 
    </ContentLoader>
  )
}

export default ResponsiveArticle