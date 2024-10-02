import React from 'react'

const CartContext = React.CartContext({
  isDarkTheme: false,
  savedVideos: [],
  addToSavedVideos: () => {},
  activeTabItem: () => {},
  activeTab: '',
  onChangeTheme: () => {},
  removeSavedVideos: () => {},
})

export default CartContext
