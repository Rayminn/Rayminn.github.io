import { Friends } from './friend'

export interface Resource {
  name: string
  logo: string
  desc: string
  href: string
  tags?: string[]
}

export interface ResourceCategory {
  name: string
  resources: Resource[]
}

const friends: Resource[] = Friends.map(f => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  }
})

export const resourceData: ResourceCategory[] = [
  {
    name: '友链👨‍💻',
    resources: friends,
  },
  {
    name: '收藏站点',
    resources: [
      {
        name: '冬之纪行诗',
        desc: '一个集成度满分的MCaddon',
        logo: '/assets/images/resource/d2l.png',
        href: 'https://bluemarkstudio.gitee.io/thepoetryofwinter/',
      },
    ],
  },
]
