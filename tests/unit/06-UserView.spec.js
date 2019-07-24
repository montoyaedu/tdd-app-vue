jest.mock('@/store/actions')
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import UserView from '@/views/UserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'
import initialState from '@/store/state'
import actions from '@/store/actions'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('UserView', () => {
  let state

  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({
        state,
        actions,
      })
    })

    return {
      wrapper,
      userSearchForm: () => wrapper.find(VUserSearchForm),
      userProfile: () => wrapper.find(VUserProfile)
    }
  }

  beforeEach(() => {
    jest.resetAllMocks()
    state = { ...initialState }
  })

  it('searches for a user when received "submitted"', () => {
    // arrange
    const expectedUser = 'kuroski'
    const { userSearchForm } = build()

    // act
    userSearchForm().vm.$emit('submitted', expectedUser)

    // assert
    expect(actions.SEARCH_USER).toHaveBeenCalled()
    expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual({ username: expectedUser })
  })

})