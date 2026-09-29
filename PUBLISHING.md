# 政策与支持页面发布说明

生成日期：2026-09-29。开发者：ZEHUI LIN（用户确认）。应用名称暂沿用 Catch the Capybara；邮箱沿用现有 contact_us 页面中的 catchthecapybara@outlook.com。

## 文件与语言入口

三个页面均为静态 HTML，共用 `assets/language.js`，不加载第三方字体、脚本或网页统计，无需登录。JavaScript 启用时，语言按钮切换正文，同一时间仅显示一种语言，并同步页面标题和 HTML lang。优先使用有效 URL 语言锚点，否则按浏览器语言偏好顺序匹配；en / ja / ko 分别匹配英文、日文、韩文，所有 zh 语言匹配繁中，无匹配时以英文兜底。`#en`、`#ja`、`#ko`、`#zh-Hant` 可直接指定语言，相关页面链接保留该语言。不使用 Cookie 或本地存储。禁用 JavaScript 时隐藏切换按钮，四语正文仍全部可读。部署时需一并上传 assets 目录。

- `privacy/index.html`：隐私政策。
- `terms_of_use/index.html`：使用条款。
- `support/index.html`：用户支持、问题反馈及隐私请求。

现有游戏代码链接到 GitHub Pages 路径中的 `/privacy/index` 和 `/terms_of_use/index`，本次保留 index.html 入口且不修改游戏代码。部署后需确认无扩展名的旧链接也能访问。

若继续使用现有代码中的站点地址，部署后的候选地址为：

- 隐私政策：<https://ll-studio-2026.github.io/Catch_the_Capybara/privacy/index.html>
- 使用条款：<https://ll-studio-2026.github.io/Catch_the_Capybara/terms_of_use/index.html>
- App Store Support URL：<https://ll-studio-2026.github.io/Catch_the_Capybara/support/index.html>

上述为候选地址，本次没有发布，也没有验证线上可访问性。`contact_us/index.html` 原有本地修改保持不动。

## 已确认的发行与广告计划

- 开发者名称：ZEHUI LIN。
- 已确认无登录、无云存档、当前无内购，广告平台仅 AdMob。四语页面已同步，移除原有假设存在购买的退款说明；此信息不代表游戏本体售价已确认，也不代表不收集 SDK 数据。
- 游戏不面向儿童；这不等于已确认商店年龄分级或所有用户均为成年人。
- 计划上架除欧洲、中国大陆和越南以外的所有地区；最终以 App Store Connect 逐项选择的国家和地区为准。“欧洲”不要仅按欧盟理解，需同时核对英国、瑞士等排除项。此计划不是游戏内地理封锁的证明，也不代表排除地区的用户绝不访问。
- 计划使用 AdMob 个性化广告，并请求 iOS ATT 授权。四语隐私正文已说明个性化广告及授权前提；是否已正确接入和配置尚未验证。
- ATT 提示、用户实际授权、地区要求的广告同意或退出选择是不同事项；ATT 授权不能替代其他适用要求。

## 发布前仍需确认的实质信息

当前文件是基于已提供信息及有限代码核对形成的完整四语草稿，不能将文案中的义务视为已完成的技术实现或法律适用审查。

1. 确认游戏正式商店名称、支持邮箱可接收邮件，以及 ZEHUI LIN 是否为实际运营者及个人信息处理主体。按发行地区要求补充经营地址、隐私负责人及适用的当地联系信息。
2. 已确认不面向儿童，四语隐私正文已同步。仍需确定 App Store 年龄分级及适当的广告年龄配置；不能据此假定全部用户已成年，也未擅自设定“仅限 13 岁以上”。
3. 当前 `SlimFirebaseIOS.mm` 初始化明确开启 Analytics 和 Crashlytics 收集。广告层提供 UMP / ATT 接口，但本次未找到完整的用户可见隐私选项接入流程；页面因此没有承诺具体的游戏内开关或同意前停止收集。应根据发行地区落实所需同意、撤回和 SDK 控制，并使实际行为与政策一致。ATT 拒绝不等同于关闭全部分析或诊断。
4. 用户提供的 GA4 媒体资源 `catch-the-capybara-5aec9` 截图已确认：事件数据 2 个月，用户数据 14 个月，“有新的用户活动时重置”开启。四语正文已同步这些设置；新的活动会重新起算用户层级期限，不会重设事件期限，标准汇总报表不受这些期限限制。此项不代表 Crashlytics 或 AdMob 的保存期限。仍需确认 Google 服务关联/广告个性化配置、Crashlytics 日志内容、服务数据删除流程与供应商备份清理规则（支持邮件方案见下文）。本次仅依据截图更新文案，未改动控制台设置。
5. 已确认无登录、无云存档、当前无内购，广告平台仅 AdMob。仍需核对 AdMob 控制台的广告合作方设置，以及是否设置 SDK 用户 ID 或自定义事件。本次未将插件提供的 API 等同于游戏已经使用这些功能；未来加入登录、云存档、内购或其他广告平台时，须同步政策、条款与 App Store 隐私标签。
6. 确认跨境处理主体、所在地、保障机制和适用地区的补充披露。计划发行的美国、韩国、日本、台湾等地区，应分别核对适用的广告退出权、委托、境外接收方、传输方式、期间、法律依据或联系人等要求。美国适用州的广告隐私选择需结合 AdMob UMP / GPP 或受限数据处理配置落实，不能由 ATT 替代。不能仅凭排除欧洲或提供对应语言就认定满足其他地区全部要求。
7. 使用条款将 Apple 标准 EULA 作为 iOS 授权基础，并保留不可排除的消费者权利。若 App Store Connect 配置自定义 EULA，需同步修订。未擅自指定未经确认的法律管辖地、强制仲裁、责任金额上限或答复时限。
8. 确认正式生效/更新日期。部署后核验三个 HTTPS 地址公开可访问，并分别填入 App Store Connect 对应字段。页面可访问不代表同意流程、隐私标签或审核已经通过。

## 支持邮件处理方案（已获授权采用）

这是本项目选择的日常运营规则，并非所有地区统一要求的法定期限。四语隐私政策与支持页已同步。没有更改 Outlook 设置、创建定时任务或执行真实邮件删除。

- 保存：处理期间保留，结案后最长 12 个月，用于问题跟进；不再需要时提前删除。记录结案日期，并在到期前安排清理，避免将“12 个月”变成无限期存档。
- 请求入口：catchthecapybara@outlook.com，建议主旨“删除支持邮件”，但其他明确表达删除意愿的邮件也受理。请用户尽量从原邮箱发信，提供原邮件日期或主题即可；无需游戏账号，不例行索取证件。
- 处理：从收到请求之日起记录期限，尽快确认范围，通常在 30 个日历日内回复并完成可受理的删除。适用法律有更短期限的优先遵守；核实不自动重置计时。依法延期或不能全部删除时，在适用期限内说明理由、范围和预计完成时间。
- 删除范围：查找收件箱、已发送、归档等相关邮件及附件，清理已删除项目中可控制的副本，并删除下载到本地或另行保存的相关附件。仅移动到回收站不视为操作完成。确认结果后告知用户，不在回复中重新附上已删除的敏感内容。
- 例外：法律要求或特定争议依法必须保留时，只保留必要部分，限制用途和访问，记录原因及复查时间，必要性消失后删除。不得用笼统“将来可能有用”长期保存。
- 备份：确认邮件供应商的可恢复项目、备份保留及清理机制。不可控制的供应商副本按其机制处理，不承诺立即从全部备份抹除。若自有备份恢复，应重新执行已记录的删除决定。
- 范围区分：该请求处理支持邮件，不能仅凭邮箱自动删除无关联的 Analytics / Crashlytics 记录。涉及这些服务时，另行核实可定位的信息及平台删除能力。

参考原则：[不再需要的个人信息应销毁或去识别化（OAIC）](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information)、[请求核实及法定处理期限示例（加州官方）](https://www.oag.ca.gov/privacy/ccpa)。具体法律是否适用仍以发行地区和实际运营情况判断。

## 参考资料

以下官方资料用于核对服务披露及审核要求；页面中的陈述仍需与正式发行版本一致。

- [Apple App Review：支持链接和有效联系信息、隐私政策链接](https://developer.apple.com/app-store/review/)
- [Apple App Store 隐私信息管理](https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy)
- [Apple 标准 EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/)
- [Google Mobile Ads iOS 数据披露](https://developers.google.com/admob/ios/privacy/data-disclosure)
- [Firebase Apple 平台数据披露](https://firebase.google.com/docs/ios/app-store-data-collection)
- [Firebase 隐私与安全](https://firebase.google.com/support/privacy)
- [Google 如何使用合作网站或应用的信息](https://policies.google.com/technologies/partner-sites)
- [Google AdMob 个性化与非个性化广告](https://support.google.com/admob/answer/7676680?hl=en)

- [Google UMP iOS 接入](https://developers.google.com/admob/ios/privacy)
- [Google AdMob 美国州隐私法律配置](https://developers.google.com/admob/ios/privacy/us-states)
- [Apple ATT](https://developer.apple.com/documentation/apptrackingtransparency)

- [Google Analytics 数据保留设置与活动重置规则](https://support.google.com/analytics/answer/7667196)

## 本次检查边界

仅检查静态 HTML 的标签结构、四种语言段落和锚点、相对链接目标、联系邮箱及开发者名称；未启动游戏、编辑器，未构建或执行功能测试，未进行浏览器视觉验证，未发送支持邮件，未部署网页。
