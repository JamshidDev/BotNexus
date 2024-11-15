import i18n from "../../i18n/index.js"
const {t} = i18n.global


export const useProductStore = defineStore('productStore', {
    state:()=>({
        list:[],
        totalItems:0,
        loading:false,
        saveLoading:false,
        deleteLoading:false,
        elementId:null,
        visible:false,
        visibleType:true,
        params:{
            search:null,
            page:1,
            size:10,
        },
        payload:{
            images:[],
            name:null,
            description:null,
            category:null,
            brand:null,
            remains:null,
            price:null,
            variants:[],
        },

    }),
    getters:{

    },
    actions:{
        _index(){
            this.loading = true
            $ApiService.productService._index({params:this.params}).then((res)=>{
                this.list = res.data.items
                this.totalItems = res.data.total
            }).finally(()=>{
                this.loading = false
            })
        },

        _create(){
            this.saveLoading = true
             let data = this.payload
            $ApiService.productService._create({data}).then((res)=>{
                this._index()
            }).finally(()=>{
                this.saveLoading = false
            })
        },
        _update(){
            this.saveLoading = true
            const id = this.elementId
            let data = this.payload
            $ApiService.productService._update({data, id}).then((res)=>{
                this._index()
            }).finally(()=>{
                this.saveLoading = false
            })
        },
        _delete(){
            this.deleteLoading = true
            const id = this.elementId
            $ApiService.productService._delete({id}).then((res)=>{
                this._index()
            }).finally(()=>{
                this.deleteLoading = false
            })
        },
        openVisible(v){
            this.visible = v
        },

        _resetForm(){
            this.elementId = null
            this.payload.name = null
            this.payload.description = null
            this.payload.category = null
            this.payload.remains = null
            this.payload.brand = null
            this.payload.category = null
            this.payload.price = null
            this.payload.variants = []
        },


    }
})