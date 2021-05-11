import { lazy } from 'react'

const routes = [
    {
        path: '/test',
        component: lazy(() => import('../pages/Test')),
        meta: {
            title: '测试页面'
        },
        // 若有子页面，此为参考
        routes: [
            {
                path: '/test/demo',
                component:  lazy(() => import('../pages/Test/Demo'))
            },
            {
                path: '/test/demo2',
                component: lazy(() => import('../pages/Test/Demo2'))
            }
        ]
    },
    {
        path: '/index',
        component: lazy(() => import('../pages/Index')),
        // 如果要求严格路径
        isExact: true,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/home',
        component: lazy(() => import('../pages/Home')),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/login',
        component: lazy(() => import('../pages/Login')),
        meta: {
            title: '登录页面'
        }
    },
    {
        path: '/curriculum',
        component: lazy(() => import('../pages/Curriculum')),
        meta: {
            title: '选课'
        }
    },
    {
        path: '/mine',
        component: lazy(() => import('../pages/Mine')),
        meta: {
            title: '我的'
        }
    },
    {
        path: '/',
        component: lazy(() => import('../pages/Index')),
        meta: {
            title: '首页'
        }
    },
    {
        path: null,
        redirect: lazy(() => import('../pages/NotFound')),
        meta: {
            title: '404'
        }
    },
]

export default routes