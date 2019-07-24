import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import UserView from '@/views/UserView'
import initialState from '@/store/state'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('UserView', () => {
  let state

  beforeEach(() => {
    state = { ...initialState }
  })

  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({ state })
    })

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})