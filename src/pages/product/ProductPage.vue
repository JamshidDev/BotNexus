<script setup>
import {UIPageContent, UIPageFilter, UIDrawer} from "@/components/index.js"
import {useProductStore, useComponentStore} from "@/store/modules/index.js"
import Table from "./ui/Table.vue"
import createForm from "./ui/createFrom.vue"

const store = useProductStore()
const componentStore = useComponentStore()

const onAdd = ()=>{
  store.visibleType = true
  store.visible = true
  componentStore._categoryList()
}

onMounted(()=>{
  store._index()
})
</script>



<template>
  <UIPageContent>
    <UIPageFilter
        @on-add="onAdd"
        v-model:search="store.params.search"
    />
    <Table/>
    <UIDrawer
        v-model:visible="store.visible"
        :title="store.visibleType? $t('productPage.createTitle') : $t('productPage.updateTitle')"
    >
      <template #content>
        <createForm/>
      </template>
    </UIDrawer>
  </UIPageContent>
</template>
