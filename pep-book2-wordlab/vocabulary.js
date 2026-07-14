const UNIT_META = [
  { id: "u1", short: "01", label: "Unit 1", title: "Cultural Heritage", color: "#e55c44" },
  { id: "u2", short: "02", label: "Unit 2", title: "Wildlife Protection", color: "#25756d" },
  { id: "u3", short: "03", label: "Unit 3", title: "The Internet", color: "#d4932f" },
  { id: "u4", short: "04", label: "Unit 4", title: "History and Traditions", color: "#3972b7" },
  { id: "u5", short: "05", label: "Unit 5", title: "Music", color: "#7a5a9e" }
];

const RAW_VOCABULARY = {
  u1: `
heritage|n. 遗产（指国家或社会长期形成的历史、传统和特色）|core
creatively|adv. 创造性地；有创造力地|core
creative|adj. 创造性的；有创造力的；有创意的|core
temple|n. 庙；寺|core
relic|n. 遗物；遗迹|core
mount|n. 山峰；vt. 爬上；骑上；vi. 爬；登上|core
former|adj. 以前的；前者的|core
clue|n. 线索；提示|core
preserve|vt. 保存；保护；维持；n. 保护区|core
promote|vt. 促进；提升；推销；晋级|core
cypress|n. 柏树|extra
app|n. 应用程序；应用软件|core
application|n. 申请表；用途；运用；应用程序|core
take part in|参与某事；参加某活动|core
give way to|让步；屈服|core
balance|n. 平衡；均匀；vt. 使平衡|core
keep balance|保持平衡|core
lead to|导致|core
dam|n. 水坝；拦河坝|core
proposal|n. 提议；建议|core
make a proposal|提出建议|core
protest|n. 抗议；vi. & vt. 公开反对；抗议|core
likely|adj. 可能的；adv. 可能地|core
turn to|向……求助|core
committee|n. 委员会|core
establish|vt. 建立；创立|core
limit|n. 限度；限制；vt. 限制；限定|core
prevent|vt. 阻止；阻碍；阻挠|core
prevent ... from ...|阻止；不准|core
loss|n. 丧失；损失|core
contribution|n. 捐款；贡献；捐赠|core
contribute|vi. & vt. 捐献；捐助|core
department|n. 部；司；科|core
fund|n. 基金；专款|core
within|prep. & adv. 在某段时间、距离或范围之内|core
investigate|vi. & vt. 调查；研究|core
issue|n. 重要议题；争论的问题；vt. 宣布；公布|core
conduct|n. 行为；举止；管理方法；vt. 组织；安排；带领|core
document|n. 文件；公文；计算机文档；vt. 记录；记载|core
donate|vt. 捐赠；赠送；献血|core
donate ... to ...|向……捐赠……|core
disappear|vi. 消失；灭绝；消亡|core
attempt|n. & vt. 企图；试图；尝试|core
make sure|确保；设法保证|core
worthwhile|adj. 值得做的；值得花时间的|core
download|vt. 下载；n. 下载；已下载的数据资料|core
republic|n. 共和国|core
professional|adj. 专业的；职业的；n. 专业人员；职业选手|core
archaeologist|n. 考古学家|core
entrance|n. 入口；进入|core
pyramid|n. 金字塔；棱锥体|core
process|n. 过程；进程；步骤；vt. 处理；加工|core
overseas|adj. 海外的；adv. 在海外|core
exit|n. 出口；通道；vi. & vt. 出去；离去|core
sheet|n. 一张纸；床单；被单|core
parade|n. 游行；检阅；vi. 游行庆祝；游行示威|core
mirror|n. 镜子|core
roof|n. 顶部；屋顶|core
chiwen|n. 鸱吻|extra
dragon|n. 龙|core
forgive|vt. & vi. 原谅；宽恕；vt. 对不起；请原谅|core
digital|adj. 数码的；数字显示的|core
image|n. 形象；印象|core
cave|n. 山洞；洞穴|core
throughout|prep. 各处；遍及；自始至终|core
quality|n. 质量；品质；素质；特征；adj. 优质的；高质量的|core
all over the world|在世界各地|core
tradition|n. 传统；传统的信仰或风俗|core
further|adv. 更远；进一步|core
historic|adj. 历史上著名或重要的；有史时期的|core
opinion|n. 意见；想法；看法|core
quote|vt. 引用|core
paraphrase|n. & v. 用更容易理解的文字解释|core
comparison|n. 比较；相比|core
contrast|n. & vt. 对比；对照|core
identify|vt. 确认；认出；找到|core
forever|adv. 永远；长久地|core
Aswan Dam|阿斯旺大坝|proper
the Nile|尼罗河|proper
Egypt|埃及|proper
Egyptian|adj. 埃及的|proper
UNESCO|联合国教科文组织|proper
Cairo|开罗（埃及首都）|proper
Tanzania|坦桑尼亚|proper
the Kremlin|克里姆林宫|proper
Moscow|莫斯科（俄罗斯首都）|proper
Saint Basil's Cathedral|圣瓦希里大教堂|proper
the Forbidden City|紫禁城|proper
Los Angeles|洛杉矶（美国城市）|proper`,

  u2: `
poster|n. 海报|core
illegal|adj. 不合法的；非法的|core
illegally|adv. 不合法地；非法地|core
hunt|vt. & vi. 打猎；搜寻；追捕|core
hunter|n. 猎人|core
immediately|adv. 立刻|core
species|n. 物种|core
shark|n. 鲨鱼|core
fin|n. 鱼的鳍|core
on earth|究竟；到底|core
die out|灭亡；逐渐消失|core
alarming|adj. 惊人的；使人惊恐的|core
alarm|vt. 使惊恐；使害怕；n. 恐慌；警报；警报器|core
rate|n. 速度；比率；vt. 划分等级|core
rating|n. 等级；级别|core
extinct|adj. 已灭绝的|core
extinction|n. 灭绝|core
mass|adj. 大量的；广泛的；n. 大量；堆；群|core
habitat|n. 动植物的生活环境；栖息地|core
aware|adj. 知道；发觉；有意识的|core
aware of|意识到；知道|core
endanger|vt. 使遭受危险；危害|core
average|n. 平均数；平均水平；adj. 平均的；正常的；普通的|core
on average|平均|core
prince|n. 王子；王孙；亲王|core
make progress|取得进步|core
concern|vt. 涉及；让……担忧|core
concerned|adj. 担心的；关切的|core
concerned about|对……关切的；为……担忧的|core
living|adj. 居住的；活的；在用的；n. 生活；生计|core
adapt|vi. 适应；vt. 使适应；使适合|core
adapt to|适应|core
measure|n. 措施；方法；vt. 测量；度量；估量|core
authority|n. 官方；当权；权威|core
pressure|n. 压力；要求|core
under pressure|在压力下；承受压力|core
whale|n. 鲸|core
antelope|n. 羚；羚类动物|core
Tibetan antelope|藏羚羊|core
reserve|n. 动植物保护区；储藏量；vt. 预订；预留；保留|core
plain|n. 平原；adj. 简单明了的；直率的；平凡的|core
make out|看清；听清；分清|core
herd|n. 牧群；兽群|core
observe|vt. 观察到；注视；遵守|core
beauty|n. 美；美人；美好的东西|core
remind|vt. 提醒；使想起|core
remind sb of sb/sth|使某人想起某人或某物|core
fur|n. 毛皮；毛皮衣服|core
sacred|adj. 神圣的；受尊敬的|core
shoot|vt. & vi. 射杀；射伤；发射|core
profit|n. 利润；利益|core
watch over|保护；照管；监督|core
day and night|日日夜夜；夜以继日|core
attack|n. & v. 攻击；抨击|core
effective|adj. 有效的；生效的|core
recover|vi. 恢复；康复；vt. 找回；寻回|core
remove|vt. 去除；移开；脱去|core
intend|vi. & vt. 打算；计划；想要|core
threat|n. 威胁|core
threaten|vt. 威胁；危及|core
exist|vi. 存在；生存|core
harmony|n. 和谐；融洽|core
goods|n. 商品；货物|core
creature|n. 生物；动物|core
deer|n. 鹿|core
kangaroo|n. 袋鼠|core
reduce|vt. 减少|core
due|adj. 由于；因为|core
due to|由于；因为|core
insect|n. 昆虫|core
net|n. 网；adj. 净得的；纯的|core
neighbourhood|n. 临近的地方；街区|core
binoculars|n. 双筒望远镜|core
bird field guide|鸟类图鉴|core
search for|搜索；查找|core
dolphin|n. 海豚|core
Yangtze River dolphin|白鳍豚|proper
koala|n. 树袋熊；考拉|core
stir|vt. 激发；搅动|core
stir up|激起|core
emotion|n. 感情；情感；情绪|core
skin|n. 皮；皮肤|core
unusual|adj. 特别的；不寻常的|core
Tibetan|adj. 西藏的；藏语的；藏族人的；n. 西藏人；藏族人；藏语|proper
Tibet|西藏|proper`,

  u3: `
blog|n. 博客；vi. 写博客|core
blog post|博文；博客帖子|core
blogger|n. 博客作者；博主|core
engine|n. 引擎；发动机；火车头|core
search engine|互联网搜索引擎|core
chat|vi. 聊天；闲聊|core
stream|vt. 流播；vi. 流动；n. 小河；溪流|core
identity|n. 身份；个性|core
identity card|身份证|core
convenient|adj. 方便的；近便的|core
cash|n. 现金；金钱|core
update|vt. 更新；提供最新信息；n. 更新；最新消息|core
database|n. 数据库；资料库|core
software|n. 软件|core
network|n. 网络；网状系统；人际网；vt. 将……连接成网络；vi. 建立工作关系|core
stuck|adj. 卡住；陷入；困于|core
keep sb company|陪伴某人|core
surf|vt. & vi. 浏览；冲浪|core
benefit|n. 益处；vt. 使受益；vi. 得益于|core
distance|n. 距离|core
inspire|vt. 鼓舞；激励；启发思考|core
now that|既然；由于|core
access|n. 通道；机会；vt. 进入；使用；获取|core
charity|n. 慈善；慈善机构或组织|core
go through|经历；度过；通读|core
tough|adj. 艰难的；严厉的|core
province|n. 省|core
conference|n. 会议；研讨会；正式会谈|core
resident|n. 居民；住院医生；adj. 居住的|core
plus|conj. 而且；此外；n. 加号；优势；prep. 加；另加|core
function|n. 功能；作用；机能；vi. 起作用；正常工作；运转|core
battery|n. 电池|core
confirm|vt. 确认；使确信|core
Wi-Fi|n. 无线保真|core
press|vt. 按；压；敦促|core
button|n. 按钮；纽扣|core
file|n. 文件；文件夹；档案|core
in shape|状况良好|core
keep track of|掌握……的最新消息；了解……的动态|core
discount|n. 折扣；vt. 打折|core
account|n. 账户；描述|core
click|vt. & vi. 点击|core
privacy|n. 隐私；私密|core
theft|n. 偷窃；盗窃罪|core
rude|adj. 粗鲁的；无礼的|core
target|n. 目标；对象；靶子；vt. 把……作为攻击目标|core
troll|n. 发挑衅帖的人；恶意挑衅的帖子|core
cyberbully|n. 网霸；vt. & vi. 网络欺凌|core
false|adj. 假的；错误的|core
particular|adj. 特定的；特别的；讲究的|core
embarrassing|adj. 让人难堪或尴尬的|core
make fun of|取笑；戏弄|core
upset|adj. 心烦的；苦恼的；沮丧的；vt. 使烦恼；使生气；扰乱|core
guideline|n. 准则；指导原则|core
author|n. 作者；作家|core
tip|n. 忠告；诀窍；实用的提示|core
familiar|adj. 熟悉的；熟知的|core
keep (...) in mind|牢记|core
define|vt. 给……下定义；界定；解释|core
case|n. 盒；箱；情况；案件|core
the World Wide Web|万维网；环球信息网|proper
Jan Tchamani|简·夏曼尼（人名）|proper
Birmingham|伯明翰（英国城市）|proper`,

  u4: `
Confucius|孔子|proper
mansion|n. 公馆；宅第|core
cemetery|n. 墓地；公墓|core
philosophy|n. 哲学|core
descendant|n. 后裔；后代；子孙|core
individual|adj. 单独的；个别的；n. 个人|core
heel|n. 足跟；脚后跟|core
Achilles' heel|阿喀琉斯的脚跟；致命弱点|proper
kingdom|n. 王国；领域|core
chief|adj. 最重要的；最高级别的；n. 首领；酋长|core
puzzle|n. 谜；智力游戏；疑问；vt. 迷惑；使困惑|core
nearby|adj. 附近的；邻近的；adv. 在附近|core
join ... to ...|把……和……连接或联结起来|core
break away (from sb/sth)|脱离；背叛；逃脱|core
belong|vi. 应在某处；适应|core
belong to|属于|core
as well as|同样地；和；还|core
currency|n. 通货；货币|core
military|adj. 军事的；军用的|core
defence|n. 防御；保卫|core
legal|adj. 法律的；合法的|core
surround|vt. 围绕；包围|core
evidence|n. 证据；证明|core
achievement|n. 成就；成绩；达到|core
location|n. 地方；地点；位置|core
conquer|vt. 占领；征服；控制|core
battle|n. 战役；搏斗；vi. & vt. 搏斗；奋斗|core
port|n. 港口城市|core
fascinating|adj. 极有吸引力的；迷人的|core
keep your eyes open (for)|留心；留意|core
charge|n. 收费；指控；主管；vt. 收费；控告；充电|core
announce|vt. 宣布；通知；声称|core
amount|n. 金额；数量|core
gallery|n. 艺术作品展览馆；画廊|core
approach|n. 方法；途径；接近；vt. 接近；接洽；着手处理；vi. 靠近|core
ensure|vt. 保证；确保；担保|core
landscape|n. 陆上风景|core
generous|adj. 慷慨的；大方的；丰富的|core
butter|n. 黄油；奶油；vt. 涂黄油于|core
honey|n. 蜂蜜|core
ancestor|n. 祖宗；祖先|core
position|n. 位置；姿态；职位|core
courtyard|n. 庭院；院子|core
snack|n. 点心；小吃|core
eager|adj. 热切的；渴望的|core
poet|n. 诗人|core
county|n. 英国、爱尔兰的郡；美国的县|core
feast|n. 盛宴；宴会；节日|core
roll|vi. & vt. 翻滚；使滚动；n. 卷；卷轴；翻滚|core
dot|n. 点；小圆点；vt. 加点；遍布|core
cattle|n. 牛|core
roar|vi. & n. 吼叫；咆哮|core
ocean|n. 大海；海洋|core
scent|n. 气味；气息|core
greet|vt. 问候；迎接|core
pub|n. 酒吧；酒馆|core
wine|n. 葡萄酒；果酒|core
beer|n. 啤酒|core
stew|n. 炖菜；vt. & vi. 炖；煨|core
custom|n. 风俗；习俗；习惯|core
sensory|adj. 感觉的；感官的|core
striking|adj. 引人注目的；显著的|core
transition|n. 过渡；转变；变迁|core
crowd|n. 人群；一群人；民众；vt. 挤满；使拥挤|core
Wales|威尔士（英国）|proper
Scotland|苏格兰（英国）|proper
Northern Ireland|北爱尔兰（英国）|proper
Anglo-Saxon|盎格鲁-撒克逊人|proper
Viking|n. 维京人；北欧海盗|proper
Norman|adj. 诺曼式的；诺曼人的|proper
the Normans|诺曼人|proper
Battle of Hastings|黑斯廷斯战役|proper
Roman|adj. 古罗马的；罗马的；n. 古罗马人；罗马市民|proper
Van Gogh|梵高（荷兰画家）|proper
the Emerald Isle|绿宝石岛（爱尔兰的别称）|proper
Irish|adj. 爱尔兰的；爱尔兰人的|proper`,

  u5: `
classical|adj. 古典的；经典的|core
hip-hop|n. 嘻哈音乐；嘻哈文化|core
techno|n. 泰克诺音乐|core
energy|n. 能源；能量；精力|core
soul|n. 灵魂；心灵|core
bagpipes|n. 风笛|core
stringed|adj. 有弦的|core
stringed instrument|弦乐器|core
virtual|adj. 很接近的；事实上的；虚拟的|core
virtual choir|虚拟合唱团|core
composition|n. 成分；音乐、艺术或诗歌作品|core
opportunity|n. 机会；时机|core
perform|vi. & vt. 表演；履行；执行|core
performance|n. 表演；演技；表现|core
performer|n. 表演者；演员|core
onto|prep. 到；向|core
studio|n. 演播室；音乐录音棚；工作室|core
ordinary|adj. 普通的；平凡的|core
enable|vt. 使能够；使可能|core
prove|vt. 证明；展现|core
award|vt. 授予；n. 奖品|core
composer|n. 作曲者；作曲家|core
conductor|n. 乐队或合唱团指挥；公共汽车售票员|core
fall in love with|爱上|core
original|adj. 原来的；独创的；原作的；n. 原件；原作|core
phenomenon|n. 现象|core
stage|n. 时期；阶段；舞台|core
altogether|adv. 总共；全部；总之|core
thus|adv. 如此；因此|core
band|n. 乐队；带子|core
rap|n. 快速敲击；说唱音乐；vi. & vt. 敲击；说唱|core
nowadays|adv. 现在；目前|core
gradual|adj. 逐渐的；渐进的|core
capable|adj. 有能力的；有才能的|core
relief|n. 减轻或消除；宽慰；轻松或解脱|core
cure|vt. 治愈疾病；解决问题；n. 药物；治疗；解决措施|core
absorbed in sb/sth|被……吸引住；专心致志|core
previous|adj. 先前的；以往的|core
unemployed|adj. 失业的；待业的|core
romantic|adj. 浪漫的；n. 浪漫的人|core
album|n. 相册；集邮簿；音乐专辑|core
impact|n. 巨大影响；强大作用；冲击力|core
aim|n. 目的；目标；vi. & vt. 力求达到；瞄准；目的是|core
set sth up|安装好设备或机器|core
equipment|n. 设备；装备|core
try out|参加选拔或试演|core
talent|n. 天才；天资；天赋|core
piano|n. 钢琴|core
assume|vt. 以为；假设|core
addition|n. 添加；加法；增加物|core
in addition (to sb/sth)|除……以外还|core
disease|n. 疾病|core
ache|vi. & n. 疼痛|core
treatment|n. 治疗；对待；处理|core
from (then) on|从那时起|core
lean|vt. 依靠；倾斜|core
get through|设法处理；完成|core
moreover|adv. 而且；此外|core
satisfaction|n. 满足；满意；欣慰|core
being|n. 身心；存在；生物|core
various|adj. 各种不同的；各种各样的|core
somehow|adv. 以某种方式；不知怎么地|core
rhetorical|adj. 修辞的|core
metaphor|n. 暗喻；隐喻|core
personification|n. 拟人；人格化；化身|core
repetition|n. 重复；重做|core
simile|n. 明喻|core
outline|n. & vt. 概述；概要|core
reaction|n. 反应；回应|core
Eric Whitacre|埃里克·惠塔克（美国作曲家）|proper
Nevada|内华达州（美国）|proper
Mozart|莫扎特|proper
Lux Aurumque|《金色光芒》（歌曲名）|proper
UNICEF|联合国儿童基金会|proper
Las Vegas|拉斯维加斯（美国城市）|proper
John A. Logan|约翰·洛根（美国高中）|proper`
};

const VOCABULARY = Object.entries(RAW_VOCABULARY).flatMap(([unit, raw]) =>
  raw.trim().split("\n").filter(Boolean).map((line, index) => {
    const [word, meaning, type = "core"] = line.split("|");
    return { id: `${unit}-${index + 1}`, unit, word: word.trim(), meaning: meaning.trim(), type: type.trim() };
  })
);
