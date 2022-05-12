import classNames from 'classnames'
import PropTypes from 'prop-types'


const Button = ({
   className = '',
   is_disabled,
   children,
   onClick,
   ...props
}) => {
   const classes = classNames(className)
   const button = (
      <button
         className={classes}
         onClick={onClick || undefined}
         disabled={is_disabled}
         {...props}
      >
        {children}
      </button>
   )

   return button
}


export default Button
