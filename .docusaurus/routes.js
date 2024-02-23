import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '75a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ef'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ab9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f57'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e0f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '395'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '31d'),
    exact: true
  },
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
    path: '/tags/docusaurus-theme-zen',
    component: ComponentCreator('/tags/docusaurus-theme-zen', 'cfc'),
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
    component: ComponentCreator('/', '24c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
