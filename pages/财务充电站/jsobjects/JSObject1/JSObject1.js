export default {
	initData: () => {
		postWindowMessage({ type: 'FIXED_TOP_FULL_WIDTH', class: 't--widget-header' }, 'window', "*");
	},
	saveFormData: async () => {
		formJson.setText(appsmith.URL.fullPath + '\n' + JSON.stringify(JSONForm1.formData));
	},
	tabClick: async () => {
		if (Tabs1.selectedTab === '领取资料') {
			navigateTo('https://work.weixin.qq.com/ca/cawcde4d453a8ae728?customer_channel=link-3743-#%E8%8E%B7%E5%AE%A2%E6%89%8B%E6%9C%BA%E5%8F%B7#', {}, 'NEW_WINDOW');
		} else if (Tabs1.selectedTab === '本月直播') {
			postWindowMessage({ type: 'SCROLL_DOM_BY_CLASS', class: 't--widget-imagecarousel' }, '*', "*");
		} else if (Tabs1.selectedTab === '精选课程') {
			postWindowMessage({ type: 'SCROLL_DOM_BY_CLASS', class: 't--widget-title2' }, '*', "*");
		}

	}
}