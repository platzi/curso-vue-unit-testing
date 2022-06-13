import { shallowMount } from '@vue/test-utils'

import QRCodeInput from '@/components/QRCodeInput.vue'

describe('QRCodeInput.vue', () => {
  describe('mouting a component', () => {
    it('renders qr code input component', () => {
      const wrapper = shallowMount(QRCodeInput)

      const component = wrapper.find('.hello')

      expect(component.classes()).toContain('hello')
    })
  })
})
