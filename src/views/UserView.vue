<template>
<div class="pippo">
  <VUserSearchForm/>
  <VUserProfile/>
</div>
</template>

<script>
import VUserProfile from '@/components/VUserProfile'
import VUserSearchForm from '@/components/VUserSearchForm'

export default {
  components: {
    VUserSearchForm,
    VUserProfile
  }
}
</script>
