import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import UserView from '@/views/UserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('UserView', () => {
  let state
  
const build = () => {
  const wrapper = shallowMount(UserView, {
    localVue,
    store: new Vuex.Store({ state })
  })

    return {
      wrapper,
      userSearchForm: () => wrapper.find(VUserSearchForm),
      userProfile: () => wrapper.find(VUserProfile)
    }
  }
  
  it('renders the component', () => {
    // arrange
    const { wrapper } = build()
    
    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {
    // arrange
    const { userSearchForm, userProfile } = build()

    // assert
    expect(userSearchForm().exists()).toBe(true)
    expect(userProfile().exists()).toBe(true)
  })
})