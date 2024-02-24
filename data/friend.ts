export const Friends: Friend[] = [
  {
    title: 'whk-wiki',
    description: 'OIer的whk复健指南',
    website: 'https://whk-wiki.github.io',
    avatar: '/assets/images/avatar.png',
  },
  //请按照以上格式提交请求，avatar可以是超链接。
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}
