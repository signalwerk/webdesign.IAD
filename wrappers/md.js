import React from 'react'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    return (
      <div className="markdown">
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <div className="content">
          <div className='header'></div>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
          <div className='footer'>{post.title} · Dipl. Gestalter/in HF, Kommunikationsdesign</div>

        </div>
      </div>
    )
  },
})
