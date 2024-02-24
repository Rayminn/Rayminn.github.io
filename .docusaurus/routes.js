import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/about',
    component: ComponentCreator('/en/about', 'bfc'),
    exact: true
  },
  {
    path: '/en/archive',
    component: ComponentCreator('/en/archive', '285'),
    exact: true
  },
  {
    path: '/en/first-blog',
    component: ComponentCreator('/en/first-blog', 'c6b'),
    exact: true
  },
  {
    path: '/en/friends/',
    component: ComponentCreator('/en/friends/', 'd00'),
    exact: true
  },
  {
    path: '/en/project/',
    component: ComponentCreator('/en/project/', '391'),
    exact: true
  },
  {
    path: '/en/resource/',
    component: ComponentCreator('/en/resource/', '6fa'),
    exact: true
  },
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', 'b00'),
    exact: true
  },
  {
    path: '/en/tags',
    component: ComponentCreator('/en/tags', '12b'),
    exact: true
  },
  {
    path: '/en/tags/lifestyle',
    component: ComponentCreator('/en/tags/lifestyle', 'b10'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', '076'),
    routes: [
      {
        path: '/en/docs/Stack',
        component: ComponentCreator('/en/docs/Stack', '72a'),
        exact: true,
        sidebar: "stack"
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'b5c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
