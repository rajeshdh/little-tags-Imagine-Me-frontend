import StarFullIcon from '../../../IconSet/StarFullIcon'

function RatingStar({ isStarred }) {
  return isStarred ? <StarFullIcon
    className={isStarred ? 'fill-current stroke-current text-sp-btn-primary' : ''}
  />: <StarFullIcon
  className={isStarred ? '' : 'stroke-current text-sp-btn-primary'}
/>
}

export default RatingStar
