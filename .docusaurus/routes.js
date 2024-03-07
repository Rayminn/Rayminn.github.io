import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about',
    component: ComponentCreator('/about', '9ba'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive', 'f6e'),
    exact: true
  },
  {
    path: '/first-blog',
    component: ComponentCreator('/first-blog', '85b'),
    exact: true
  },
  {
    path: '/friends/',
    component: ComponentCreator('/friends/', '41b'),
    exact: true
  },
  {
    path: '/github-edu',
    component: ComponentCreator('/github-edu', '3ec'),
    exact: true
  },
  {
    path: '/project/',
    component: ComponentCreator('/project/', '4d4'),
    exact: true
  },
  {
    path: '/resource/',
    component: ComponentCreator('/resource/', 'fc3'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', 'd7d'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', '8c0'),
    exact: true
  },
  {
    path: '/tags/lifestyle',
    component: ComponentCreator('/tags/lifestyle', '705'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8a2'),
    routes: [
      {
        path: '/docs/Stack',
        component: ComponentCreator('/docs/Stack', '158'),
        exact: true,
        sidebar: "stack"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '398'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
