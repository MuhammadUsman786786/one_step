import React from 'react'
import { useEffect } from 'react'

const Tooltip = ({ value = 0, bubble_color = '', bubble_percent = 0, index }) => {

  useEffect(() => {
    var style = document.createElement("style");
    // Append the style tag to head
    document.head.appendChild(style);
    // Grab the stylesheet object
    const sheet = style.sheet
    // Use addRule or insertRule to inject styles
    sheet.addRule(`.tip_${index}::before`, `border-color: ${bubble_color} transparent transparent`);
    sheet.insertRule(`.tip_${index}::before { border-color: ${bubble_color} transparent transparent}`, 0)
  }, [])
  let marginLeft = ((bubble_percent * 100) - 20)
  return <div className={`custom-tooltip tip_${index}`} style={{ marginLeft: `${marginLeft}%`, background: bubble_color }}>
    {value}
  </div>
}

export default Tooltip