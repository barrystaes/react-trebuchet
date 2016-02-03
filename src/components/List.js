import React, { Component, PropTypes } from 'react'

export default class List extends Component {
  render() {
    const {
      isFetching,
      items, renderItem, loadingLabel
      } = this.props

    const isEmpty = items.length === 0
    if (isEmpty && isFetching) {
      return <h2><i>{loadingLabel}</i></h2>
    }

    return (
      <div>
        {items.map(renderItem)}
      </div>
    )
  }
}

List.propTypes = {
  loadingLabel: PropTypes.string.isRequired,
  renderItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
}

List.defaultProps = {
  isFetching: true,
  loadingLabel: 'Loading...'
}
