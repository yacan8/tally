function success(options) {
  wx.showToast(options)
}

function info(options) {
  wx.showToast(Object.assign(options, {
    icon: 'none'
  }))
}

export default {
  success: function(title) {
    if (typeof title === 'string') {
      success({title})
    } else {
      success(title)
    }
  },
  info: function(title) {
    if (typeof title === 'string') {
      info({title})
    } else {
      info(title)
    }
  }
}