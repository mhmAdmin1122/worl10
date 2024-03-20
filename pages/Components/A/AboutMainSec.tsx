import React from 'react'

const AboutMainSec = () => {
  document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('cursor') as HTMLElement;

    document.addEventListener('mousemove', function(e: MouseEvent) {
        const x: number = e.clientX;
        const y: number = e.clientY;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
        (document.getElementById('container') as HTMLElement).style.backgroundPosition = (-x/10) + 'px ' + (-y/10) + 'px'; /* Background ka movement */
    });
});
  return (
    <div  id="container">
      <div className="cursor Hero-Sec-About flex flex-col items-center justify-center">
      </div>
    </div>
  )
}

export default AboutMainSec
