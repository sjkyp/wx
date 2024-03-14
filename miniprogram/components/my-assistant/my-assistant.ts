import { assistantRole } from '@utils/config';

Component({
  options: {
    multipleSlots: true
  },
  properties: {
    extClass: {
      type: String,
      value: ''
    }
  },
  data: {
    role: {}
  },
  lifetimes: {
    attached() {
      
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    test(show: boolean) {
      
    }
  }
})
