export default {
  setCache(key, value) {
    let storage = window.sessionStorage,
      type = 'string'
    if ('object' === typeof(value)) {
      type = 'json'
      value = JSON.stringify(value)
    }

    try {
      storage.setItem(key, JSON.stringify({type: type, value: value}))
    } catch (ex) {
      if (ex.name === 'QuotaExceededError') {
        console.error('超出本地存储限额！');
      }
    }
  },
  getCache(key) {
    let storage = window.sessionStorage,
      data = storage.getItem(key)
    if (data !== null) {
      data = JSON.parse(data)
      if ('json' === data.type) {
        data.value = JSON.parse(data.value)
      }

      return data.value
    }

    return data
  },
  delCache(key) {
    let storage = window.sessionStorage
    storage.removeItem(key)
  },
  // 本地存储
  saveData(key, value, expire = 0) {
    let storage = window.localStorage,
      type = 'string', now = Date.parse(new Date())
    if ('object' === typeof(value)) {
      type = 'json'
      value = JSON.stringify(value)
    }

    if (expire !== 0) {
      expire = now + expire
    }

    try {
      storage.setItem(key, JSON.stringify({type: type, value: value, expire: expire}))
    } catch (ex) {
      if (ex.name === 'QuotaExceededError') {
        console.error('超出本地存储限额！');
      }
    }
  },
  delExpireData() {
    let storage = window.localStorage,
      now = Date.parse(new Date())
    for (let i = 0; i < storage.length; i++) {
      const key = storage.key(i)
      if (key) {
        let data = storage.getItem(key)
        if (data.expire !== 0 && now > data.expire) {
          this.delData(key)
        }
      }
    }
  },
  getData(key) {
    let storage = window.localStorage,
      data = storage.getItem(key),
      now = Date.parse(new Date())
    if (data !== null) {
      data = JSON.parse(data)

      if (data.expire !== 0 && now > data.expire) {
        this.delData()
        return null
      }

      if ('json' === data.type) {
        data.value = JSON.parse(data.value)
      }

      return data.value
    }

    return data
  },
  delData(key) {
    let storage = window.localStorage
    storage.removeItem(key)
  },
  // 本地存储 end
}
