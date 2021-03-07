import React from 'react'

function RatingStar({ isStarred, isPartiallyFullStar }) {
  let fill = isStarred ? "currentColor" : "none";

  const renderFilledStar = () => <svg fill={fill}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-6 h-6 text-sp-btn-primary"
    viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
    </path>
  </svg>

  const renderPartialStar = () => <svg
    fill="currentColor"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-6 h-6 text-sp-btn-primary" viewBox="0 0 510 510" style={{ enableBackground: "new 0 0 510 510" }} >
    <g>
      <g id="star-half">
        <path d="M510,197.472l-183.37-15.734L255,12.75l-71.629,168.988L0,197.472l0,0l0,0l139.103,120.539L97.41,497.25L255,402.186l0,0
l157.59,95.039l-41.692-179.239L510,197.472z M255,354.348V117.172l43.605,102.918l111.689,9.588l-84.711,73.389l25.398,109.166
L255,354.348z"/>
      </g>
    </g>
  </svg>

if(isPartiallyFullStar)
 {
   return renderPartialStar()
 } else {
   return renderFilledStar()
 }
}

export default RatingStar
