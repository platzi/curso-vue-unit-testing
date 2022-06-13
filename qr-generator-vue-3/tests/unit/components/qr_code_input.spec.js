import { shallowMount } from '@vue/test-utils'

import QRCodeInput from '@/components/QRCodeInput.vue'
import { createStore } from 'vuex'

describe('QRCodeInput.vue', () => {
  describe('mouting a component', () => {
    it('renders qr code input component', () => {
      const wrapper = shallowMount(QRCodeInput)

      const component = wrapper.find('.hello')

      expect(component.classes()).toContain('hello')
    })
  })
  describe('mounting a component with its dependencies', () => {
    const store = createStore({
      state () {
        return { count: 1 }
      }
    })

    const wrapper = shallowMount(QRCodeInput,
      {
        global: {
          plugins: [store]
        }
      })

    it('renders generate qr code button with text', () => {
      const component = wrapper.find('#btn-generate')

      expect(component.text()).toBe('Generar QR')
    })
  })
})
