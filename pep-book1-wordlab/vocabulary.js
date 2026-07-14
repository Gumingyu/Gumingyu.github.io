const UNIT_META = [
  { id: "welcome", short: "W", label: "Welcome Unit", title: "A New Start", color: "#e55c44" },
  { id: "u1", short: "01", label: "Unit 1", title: "Teenage Life", color: "#25756d" },
  { id: "u2", short: "02", label: "Unit 2", title: "Travelling Around", color: "#d4932f" },
  { id: "u3", short: "03", label: "Unit 3", title: "Sports and Fitness", color: "#3972b7" },
  { id: "u4", short: "04", label: "Unit 4", title: "Natural Disasters", color: "#c34c55" },
  { id: "u5", short: "05", label: "Unit 5", title: "Languages Around the World", color: "#7a5a9e" }
];

const RAW_VOCABULARY = {
  welcome: `
exchange|n. 交换；交流；vt. 交换；兑换|core
lecture|n. 讲座；讲课；教训|core
registration|n. 登记；注册；挂号|extra
register|vt. & vi. 登记；注册|core
sex|n. 性别|core
female|adj. 女（性）的；雌的；n. 女子；雌性动植物|core
male|adj. 男（性）的；雄的；n. 男子；雄性动植物|core
nationality|n. 国籍；民族|core
nation|n. 国家；民族；国民|core
designer|n. 设计者|extra
design|n. 设计；设计方案；vt. 设计；筹划|core
campus|n. 校园；校区|core
formal|adj. 正式的；正规的|core
anxious|adj. 焦虑的；不安的|core
annoyed|adj. 恼怒的；生气的|extra
annoy|vt. 使恼怒；打扰|core
frightened|adj. 惊吓的；害怕的|core
p.m.|abbr. 下午；午后|core
a.m.|abbr. 上午；午前|core
senior|adj. 级别或地位高的；n. 较年长的人|core
senior high school|（美国）高中|core
at last|终于；最终|core
outgoing|adj. 爱交际的；外向的|core
impression|n. 印象；感想|core
impress|vt. 使钦佩；给……留下深刻印象|core
make an impression|留下好印象|core
what if|要是……会怎么样呢？|core
guy|n. 小伙子；男人；家伙|core
concentrate|vi. & vt. 集中注意力；聚精会神|core
concentrate on|集中精力于|core
experiment|n. 实验；试验|core
leave ... alone|不打扰；不惊动|core
awkward|adj. 令人尴尬的；难对付的|core
junior|adj. 地位或级别低的；n. 职位较低者；青少年|core
junior high school|（美国）初级中学|core
explore|vt. & vi. 探索；勘探|core
confident|adj. 自信的；有把握的|core
confidence|n. 信心；信任|core
forward|adv. 向前；前进；adj. 向前的|core
look forward to|盼望；期待|core
take notes|记笔记|core
flash|n. 光；信号；vi. 闪耀；发出信号|core
flash card|教学卡片；识字卡|core
organise|vt. 组织；筹备；安排；组建|core
organisation|n. 组织；团体；机构|core
goal|n. 目标；球门；射门|core
strategy|n. 策略；策划|core
partner|n. 同伴；配偶；合伙人|core
improve|vi. & vt. 改进；改善|core
curious|adj. 好奇的；求知欲强的|core
company|n. 公司；商行；陪伴|core
personality|n. 性格；个性|core
style|n. 方式；作风|core
revise|vt. & vi. 修改；修订；复习|core`,

  u1: `
teenage|adj. 十几岁的；青少年的|core
teenager|n. 13至19岁之间的青少年|core
ballet|n. 芭蕾舞|core
volunteer|n. 志愿者|core
debate|n. & v. 辩论；争论|core
prefer|vt. 较喜欢|core
prefer ... to ...|喜欢……多于……|core
content|n. 内容；目录；主题|core
movement|n. 动作；运动；活动|core
greenhouse|n. 温室；暖房|core
clean up|打扫或清除干净|core
suitable|adj. 合适的；适用的|core
suitable for|对……适合的|core
actually|adv. 事实上；的确|core
challenge|n. 挑战；艰巨任务；vt. 向……挑战|core
title|n. 名称；标题；职称；头衔|core
topic|n. 话题；标题|core
freshman|n. 大学或高中一年级新生|core
confusing|adj. 难以理解的；不清楚的|core
confuse|vt. 使糊涂；使迷惑|core
confused|adj. 糊涂的；迷惑的|core
fluent|adj. 流利的；熟练的|core
graduate|vi. & vt. 毕业；n. 毕业生|core
recommend|vt. 建议；推荐；介绍|core
sign up (for sth)|报名参加课程|core
advanced|adj. 高级的；高等的；先进的|core
advance|n. 前进；发展；v. 发展；促进|core
literature|n. 文学；文学作品|core
extra-curricular|adj. 课外的；课程以外的|extra
extra|adj. 额外的；附加的|core
obviously|adv. 显然；明显地|core
quit|vi. & vt. 停止；戒掉；离开|core
responsible|adj. 负责的；有责任的|core
responsibility|n. 责任；义务|core
be responsible for|对……负责|core
solution|n. 解决办法；答案|core
schedule|n. 工作计划；日程安排；vt. 安排；预定|core
editor|n. 主编；编辑；编者|core
plate|n. 盘子；碟子|core
adventure|n. 冒险；奇遇|core
youth|n. 青年时期；青春|core
survival|n. 生存；幸存；幸存事物|core
expert|n. 专家；行家；adj. 熟练的；内行的|core
behaviour|n. 行为；举止|core
generation|n. 一代人|core
attract|vt. 吸引；引起注意或兴趣|core
be attracted to|喜爱|core
focus|vi. & vt. 集中；调节焦距；n. 中心；焦点|core
focus on|集中；特别关注|core
addicted|adj. 有瘾的；上瘾的；入迷的|core
addict|n. 对……入迷的人；吸毒成瘾的人|core
addicted to|对……很入迷|core
adult|n. 成年人；adj. 成年的；成熟的|core
Chicago|芝加哥（美国城市）|proper
Seoul|首尔（韩国首都）|proper`,

  u2: `
castle|n. 城堡；堡垒|core
apply|vi. & vt. 申请；请求；vt. 应用；涂|core
apply for|申请|core
visa|n. 签证|core
rent|vt. 租用；出租；n. 租金|core
pack|vi. & vt. 收拾行李；包装；n. 纸包；大包|core
amazing|adj. 令人惊奇的；令人惊喜的|core
amazed|adj. 惊奇的；惊喜的|core
arrangement|n. 安排；筹备|core
extremely|adv. 极其；非常|core
source|n. 来源；出处|core
narrow|adj. 狭窄的；v. 使变窄|core
flat|adj. 平坦的；扁平的；n. 公寓|core
powerful|adj. 强有力的；有权势的；有影响力的|core
empire|n. 帝国|core
emperor|n. 皇帝|core
site|n. 地点；位置；现场|core
take control of|控制；接管|core
official|adj. 官方的；正式的；n. 官员；要员|core
recognise|vt. 辨别出；承认；认可|core
type|n. 类型；种类；vi. & vt. 打字|core
flight|n. 空中航行；航班；航程|core
accommodation|n. 住处；停留处；膳宿|core
unique|adj. 唯一的；独特的；特有的|core
path|n. 小路；路线；道路|core
destination|n. 目的地；终点|core
other than|除……以外|core
admire|vt. 钦佩；赞赏|core
architecture|n. 建筑设计；建筑学|core
architect|n. 建筑设计师|core
brochure|n. 资料或广告手册|core
package|n. 包裹；包装盒；vt. 将……包装好|core
package tour|包价旅游|core
contact|vt. 联络；联系；n. 联系；接触|core
civilisation|n. 文明；文明世界|core
make up|构成；形成|core
soldier|n. 士兵；军人|core
transport|n. 交通运输系统；vt. 运输；运送|core
hike|vi. 徒步旅行；n. 远足|core
economy|n. 经济；节约|core
economic|adj. 经济上的；经济学的|core
credit|n. 借款；信用；称赞；学分|core
credit card|信用卡|core
detail|n. 细节；详情；细微之处|core
check in|在旅馆、机场等登记|core
check out|结账离开旅馆等|core
request|n. & vt. 要求；请求|core
view|n. 视野；景色；看法|core
sight|n. 景象；视野；视力|core
statue|n. 雕塑；雕像|core
BCE|公元前|core
tomb|n. 坟墓|core
unearth|vt. 挖掘；发掘|core
comment|n. & vi. 评论；发表意见|core
the Eiffel Tower|埃菲尔铁塔|proper
Neuschwanstein Castle|新天鹅堡|proper
Iceland|冰岛|proper
Disneyland|迪士尼乐园|proper
Peru|秘鲁|proper
the Andes Mountains|安第斯山脉|proper
the Amazon rainforest|亚马孙雨林|proper
the Inca Empire|印加帝国|proper
Machu Picchu|马丘比丘|proper
Spain|西班牙|proper
Spanish|n. 西班牙语；西班牙人；adj. 西班牙的|proper
Cusco|库斯科（秘鲁城市）|proper
Lake Titicaca|的的喀喀湖|proper
the Uros|乌鲁斯人|proper
the Terracotta Army|兵马俑|proper`,

  u3: `
fitness|n. 健康；健壮；适合|core
soccer|n. 足球；足球运动|core
stadium|n. 体育场；运动场|core
boxing|n. 拳击运动|core
badminton|n. 羽毛球运动|core
marathon|n. 马拉松赛跑|core
event|n. 比赛项目；大事；公开活动|core
come along|跟随；到达；进步；赶快|core
ski|adj. 滑雪的；vi. 滑雪|core
host|vt. 主办；主持；n. 主人；主持人|core
track|n. 跑道；足迹；铁路轨道；v. 追踪|core
track and field|田径|core
gym|n. 健身房；体育馆|core
gymnastics|n. 体操训练|core
work out|锻炼；计算出；解决|core
sweat|v. 出汗；n. 汗水|core
make it|获得成功；准时到达|core
legend|n. 传奇故事或人物；传说|core
athlete|n. 运动员；运动健儿|core
master|n. 高手；主人；vt. 精通；掌握|core
set an example|树立榜样|core
honour|n. 荣誉；尊敬；荣幸|core
glory|n. 荣誉；光荣；赞美|core
medal|n. 奖章；勋章|core
championship|n. 锦标赛；冠军赛；冠军称号|core
champion|n. 冠军；优胜者|core
determination|n. 决心；决定|core
apart|adv. 分离；分开；成碎片|core
fall apart|破裂；破碎；崩溃|core
injure|vt. 使受伤；损害|core
injured|adj. 受伤的；有伤的|core
injury|n. 伤害；损伤|core
captain|n. 队长；船长；机长|core
lose heart|丧失信心；泄气|core
graceful|adj. 优美的；优雅的|core
strength|n. 力量；体力|core
failure|n. 失败；失败的人或事物|core
give up|放弃；投降|core
compete|vi. 竞争；对抗|core
make sense|有道理；合乎情理；表述清楚|core
pretend|vi. & vt. 假装；装扮|core
pretend to do sth|假装做某事|core
even if/though|即使；虽然|core
million|num. 一百万|core
cheat|vi. 作弊；舞弊；vt. 欺骗；n. 欺骗手段|core
audience|n. 观众；听众|core
positive|adj. 积极的；正面的；乐观的|core
slim|adj. 苗条的；单薄的|core
diet|n. 规定饮食；日常饮食；vi. 节食|core
make a difference|有作用或影响|core
rather|adv. 相当；有点儿|core
rather than|而不是|core
push-up|n. 俯卧撑|core
cut ... out|停止做或使用；剪下|core
now and then|有时；偶尔|core
compare ... with/to ...|与……比较|core
jog|vi. & n. 慢跑|core
stress|n. 压力；紧张；重音；v. 强调；焦虑不安|core
error|n. 错误；差错|core`,

  u4: `
disaster|n. 灾难；灾害|core
tornado|n. 龙卷风；旋风|core
drought|n. 旱灾；久旱|core
landslide|n. 山地或悬崖的崩塌；滑坡|core
slide|vi. & vt. 滑行；滑动|core
tsunami|n. 海啸|core
flood|n. 洪水；大量；v. 淹没；大量涌入|core
volcanic eruption|火山喷发|core
magnitude|n. 震级；重大|core
rescue|n. & vt. 营救；救援|core
damage|vt. 损害；破坏；n. 损坏；损失|core
destroy|vt. 摧毁；毁灭|core
evacuate|vt. 疏散；撤出；vi. 撤离|core
helicopter|n. 直升机|core
death|n. 死；死亡|core
affect|vt. 影响；疾病侵袭；使感染|core
shelter|n. 避难处；居所；庇护；v. 保护；躲避|core
crack|n. 裂纹；v. 破裂|core
gas|n. 气体；燃气；汽油|core
as if|似乎；好像；仿佛|core
ruin|n. & vt. 破坏；毁坏|core
in ruins|严重受损；破败不堪|core
percent|n. 百分之……；adj. & adv. 每一百中|core
brick|n. 砖；砖块|core
metal|n. 金属|core
shock|n. 震惊；休克；vt. 使震惊|core
in shock|震惊；吃惊|core
electricity|n. 电；电能|core
trap|vt. 使落入险境；n. 险境；陷阱|core
bury|vt. 埋葬；安葬|core
breathe|vi. & vt. 呼吸|core
revive|vt. & vi. 复活；使苏醒|core
revival|n. 振兴；复苏|core
effort|n. 努力；艰难的尝试；尽力|core
unify|vt. 统一；使成一体|core
wisdom|n. 智慧；才智|core
context|n. 上下文；语境；背景|core
suffer|vt. 遭受；蒙受；vi. 受苦|core
volcano|n. 火山|core
erupt|vi. & vt. 火山爆发；突然发生|core
supply|n. 供应量；补给品；vt. 供应；供给|core
typhoon|n. 台风|core
in the open air|露天；在户外|core
hurricane|n. 飓风|core
survive|vi. 生存；存活；vt. 幸存；艰难度过|core
power|n. 电力供应；能量；力量；控制力|core
tap|vi. & vt. 轻叩；轻敲；n. 水龙头|core
pipe|n. 管子；管道|core
whistle|v. 吹口哨；发出笛声；n. 哨子声|core
emergency|n. 突发事件；紧急情况|core
calm|adj. 镇静的；沉着的；vt. 使平静|core
aid|n. 援助；帮助；救援物资；vi. & vt. 帮助|core
kit|n. 成套工具；成套设备|core
first aid kit|急救箱|core
on hand|现有；在手边|core
crash|vt. & vi. 碰撞；撞击；n. 撞车；碰撞|core
sweep|vt. & vi. 打扫；清扫|core
sweep away|消灭；彻底消除|core
wave|n. 海浪；波浪；vi. & vt. 挥手|core
strike|v. 侵袭；突击；击打；n. 罢工；袭击|core
deliver|vt. 递送；传达；发表|core
summary|n. 总结；概括；概要|core
effect|n. 影响；结果；效果|core
length|n. 长；长度|core
Ecuador|厄瓜多尔|proper
Memphis|孟菲斯（美国城市）|proper
Alberta|艾伯塔（加拿大省名）|proper
Colombo|科伦坡（斯里兰卡城市）|proper
Sri Lanka|斯里兰卡|proper
Indonesia|印度尼西亚|proper
Thailand|泰国|proper
Malaysia|马来西亚|proper
Sumatra Island|苏门答腊岛|proper
Chandra Theeravit|钱德拉·特拉维特（人名）|proper`,

  u5: `
billion|num. 十亿|core
native|adj. 出生地的；本地的；n. 本地人|core
attitude|n. 态度；看法|core
reference|n. 指称关系；参考|core
refer|vi. 提到；参考；查阅；vt. 查询；叫……求助|core
refer to|指的是；描述；提到；查阅|core
system|n. 体系；制度；系统|core
despite|prep. 即使；尽管|core
ups and downs|浮沉；兴衰；荣辱|core
factor|n. 因素；要素|core
based|adj. 以某事为基础的；以……为重要部分|core
base|vt. 以……为据点；以……为基础；n. 底部；根据|core
date back (to ...)|追溯到|core
bone|n. 骨头；骨质|core
shell|n. 壳；壳状物|core
symbol|n. 符号；象征|core
carve|vt. & vi. 雕刻|core
dynasty|n. 王朝；朝代|core
variety|n. 变体；异体；多样化|core
major|adj. 主要的；重要的；n. 主修课程；vi. 主修|core
no matter where, who, what, etc.|不论……；不管……|core
dialect|n. 地方话；方言|core
means|n. 方式；方法；途径|core
classic|adj. 传统的；最优秀的；典型的；n. 经典作品|core
regard|n. 尊重；关注；vt. 把……视为|core
character|n. 文字；符号；角色；品质；特点|core
calligraphy|n. 书法；书法艺术|core
global|adj. 全球的；全世界的|core
affair|n. 公共事务；事件；关系|core
appreciate|vt. 欣赏；重视；感激；领会|core
specific|adj. 特定的；明确的；具体的|core
CE|公元|core
struggle|n. & vi. 斗争；奋斗；搏斗|core
tongue|n. 舌头；语言|core
point of view|观点；看法|core
semester|n. 学期|core
petrol|n. 汽油|core
subway|n. 地铁|core
apartment|n. 公寓套房|core
pants|n. 内裤；短裤；裤子|core
beg|vt. 恳求；祈求；哀求|core
equal|n. 同等的人；adj. 相同的；同样的|core
gap|n. 间隔；开口；差距|core
demand|n. 要求；需求；vt. 强烈要求；需要|core
vocabulary|n. 词汇|core
description|n. 描写；形容|core
relate|vt. 联系；讲述|core
relate to|与……相关；涉及；谈到|core
Korean|n. 朝鲜或韩国语、人；adj. 朝鲜或韩国的|proper
Danish|adj. 丹麦的；n. 丹麦语；丹麦人|proper
Denmark|丹麦|proper
Arabic|n. 阿拉伯语；adj. 阿拉伯的|proper
FIFA|国际足球联合会|proper`
};

const VOCABULARY = Object.entries(RAW_VOCABULARY).flatMap(([unit, raw]) =>
  raw.trim().split("\n").filter(Boolean).map((line, index) => {
    const [word, meaning, type = "core"] = line.split("|");
    return { id: `${unit}-${index + 1}`, unit, word: word.trim(), meaning: meaning.trim(), type: type.trim() };
  })
);
