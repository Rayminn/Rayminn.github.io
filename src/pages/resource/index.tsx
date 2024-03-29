import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import { PageMetadata } from '@docusaurus/theme-common'
import Layout from '@theme/Layout'
import ResourceCard from './_components/ResourceCard'
import BackToTopButton from '@theme/BackToTopButton'
import { resourceData } from '@site/data/resource'
import styles from './resource.module.css'

function CategoryNav() {
  const sidebar = {
    title: '',
    items: resourceData.map(w => ({ title: w.name, permalink: `#${w.name}` })),
  }

  return (
    <nav className={clsx(styles.sidebar, 'thin-scrollbar')}>
      <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
        {sidebar.title}
      </div>
      <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
        {sidebar.items.map(item => (
          <li key={item.permalink} className={styles.sidebarItem}>
            <Link
              isNavLink
              to={item.permalink}
              className={styles.sidebarItemLink}
              activeClassName={styles.sidebarItemLinkActive}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function CategoryList() {
  return (
    <div className={styles.category}>
      {resourceData.map(cate => (
        <div key={cate.name}>
          <div className={styles.cateHeader}>
            <h2 id={cate.name} className="anchor">
              {cate.name}
              <a
                className="hash-link"
                href={`#${cate.name}`}
                title={cate.name}
              ></a>
            </h2>
          </div>
          <section>
            <ul className={styles.resourceList}>
              {cate.resources.map(resource => (
                <ResourceCard key={resource.name} resource={resource} />
              ))}
            </ul>
          </section>
        </div>
      ))}
    </div>
  )
}

export default function Resources() {
  const title = '网址导航'
  const description = '激情推荐'

  return (
    <>
      <PageMetadata title={title} description={description} />
      <Layout>
        <div className="container margin-top--md">
          <div className="row">
            <aside className="col col--1">
              <CategoryNav />
            </aside>
            <main className="col col--11">
              <CategoryList />
              <BackToTopButton />
            </main>
          </div>
        </div>
      </Layout>
    </>
  )
}
