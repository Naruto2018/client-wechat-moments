/*!
 * Fresns 微信小程序 (https://fresns.cn)
 * Copyright 2021-Present 唐杰
 * Licensed under the Apache-2.0 license
 */
import { fresnsConfig, fresnsLang, fresnsUser } from '../../../api/tool/function';
import { globalInfo } from '../../../utils/fresnsGlobalInfo';

Component({
  /** 组件的属性列表 **/
  properties: {
    user: Object,
    defaultValue: String,
  },

  /** 组件的初始数据 **/
  data: {
    fresnsUser: null,
    followersYouFollow: false,
    tabs: {},
    value: 0,
  },

  /** 组件数据字段监听器 **/
  observers: {
    user: async function (user) {
      if (!user) {
        return;
      }

      if (globalInfo.userLogin) {
        const fresnsUser = this.data.fresnsUser;

        this.setData({
          followersYouFollow: fresnsUser.uid != user.uid,
        });
      }
    },

    defaultValue: function (defaultValue) {
      let value = '';

      switch (defaultValue) {
        case 'followers':
          value = 0;
          break;

        case 'following':
          value = 1;
          break;

        case 'followersYouFollow':
          value = 2;
          break;
      }

      this.setData({
        value: value,
      });
    },
  },

  /** 组件生命周期声明对象 **/
  lifetimes: {
    attached: async function () {
      const tabs = {
        followers: await fresnsLang('userFollowing'),
        following: await fresnsConfig('user_follower_name'),
        followersYouFollow: await fresnsConfig('menu_profile_followers_you_follow'),
      };

      this.setData({
        tabs: tabs,
        fresnsUser: await fresnsUser('detail'),
      });
    },
  },

  /** 组件功能 **/
  methods: {
    onTabsClick: function (e) {
      const user = this.data.user;
      const fsid = user.fsid;
      const value = e.detail.value;

      let pagePath = '';

      switch (value) {
        case '0':
          pagePath = '/pages/profile/interactions/followers?fsid=' + fsid;
          break;

        case '1':
          pagePath = '/pages/profile/following/users?fsid=' + fsid;
          break;

        case '2':
          pagePath = '/pages/profile/interactions/followers-you-follow?fsid=' + fsid;
          break;
      }

      wx.redirectTo({
        url: pagePath,
      });
    },
  },
});
