// Creating a custom-top level App component to persist state through all children components

import App, { Container } from 'next/app'
import React from 'react'
import Page from '../components/Page'

class MyApp extends App {
  render () {
    const { Component } = this.props
    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    )
  }
}

export default MyApp
