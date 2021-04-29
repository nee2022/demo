export default [
  {
    path: '/',
    redirect: '/dashboard',
    routes: [
      {
        path: '/com1',
        name: '首页',
        component: '@/pages/components/com1/index',
      },
      {
        path: '/com2',
        name: '考勤',
        component: '@/pages/components/com2/index',
      },
      // {
      //   path: '/detail/living',
      //   name: '生活',
      //   component: '@/pages/detail/living/index',
      // },
      // {
      //   path: '/detail/region',
      //   name: '区域',
      //   component: '@/pages/detail/region/index',
      // },
      {
        redirect: '/com1',
      },
    ],
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: '@/pages/user/login',
      },
    ],
  },
  {
    path: '/dashboard',
    name: '概览',
    component: '@/pages/dashboard/index',
  },
  {
    path: '/detail',
    name: '园长端',
    routes: [
      {
        path: '/detail/home',
        name: '首页',
        component: '@/pages/detail/home/index',
      },
      {
        path: '/detail/attendance',
        name: '考勤',
        component: '@/pages/detail/attendance/index',
        routes: [
          {
            path: '/detail/attendance/com1',
            component:
              '@/pages/detail/attendance/components/PersonalAttendance/components/com1',
          },
          {
            path: '/detail/attendance/com2',
            component:
              '@/pages/detail/attendance/components/PersonalAttendance/components/com2',
          },
        ],
      },
      // {
      //   path: '/detail/living',
      //   name: '生活',
      //   component: '@/pages/detail/living/index',
      // },
      // {
      //   path: '/detail/region',
      //   name: '区域',
      //   component: '@/pages/detail/region/index',
      // },
      {
        redirect: '/detail/home',
      },
    ],
  },
  {
    name: '系统管理',
    path: '/setting',
    routes: [
      {
        path: '/setting/menu',
        name: '菜单管理',
        component: '@/pages/setting/menu',
      },
      {
        path: '/setting/role',
        name: '角色管理',
        component: '@/pages/setting/role',
      },
      {
        path: '/setting/user',
        name: '用户管理',
        component: '@/pages/setting/user',
      },
      {
        redirect: '/setting/menu',
      },
    ],
  },
  {
    component: './404',
  },
];
