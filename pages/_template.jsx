import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import 'normalize.css/normalize.css';
import '../css/signalwerk/signalwerk.scss'


module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: '1.65rem',
          }}
          style={{
            background: 'lightgray',
          }}
        >
          <Container
            style={{
              maxWidth: 940,
              paddingTop: 0,
              padding: '1.65rem 1.2375rem',
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Home
            </Link>
          </Container>
        </Headroom>
        <Container
          style={{
            maxWidth: 940,
            padding: '1.65rem 1.2375rem',
            paddingTop: 0,
            position: 'relative',
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
