import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = (props) => (
  (props.icon)
    ? <FontAwesomeIcon icon={props.icon} />
    : null
)

export default Icon