//自定义新路由文件
import Home from "@/views/home/home";
import Index from "@/views/home/index";
import Category from "@/views/home/category";
import Cart from "@/views/home/cart";
import Me from "@/views/home/me";

import goodsCate from "@/views/goods/cate";
import goodsSearch from"@/views/goods/search";

export default [{
    path: "/",
    name: "/",
    component: Home,
    redirect: "/index",
    children: [
        {
            path: "/category",
            name: "category",
            component: Category,
            meta:{
                title:"严选商城-分类"
            }
        }, {
            path: "/index",
            name: "index",
            component: Index,
            meta:{
                title:"严选商城-首页"
            }
        }, {
            path: "/cart",
            name: "cart",
            component: Cart,
            meta:{
                title:"严选商城-购物车"
            }
        }, {
            path: "/me",
            name: "me",
            component: Me,
            meta:{
                title:"严选商城-个人中心"
            }
        }
    ]
},
{
    path:"/goods/cate/:cid",
    name:"goods_cate",
    component: goodsCate,
    meta:{
        title:"严选商城-商品分类列表"
    }
},{
    path:"/goods/search",
    name:"goods_search",
    component:goodsSearch,
    meta:{
        title:"严选商城-商品搜索"
    }
}
];