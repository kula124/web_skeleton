import React from 'react'
import './styles/global.scss'
import './styles/global.module.scss'
import { Helmet } from 'react-helmet'

import icon from '../favicon.png'
import Favicon from 'react-favicon'

const app = () => (
  <>
    <Helmet>
      <title>WebSkeleton for React!</title>
    </Helmet>
    <Favicon url={icon} />
    <h1>
      <p styleName='test-module'>Testing 123</p>
      <p className='test'>Welcome to React!</p>
    </h1>
  </>
)

export default app
