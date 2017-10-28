import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled('div')``

const CTALink = styled('a')`
  color: palevioletred;
  font-weight: bold;
`

const PreviewImage = styled('img')`
  border: 2px solid white;
`

const TitleAndCTA = styled('h2')``

const TitleAndCTAInner = styled('div')`
  h2 {
    color: red;
    font-size: 1.8rem;
  }

  span {
    color: black;
    font-size: 1rem;
  }
`

class FeaturedItem extends Component {
  render() {
    return (
      <Container>
        <PreviewImage>
          <img src="" alt="" />
        </PreviewImage>
        <TitleAndCTA>
          <TitleAndCTAInner>
            <h2>
              Featured:<span>Ground Rules</span>
            </h2>
          </TitleAndCTAInner>
          <CTALink />
        </TitleAndCTA>
      </Container>
    )
  }
}

export default FeaturedItem
