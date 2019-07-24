import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import UserView from '@/views/UserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'
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

  it('renders main child components', () => {
    // arrange
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({ state })
    })
    const userSearchForm = wrapper.find(VUserSearchForm)
    const userProfile = wrapper.find(VUserProfile)

    // assert
    expect(userSearchForm.exists()).toBe(true)
    expect(userProfile.exists()).toBe(true)
  })
})