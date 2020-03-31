// DVue类：
// 1. 对传入data对象执行响应话处理

class Dvue {
  // new Dvue实例的时候传入的配置项
  constructor(options) {
    // 保存选项
    this.$options = options;

    // 保存data
    this.$data = options.data;

    // 对传入data对象执行响应化处理
    this.observe(this.$data)
  }

  observe(value) {
    // 参数必须市对象
    if (!value || typeof value !== 'object') return;

    Object.keys(value).forEach(key => {
      // 执行响应化
      this.defineReactive(value, key, value[key])
    })
  }
  // obj: data对象
  defineReactive(obj, key, val) {
    // 定义属性
    // 参数3是属性描述符，定义配置型，遍历性，可读，可写
    Object.defineProperty(obj, key, {
      get() {
        return val;
      },

      set(newVal) {
        if (newVal === val) {
          return
        }

        val = newVal
      }
    })
  }
}