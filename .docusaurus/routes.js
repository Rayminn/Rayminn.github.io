import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-theme-zen/en/about',
    component: ComponentCreator('/docusaurus-theme-zen/en/about', '5e4'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/en/archive',
    component: ComponentCreator('/docusaurus-theme-zen/en/archive', '74f'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/en/first-blog',
    component: ComponentCreator('/docusaurus-theme-zen/en/first-blog', '3a7'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/en/friends/',
    component: ComponentCreator('/docusaurus-theme-zen/en/friends/', '718'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/en/project/',
    component: ComponentCreator('/docusaurus-theme-zen/en/project/', '34f'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/en/resource/',
    component: ComponentCreator('/docusaurus-theme-zen/en/resource/', 'af5'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/en/search',
    component: ComponentCreator('/docusaurus-theme-zen/en/search', '399'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/en/tags',
    component: ComponentCreator('/docusaurus-theme-zen/en/tags', '760'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/en/tags/docusaurus-theme-zen',
    component: ComponentCreator('/docusaurus-theme-zen/en/tags/docusaurus-theme-zen', '8f9'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/en/tags/lifestyle',
    component: ComponentCreator('/docusaurus-theme-zen/en/tags/lifestyle', '8d8'),
    exact: true
  },
  {
    path: '/docusaurus-theme-zen/en/docs',
    component: ComponentCreator('/docusaurus-theme-zen/en/docs', 'c24'),
    routes: [
      {
        path: '/docusaurus-theme-zen/en/docs/Stack',
        component: ComponentCreator('/docusaurus-theme-zen/en/docs/Stack', '810'),
        exact: true,
        sidebar: "stack"
      }
    ]
  },
  {
    path: '/docusaurus-theme-zen/en/',
    component: ComponentCreator('/docusaurus-theme-zen/en/', 'ec2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
