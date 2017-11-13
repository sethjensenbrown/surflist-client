import React from 'react';


//this will display Amazon Ads on non-mobile browsers
export default function Aside() {
	return (
		<aside className="medium-2 columns hide-for-small">
        	<iframe title="Amazon Ad - Wetsuit" style={{width:120, height:240, marginWidth: 0, marginHeight: 0}} scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=surfsites-20&marketplace=amazon&region=US&placement=B01GSYCFCC&asins=B01GSYCFCC&linkId=897629ec7ca32e720a4b93a30b8fea3a&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>
            <iframe title="Amazon Ad - Poncho" style={{width:120, height:240, marginWidth: 0, marginHeight: 0}} scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=surfsites-20&marketplace=amazon&region=US&placement=B01CV1P9UG&asins=B01CV1P9UG&linkId=ddf41de2fb6708d0dee861be989d65be&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>
            <iframe title="Amazon Ad - Leash" style={{width:120, height:240, marginWidth: 0, marginHeight: 0}} scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=surfsites-20&marketplace=amazon&region=US&placement=B00149YGWO&asins=B00149YGWO&linkId=3ef91bc7d07777a699724915c4b2a235&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>
        </aside>
	);
};