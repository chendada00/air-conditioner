import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import * as pkg from '~/../package.json'

const socialList = [
  {
    type: 'github',
    color: 'inherit',
    icon: 'i-mdi-github',
    label: 'GitHub: YunYouJun',
    href: 'https://github.com/YunYouJun',
  },
  {
    type: 'telegram',
    color: '#1da1f2',
    icon: 'i-mdi-telegram',
    label: 'Telegram Channel',
    href: 'https://t.me/elpsycn',
  },
  {
    type: 'weibo',
    color: '#DB2828',
    icon: 'i-mdi-sina-weibo',
    label: '微博：机智的云游君',
    href: 'http://weibo.com/jizhideyunyoujun',
  },
  {
    type: 'twitter',
    color: '#1da1f2',
    icon: 'i-mdi-twitter',
    label: 'Twitter: YunYouJun',
    href: 'https://twitter.com/YunYouJun',
  },
  {
    type: 'wechat',
    color: '#1AAD19',
    icon: 'i-mdi-wechat',
    label: '微信公众号：云游君',
    href: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
  },
  {
    type: 'blog',
    color: '#6435C9',
    icon: 'i-mdi-earth',
    label: '博客：yunyoujun.cn',
    href: 'http://www.yunyoujun.cn',
  },
]

const Copyright: React.FC = () => {
  return (
    <div className="opacity-80 text-xs text-center mt-8">
      <div className="ac-text flex justify-center items-center m-2">
        {'© '}
        <a href={pkg.repository.url} target="_blank" rel="noreferrer">
          @伴随&emsp;
        </a>
        <svg t="1711865361544" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="1850" width="17" height="17">
          <path
              d="M945.2 661.7H198.1c-23.5 0-42.7-19.2-42.7-42.7V426.9c0-23.5 19.2-42.7 42.7-42.7h725.7c12.8 0 21.3 8.5 21.3 21.3v256.2z"
              fill="#FFC522" p-id="1851"></path>
          <path
              d="M945.2 320.2v341.5H91.4V320.2h853.8m0-42.7H91.4c-23.5 0-42.7 19.2-42.7 42.7v341.5c0 23.5 19.2 42.7 42.7 42.7h853.8c23.5 0 42.7-19.2 42.7-42.7V320.2c-0.1-23.5-19.3-42.7-42.7-42.7z"
              fill="" p-id="1852"></path>
          <path
              d="M774.4 373.5v21.3H646.3v-21.3h128.1m0-21.3H646.3c-12.8 0-21.3 8.5-21.3 21.3v21.3c0 12.8 8.5 21.3 21.3 21.3h128.1c12.8 0 21.3-8.5 21.3-21.3v-21.3c0-12.8-8.5-21.3-21.3-21.3zM870.4 369.3c8.5 0 17.1 6.4 17.1 17.1 0 10.7-6.4 17.1-17.1 17.1-10.7 0-17.1-6.4-17.1-17.1 0.1-10.7 8.6-17.1 17.1-17.1m0-17.1c-17.1 0-32 14.9-32 32s14.9 32 32 32 32-14.9 32-32-14.9-32-32-32z"
              fill="" p-id="1853"></path>
          <path
              d="M902.5 565.6H134.1c-6.4 0-10.7-4.3-10.7-10.7 0-6.4 4.3-10.7 10.7-10.7h768.4c6.4 0 10.7 4.3 10.7 10.7-0.1 6.5-4.3 10.7-10.7 10.7z"
              fill="" p-id="1854"></path>
          <path
              d="M902.5 629.7H134.1c-6.4 0-10.7-4.3-10.7-10.7s4.3-10.7 10.7-10.7h768.4c6.4 0 10.7 4.3 10.7 10.7s-4.3 10.7-10.7 10.7z"
              fill="" p-id="1855"></path>
          <path
              d="M215.2 815.4l21.3 10.7V824c4.3-12.8 10.7-32 4.3-49.1-6.4-19.2-12.8-32-14.9-38.4l32 6.4s12.8 21.3 2.1 49.1c-4.3 12.8-8.5 23.5-14.9 34.2l-2.1 6.4 21.3-6.4-27.7 36.3-21.4-47.1z"
              fill="" p-id="1856"></path>
          <path
              d="M230.1 740.6l23.5 4.3c2.1 6.4 10.7 23.5 2.1 47-4.3 12.8-8.5 23.5-14.9 34.2l-4.3 10.7 10.7-4.3 6.4-2.1-19.2 25.6-14.9-34.2 10.7 6.4 6.4 2.1 2.1-6.4c4.3-12.8 10.7-34.2 4.3-51.2-4.3-12.8-8.6-25.6-12.9-32.1m-10.7-6.4s10.7 14.9 19.2 42.7c4.3 17.1 0 34.2-4.3 47L208.7 809l27.7 57.6 34.2-47-23.5 6.4c4.3-8.5 8.5-19.2 14.9-34.2 10.7-29.9-4.3-53.4-4.3-53.4l-38.3-4.2z m49.1 85.4zM388.1 817.5l21.3 8.5v-2.1c2.1-14.9 4.3-34.2-4.3-49.1-8.5-17.1-17.1-27.7-21.3-34.2h32s14.9 19.2 10.7 49.1c-2.1 12.8-4.3 23.5-8.5 36.3l-2.1 6.4 19.2-8.5-19.2 40.6-27.8-47z"
              fill="" p-id="1857"></path>
          <path
              d="M415.8 740.6c4.3 4.3 14.9 21.3 10.7 44.8-2.1 12.8-4.3 23.5-8.5 36.3l-4.3 10.7 10.7-6.4 6.4-4.3-14.9 29.9-21.3-29.9 10.7 4.3 6.4 2.1 2.1-6.4c2.1-14.9 4.3-34.2-4.3-51.2-6.4-12.8-12.8-23.5-19.2-29.9h25.5m2.1-4.2h-38.4s12.8 12.8 25.6 38.4c8.5 14.9 6.4 34.2 4.3 49.1l-27.7-10.7 36.3 51.2 25.6-51.2-21.3 10.7c2.1-8.5 6.4-21.3 8.5-36.3 6.4-32-12.9-51.2-12.9-51.2z m25.7 76.8z"
              fill="" p-id="1858"></path>
          <path
              d="M774.4 823.9l21.3 6.4-2.1-6.4c-4.3-10.7-10.7-21.3-14.9-34.2-10.7-27.7 4.3-49.1 4.3-51.2l29.9-4.3c-4.3 6.4-10.7 19.2-14.9 38.4-4.3 17.1 0 36.3 4.3 49.1v2.1l21.3-10.7-21.5 44.9-27.7-34.1z"
              fill="" p-id="1859"></path>
          <path
              d="M806.4 740.6c-4.3 6.4-8.5 19.2-12.8 34.2-4.3 17.1 0 38.4 4.3 51.2l2.1 6.4 6.4-2.1 10.7-6.4-15 34.1-19.2-25.6 6.4 2.1 10.7 4.3-4.3-10.7c-4.3-10.7-10.7-21.3-14.9-34.2-8.5-23.5 0-40.6 2.1-47l23.5-6.3m10.7-6.4z m0 0l-38.4 6.4s-14.9 23.5-4.3 53.4c4.3 14.9 10.7 25.6 14.9 34.2l-23.5-6.4 34.2 47 27.7-57.6-25.6 14.8c-4.3-12.8-8.5-32-4.3-47 8.6-31.9 19.3-44.8 19.3-44.8z m10.7 74.7z"
              fill="" p-id="1860"></path>
          <path
              d="M599.4 819.6l19.2 8.5-2.1-6.4c-2.1-10.7-6.4-23.5-8.5-36.3-6.4-29.9 12.8-49.1 12.8-49.1h29.9c-4.3 6.4-12.8 17.1-21.3 34.2-8.5 14.9-6.4 36.3-4.3 49.1v2.1l21.3-8.5-29.9 40.6-17.1-34.2z"
              fill="" p-id="1861"></path>
          <path
              d="M646.3 740.6c-4.3 6.4-12.8 17.1-19.2 29.9-8.5 17.1-6.4 36.3-4.3 51.2l2.1 6.4 6.4-2.1 10.7-4.3-21.3 29.9-14.9-29.9 6.4 4.3 10.7 6.4-4.3-10.7c-2.1-10.7-6.4-23.5-8.5-36.3-4.3-23.5 6.4-40.6 10.7-44.8h25.5m10.7-4.2z m0 0h-38.4s-19.2 19.2-12.8 51.2c2.1 14.9 6.4 27.7 8.5 36.3L593 813.2l25.6 51.2 36.3-51.2-27.7 10.7c-2.1-12.8-4.3-32 4.3-49.1 12.7-25.6 25.5-38.4 25.5-38.4z m-2.1 76.8z"
              fill="" p-id="1862"></path>
        </svg>
        {/*<a href={pkg.author.url} target="_blank" rel="noreferrer">*/}
        {/*  云游君 @*/}
        {/*  {pkg.author.name}*/}
        {/*</a>*/}
        &emsp;{`${new Date().getFullYear()}`}
      </div>
      {/*<p>*/}

      {/*</p>*/}
      {/*<div className="text-center">*/}
      {/*  {socialList.map(item => (*/}
      {/*    <Tooltip title={item.label} arrow key={item.type}>*/}
      {/*      <IconButton*/}
      {/*        sx={{ color: item.color }}*/}
      {/*        href={item.href}*/}
      {/*        target="_blank"*/}
      {/*      >*/}
      {/*        <div className={`${item.icon} text-lg`} />*/}
      {/*      </IconButton>*/}
      {/*    </Tooltip>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  )
}

export default Copyright
