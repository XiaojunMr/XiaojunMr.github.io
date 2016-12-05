var cardType=[{"Code":"1","NameCn":"身份证","NameEn":"Personal ID Card"},{"Code":"2","NameCn":"护照","NameEn":"Passport"},{"Code":"3","NameCn":"军官证","NameEn":"Military ID Card"},{"Code":"7","NameCn":"香港身份证","NameEn":"Hong kong identity card"},{"Code":"8","NameCn":"澳门身份证","NameEn":"Macao identity card"},{"Code":"5","NameCn":"港澳通行证","NameEn":"laissez-passer to Hongkong & Macao"},{"Code":"6","NameCn":"台胞证","NameEn":"Mainland Travel Permit for Taiwan Residents"},{"Code":"4","NameCn":"其他","NameEn":"Other"}]
var maritalStatus=[{"Code":"1","NameCn":"未婚","NameEn":"Single"},{"Code":"2","NameCn":"已婚","NameEn":"Married"},{"Code":"3","NameCn":"离异","NameEn":"Divorced"}]
var political=[{"Code":"1","NameCn":"中共党员(含预备党员) ","NameEn":"Party Member"},{"Code":"5","NameCn":"团员","NameEn":"League member"},{"Code":"6","NameCn":"群众","NameEn":"Citizenship"},{"Code":"2","NameCn":"民主党派","NameEn":"Party"},{"Code":"3","NameCn":"无党派人士","NameEn":"No Party"}]
var overseasYear = [{ "Code": "1", "NameCn": "1年", "NameEn": "1 Year" }, { "Code": "2", "NameCn": "2年", "NameEn": "2 Year" }, { "Code": "3", "NameCn": "3年", "NameEn": "3 Year" }, { "Code": "4", "NameCn": "4年", "NameEn": "4 Year" }, { "Code": "5", "NameCn": "5年", "NameEn": "5 Year" }, { "Code": "6", "NameCn": "5-10年", "NameEn": "5-10 Year" }, { "Code": "10", "NameCn": "10年以上", "NameEn": "Above 10 Year" }]
var employmentType = [{ "Code": "2", "NameCn": "全职", "NameEn": "Full-time" }, { "Code": "1", "NameCn": "兼职", "NameEn": "Part-time" }, { "Code": "4", "NameCn": "实习", "NameEn": "Intern" }]
var salaryScope = [{"Code": "0000001000", "NameCn": "1000元\/月以下", "NameEn": "Below 1000RMB\/Month"},{"Code": "0100002000", "NameCn": "1000-2000元\/月", "NameEn": "1000-2000RMB\/Month"},{"Code": "0200104000", "NameCn": "2001-4000元\/月", "NameEn": "2001-4000RMB\/Month"},{"Code": "0400106000", "NameCn": "4001-6000元\/月", "NameEn": "4001-6000RMB\/Month"},{"Code": "0600108000", "NameCn": "6001-8000元\/月", "NameEn": "6001-8000RMB\/Month"},{"Code": "0800110000", "NameCn": "8001-10000元\/月", "NameEn": "8001-10000RMB\/Month"},{"Code": "1000115000", "NameCn": "10001-15000元\/月", "NameEn": "10001-15000RMB\/Month"},{"Code": "1500125000", "NameCn": "15000-25000元\/月", "NameEn": "15000-25000RMB\/Month"},{"Code": "2500199999", "NameCn": "25000-35000元\/月", "NameEn": "25000-35000RMB\/Month"},{"Code": "3500150000", "NameCn": "35000-50000元\/月", "NameEn": "35000-50000RMB\/Month"},{"Code": "5000170000", "NameCn": "50000-70000元\/月", "NameEn": "50000-70000RMB\/Month"},{"Code": "70001100000", "NameCn": "70000-100000元\/月", "NameEn": "70000-100000RMB\/Month"},{"Code": "100001150000", "NameCn": "100000元\/月以上", "NameEn": "Above 100000RMB\/Month"},{"Code": "0000000000", "NameCn": "面议", "NameEn": "Confidential"}];
var careerStatus = [{ "Code": "1", "NameCn": "我目前处于离职状态，可立即上岗", "NameEn": "Immediately" }, { "Code": "2", "NameCn": "我目前在职，正考虑换个新环境（如有合适的工作机会，到岗时间一个月左右）", "NameEn": "In 1 months" }, { "Code": "4", "NameCn": "我对现有工作还算满意，如有更好的工作机会，我也可以考虑。（到岗时间另议）", "NameEn": "In 6 months" }, { "Code": "3", "NameCn": "目前暂无跳槽打算", "NameEn": "Not specified" }, { "Code": "5", "NameCn": "应届毕业生", "NameEn": "student" }];
var companyType=[{"Code": "1", "NameCn": '国企', "NameEn": "State Owned"},{"Code": "5", "NameCn": '民营', "NameEn": "Private"},{"Code": "4", "NameCn": '合资', "NameEn": "JV"},{"Code": "2", "NameCn": '外商独资', "NameEn": "WFOE"},{"Code": "8", "NameCn": '股份制企业', "NameEn": "Joint-Stock"},{"Code": "9", "NameCn": '上市公司', "NameEn": "PLC"},{"Code": "3", "NameCn": '代表处', "NameEn": "Representative Office"},{"Code": "6", "NameCn": '国家机关', "NameEn": "Government"},{"Code": "10", "NameCn": '事业单位', "NameEn": "Institution"},{"Code": "0", "NameCn": '其它', "NameEn": "Other"}];
var companySize=[{"Code": "1", "NameCn": '20人以下', "NameEn": "Less than 20"},{"Code": "2", "NameCn": '20-99人', "NameEn": "20-99"},{"Code": "3", "NameCn": '100-499人', "NameEn": "100-499"},{"Code": "4", "NameCn": '500-999人', "NameEn": "500-999"},{"Code": "5", "NameCn": '1000-9999人', "NameEn": "1000-9999"},{"Code": "6", "NameCn": '10000人以上', "NameEn": "More than 10000"}];
var educationDegree=[{"Code": "5", "NameCn": '大专', "NameEn": "Associate"},{"Code": "4", "NameCn": '本科', "NameEn": "Bachelor"},{"Code": "3", "NameCn": '硕士', "NameEn": "Master"},{"Code": "1", "NameCn": '博士', "NameEn": "Doctor"},{"Code": "10", "NameCn": 'MBA', "NameEn": "MBA"},{"Code": "11", "NameCn": 'EMBA', "NameEn": "EMBA"},{"Code": "12", "NameCn": '中专', "NameEn": "Secondary Specialized"},{"Code": "13", "NameCn": '中技', "NameEn": "Skilled Workers Training"},{"Code": "7", "NameCn": '高中', "NameEn": "Senior High"},{"Code": "9", "NameCn": '初中', "NameEn": "junior high"},{"Code": "8", "NameCn": '其他', "NameEn": "Other"}];
var professionalSkills=[{"Code": "1", "NameCn": '计算机／IT', "NameEn": "computer／IT"},{"Code": "2", "NameCn": '机械维修', "NameEn": "instrument fixing"},{"Code": "3", "NameCn": '生产技工', "NameEn": "mechanics"},{"Code": "4", "NameCn": '园林艺术', "NameEn": "landscape gardening"},{"Code": "5", "NameCn": '手工艺', "NameEn": "handcraft"},{"Code": "6", "NameCn": '烹饪／餐饮', "NameEn": "cooking"},{"Code": "7", "NameCn": '服装／服', "NameEn": "costume"},{"Code": "8", "NameCn": '驾驶', "NameEn": "driving"},{"Code": "9", "NameCn": '安全保护', "NameEn": "safeguarding"},{"Code": "10", "NameCn": '语言翻译', "NameEn": "translating"},{"Code": "11", "NameCn": '建筑／装修', "NameEn": "architecture/ornament"},{"Code": "12", "NameCn": '医护／美容', "NameEn": "nursing/beautifying"},{"Code": "13", "NameCn": '其他', "NameEn": "others"}];
var skillLevel=[{"Code": "1", "NameCn": '一般', "NameEn": "basic"},{"Code": "2", "NameCn": '良好', "NameEn": "average"},{"Code": "3", "NameCn": '熟练', "NameEn": "proficient"},{"Code": "4", "NameCn": '精通', "NameEn": "expert"}];
var foreignLanguage =[{"Code": "1", "NameCn": '英语', "NameEn": "English"},{"Code": "2", "NameCn": '日语', "NameEn": "Japanese"},{"Code": "3", "NameCn": '法语', "NameEn": "French"},{"Code": "4", "NameCn": '德语', "NameEn": "German"},{"Code": "5", "NameCn": '俄语', "NameEn": "Russian"},{"Code": "6", "NameCn": '韩语', "NameEn": "Korean"},{"Code": "7", "NameCn": '西班牙语', "NameEn": "Spanish"},{"Code": "8", "NameCn": '葡萄牙语', "NameEn": "Portuguese"},{"Code": "9", "NameCn": '阿拉伯语', "NameEn": "Arabic"},{"Code": "10", "NameCn": '意大利语', "NameEn": "Italian"},{"Code": "999", "NameCn": '其他', "NameEn": "Others"}];
var certificationBroad = [{"Code":"1","BroadCode":"0","NameCn":"外语证书","NameEn":"Foreign Languages Certificates"},{"Code":"2","BroadCode":"0","NameCn":"计算机证书","NameEn":"Computer Certificate"},{"Code":"3","BroadCode":"0","NameCn":"会计证书","NameEn":"Accountant Certificate"},{"Code":"4","BroadCode":"0","NameCn":"职称证书","NameEn":"Administrative Level Certificate"},{"Code":"5","BroadCode":"0","NameCn":"其他证书","NameEn":"Other Certificates"}];
var certificationSub = [{"Code":"6","BroadCode":"1","NameCn":"托福","NameEn":"TOEFL"},{"Code":"166","BroadCode":"1","NameCn":"托业","NameEn":"TOEIC"},{"Code":"7","BroadCode":"1","NameCn":"GRE","NameEn":"GRE"},{"Code":"8","BroadCode":"1","NameCn":"GMAT","NameEn":"GMAT"},{"Code":"9","BroadCode":"1","NameCn":"雅思","NameEn":"IELTS"},{"Code":"16","BroadCode":"1","NameCn":"全国公共英语等级考试 PETS","NameEn":"PETS"},{"Code":"17","BroadCode":"1","NameCn":"通用英语初级","NameEn":"General English Certificate (Beginners)"},{"Code":"18","BroadCode":"1","NameCn":"通用英语中级","NameEn":"General English Certificate (Intermediate)"},{"Code":"19","BroadCode":"1","NameCn":"大学英语四级","NameEn":"CET4"},{"Code":"20","BroadCode":"1","NameCn":"大学英语六级","NameEn":"CET6"},{"Code":"21","BroadCode":"1","NameCn":"中级口译证书","NameEn":"Certificate of Intermediate Interpreter"},{"Code":"22","BroadCode":"1","NameCn":"高级口译证书","NameEn":"Certificate of Advanced Interpreter"},{"Code":"23","BroadCode":"1","NameCn":"俄语四级证书","NameEn":"CRT4"},{"Code":"24","BroadCode":"1","NameCn":"俄语六级证书","NameEn":"CRT6"},{"Code":"25","BroadCode":"1","NameCn":"法语四级证书","NameEn":"CFT4"},{"Code":"26","BroadCode":"1","NameCn":"法语六级证书","NameEn":"CFT6"},{"Code":"27","BroadCode":"1","NameCn":"日语一级证书","NameEn":"Japanese Language Proficiency Test Band 1"},{"Code":"28","BroadCode":"1","NameCn":"日语二级证书","NameEn":"Japanese Language Proficiency Test Band 2"},{"Code":"29","BroadCode":"1","NameCn":"日语三级证书","NameEn":"Japanese Language Proficiency Test Band 3"},{"Code":"30","BroadCode":"1","NameCn":"日语四级证书","NameEn":"Japanese Language Proficiency Test Band 4"},{"Code":"31","BroadCode":"1","NameCn":"德语四级证书","NameEn":"CGT 4"},{"Code":"32","BroadCode":"1","NameCn":"德语六级证书","NameEn":"CGT 6"},{"Code":"33","BroadCode":"1","NameCn":"英语专业四级","NameEn":"TEM 4"},{"Code":"34","BroadCode":"1","NameCn":"英语专业八级 ","NameEn":"TEM 8"},{"Code":"35","BroadCode":"2","NameCn":"全国计算机应用技术证书","NameEn":"NIT"},{"Code":"36","BroadCode":"2","NameCn":"全国计算机软件技术资格与水平考试","NameEn":"Nationwide Software Technology Test"},{"Code":"37","BroadCode":"2","NameCn":"初级程序员","NameEn":"Certified Primary Programmer"},{"Code":"38","BroadCode":"2","NameCn":"程序员","NameEn":"Certified Programmer"},{"Code":"39","BroadCode":"2","NameCn":"高级程序员","NameEn":"Certified Advanced Programmer"},{"Code":"40","BroadCode":"2","NameCn":"系统分析员","NameEn":"Certified System Analyst"},{"Code":"41","BroadCode":"2","NameCn":"全国计算机等级一级","NameEn":"Nationwide Computer Level Test Band 1"},{"Code":"42","BroadCode":"2","NameCn":"全国计算机等级二级","NameEn":"Nationwide Computer Level Test Band 2"},{"Code":"43","BroadCode":"2","NameCn":"全国计算机等级三级A","NameEn":"Nationwide Computer Level Test Band 3A"},{"Code":"44","BroadCode":"2","NameCn":"全国计算机等级三级B","NameEn":"Nationwide Computer Level Test Band 3B"},{"Code":"45","BroadCode":"2","NameCn":"全国计算机等级四级","NameEn":"Nationwide Computer Level Test Band 4"},{"Code":"46","BroadCode":"2","NameCn":"计算机初级","NameEn":"Beginners Computer Application Certificate"},{"Code":"47","BroadCode":"2","NameCn":"计算机中级","NameEn":"Intermediate Computer Application Certificate"},{"Code":"48","BroadCode":"2","NameCn":"网络初级证书","NameEn":"Beginners Networking Certificate"},{"Code":"49","BroadCode":"2","NameCn":"MCDST微软认证操作系统技术支持工程师","NameEn":"MCDST"},{"Code":"50","BroadCode":"2","NameCn":"MCAD 微软认证应用程序开发专家","NameEn":"MCAD "},{"Code":"51","BroadCode":"2","NameCn":"MCP 微软专家认证","NameEn":"MCP"},{"Code":"52","BroadCode":"2","NameCn":"MCSA 微软认证系统管理员","NameEn":"MCSA "},{"Code":"53","BroadCode":"2","NameCn":"MCSA: Messaging 微软认证信息系统管理员","NameEn":"MCSA"},{"Code":"54","BroadCode":"2","NameCn":"MCSE 微软认证系统工程师","NameEn":"MCSE "},{"Code":"55","BroadCode":"2","NameCn":"MCSD 微软认证解决方案开发专家","NameEn":"MCSD "},{"Code":"56","BroadCode":"2","NameCn":"MCSE: Messaging 微软认证信息系统工程师","NameEn":"MCSE"},{"Code":"57","BroadCode":"2","NameCn":"MCSE: Security 微软认证安全系统工程师","NameEn":"MCSE"},{"Code":"58","BroadCode":"2","NameCn":"MCDBA 微软认证数据库系统管理员","NameEn":"MCDBA "},{"Code":"59","BroadCode":"2","NameCn":"MCT 微软认证培训师","NameEn":"MCT "},{"Code":"60","BroadCode":"2","NameCn":"CCCP 思科认证网络规划和网络支持工程师","NameEn":"CCCP "},{"Code":"61","BroadCode":"2","NameCn":"CCIE 思科认证互联网专家","NameEn":"CCIE "},{"Code":"62","BroadCode":"2","NameCn":"CCNA 思科认证网络工程师","NameEn":"CCNA"},{"Code":"63","BroadCode":"2","NameCn":"CCNP 思科认证网络专业人员","NameEn":"CCNP"},{"Code":"64","BroadCode":"2","NameCn":"CCIP 思科认证的互联网专业人员","NameEn":"CCIP"},{"Code":"65","BroadCode":"2","NameCn":"CCDA 思科认证网络设计工程师","NameEn":"CCDA "},{"Code":"66","BroadCode":"2","NameCn":"CCDP 思科认证网络设计专业人员","NameEn":"CCDP "},{"Code":"67","BroadCode":"2","NameCn":"思科认证专家-- 有线","NameEn":"Cisco Qualified Spedcialist--Cable"},{"Code":"68","BroadCode":"2","NameCn":"思科认证专家--互联网解决方案","NameEn":"Cisco Qualified Spedcialist--Internet Solution"},{"Code":"69","BroadCode":"2","NameCn":"思科认证专家--安全性思科认证专家--SNA/IP","NameEn":"Cisco Qualified Specialist--Security"},{"Code":"70","BroadCode":"2","NameCn":"Novell授权网络管理师","NameEn":"Cisco Qualified Specialist--SNA/IP"},{"Code":"71","BroadCode":"2","NameCn":"Novell 授权网络工程师","NameEn":"Novell Certified Networking Administrator/CAN"},{"Code":"72","BroadCode":"2","NameCn":"Novell授权高级网络工程师","NameEn":"Novell Certified Networking Engineer/CNE"},{"Code":"73","BroadCode":"2","NameCn":"Novell授权Internet专家","NameEn":"Novell Certified Advanced Network Engineer/Master CNE"},{"Code":"74","BroadCode":"2","NameCn":"3com 认证网络大师","NameEn":"Novell Certified Internet Specialist/CIE"},{"Code":"75","BroadCode":"2","NameCn":"SUN 认证","NameEn":"3com Certified Networking Specialist/MNS Master of Network Science"},{"Code":"76","BroadCode":"2","NameCn":"Java程序员","NameEn":"SUN Certificate"},{"Code":"77","BroadCode":"2","NameCn":"Intel 认证方案咨询专家","NameEn":"Java Programmer"},{"Code":"78","BroadCode":"2","NameCn":"Intel 认证方案集成专家","NameEn":"ICSC"},{"Code":"79","BroadCode":"2","NameCn":"Adobe认证专家","NameEn":"ICIS"},{"Code":"80","BroadCode":"2","NameCn":"Domino R5 Application Development CLP","NameEn":"Adobe Certified Expert"},{"Code":"81","BroadCode":"2","NameCn":"Domino R5 System Administration CLP","NameEn":"Domino R5 Application Development CLP"},{"Code":"82","BroadCode":"2","NameCn":"Sybase 认证考试","NameEn":"Domino R5 System Administration CLP"},{"Code":"83","BroadCode":"2","NameCn":"IBM Certified AIX User","NameEn":"Sybase Certification test"},{"Code":"84","BroadCode":"2","NameCn":"IBM eServer pSeries AIX System Administration","NameEn":"IBM Certified AIX User"},{"Code":"85","BroadCode":"2","NameCn":"IBM eServer pSeries AIX System Support","NameEn":"IBM eServer pSeries AIX System Administration"},{"Code":"86","BroadCode":"2","NameCn":"IBM Certified Advanced Technical Expert - RS/6000 AIXIBM AS/400 Associate System Operator","NameEn":"IBM eServer pSeries AIX System Support"},{"Code":"87","BroadCode":"2","NameCn":"IBM AS/400 Professional System Operator","NameEn":"IBM Certified Advanced Technical Expert - RS/6000 AIXIBM AS/400 Associate System Operator"},{"Code":"88","BroadCode":"2","NameCn":"IBM Certified Specialist - DB2 V6.1/V7.1 User","NameEn":"IBM AS/400 Professional System Operator"},{"Code":"89","BroadCode":"2","NameCn":"IBM Certified Solutions Expert - Business Intelligence","NameEn":"IBM Certified Specialist - DB2 V6.1/V7.1 User"},{"Code":"90","BroadCode":"2","NameCn":"IBM Expert - DB2 UDB V7.1 Database AdministrationIBM Expert - DB2 UDB V7.1 Family Application Development","NameEn":"IBM Certified Solutions Expert - Business Intelligence"},{"Code":"91","BroadCode":"2","NameCn":"IBM Expert - DB2 UDB V6.1 Database Administration","NameEn":"IBM Expert - DB2 UDB V7.1 Database AdministrationIBM Expert - DB2 UDB V7.1 Family Application Development"},{"Code":"92","BroadCode":"2","NameCn":"IBM Expert - DB2 UDB V6.1 Application Development","NameEn":"IBM Expert - DB2 UDB V6.1 Database Administration"},{"Code":"93","BroadCode":"2","NameCn":"IBM Certified for e-business - Solution Advisor","NameEn":"IBM Expert - DB2 UDB V6.1 Application Development"},{"Code":"94","BroadCode":"2","NameCn":"IBM Certified for e-business - Solution Designer","NameEn":"IBM Certified for e-business - Solution Advisor"},{"Code":"95","BroadCode":"2","NameCn":"IBM Certified for e-business - Solution Technologist","NameEn":"IBM Certified for e-business - Solution Designer"},{"Code":"96","BroadCode":"2","NameCn":"IBM Certified Specialist - MQSeries","NameEn":"IBM Certified for e-business - Solution Technologist"},{"Code":"97","BroadCode":"2","NameCn":"IBM Certified Solutions Expert - MQSeries","NameEn":"IBM Certified Specialist - MQSeries"},{"Code":"98","BroadCode":"2","NameCn":"IBM Certified Developer - MQSeries","NameEn":"IBM Certified Solutions Expert - MQSeries"},{"Code":"99","BroadCode":"2","NameCn":"IBM Certified Specialist - MQSeries Adapter Offering","NameEn":"IBM Certified Developer - MQSeries"},{"Code":"100","BroadCode":"2","NameCn":"IBM Certified Specialist - WebSphere MQ Integrator","NameEn":"IBM Certified Specialist - MQSeries Adapter Offering"},{"Code":"101","BroadCode":"2","NameCn":"IBM Certified Solutions Expert - WebSphere MQ Integrator","NameEn":"IBM Certified Specialist - WebSphere MQ Integrator"},{"Code":"102","BroadCode":"2","NameCn":"IBM Certified Solutions Expert - MQSeries Workflow","NameEn":"IBM Certified Solutions Expert - WebSphere MQ Integrator"},{"Code":"103","BroadCode":"2","NameCn":"IBM Specialist - IBM VisualAge","NameEn":"IBM Certified Solutions Expert - MQSeries Workflow"},{"Code":"104","BroadCode":"2","NameCn":"IBM Solution Developer - IBM VisualAge","NameEn":"IBM Specialist - IBM VisualAge"},{"Code":"105","BroadCode":"2","NameCn":"IBM - WebSphere Server","NameEn":"IBM Solution Developer - IBM VisualAge"},{"Code":"106","BroadCode":"2","NameCn":"IBM Enterprise Developer - WebSphere Server","NameEn":"IBM - WebSphere Server"},{"Code":"107","BroadCode":"2","NameCn":"IBM Specialist - WebSphere Server  VisualAge for Java based","NameEn":"IBM Enterprise Developer - WebSphere Server"},{"Code":"108","BroadCode":"2","NameCn":"IBM Enterprise Developer - WebSphere Server  VisualAge for Java based","NameEn":"IBM Specialist - WebSphere Server  VisualAge for Java based"},{"Code":"109","BroadCode":"2","NameCn":"IBM Systems Expert - Administration for WebSphere Server","NameEn":"IBM Enterprise Developer - WebSphere Server  VisualAge for Java based"},{"Code":"110","BroadCode":"2","NameCn":"IBM - WebSphere Commerce  Business Edition V5.4  Implementation","NameEn":"IBM Systems Expert - Administration for WebSphere Server"},{"Code":"111","BroadCode":"2","NameCn":"IBM  -  WebSphere Commerce  Business Edition V5.4  Customization","NameEn":"IBM - WebSphere Commerce  Business Edition V5.4  Implementation"},{"Code":"112","BroadCode":"2","NameCn":"IBM WebSphere Commerce Suite V5.1 Implementation","NameEn":"IBM  -  WebSphere Commerce  Business Edition V5.4  Customization"},{"Code":"113","BroadCode":"2","NameCn":"IBM - WebSphere Studio  Professional or Advanced Edition","NameEn":"IBM WebSphere Commerce Suite V5.1 Implementation"},{"Code":"114","BroadCode":"2","NameCn":"IBM  WebSphere Studio Family of Products  V4.0","NameEn":"IBM - WebSphere Studio  Professional or Advanced Edition"},{"Code":"115","BroadCode":"2","NameCn":"IBM WebSphere Studio Application Developer for Windows","NameEn":"IBM  WebSphere Studio Family of Products  V4.0"},{"Code":"116","BroadCode":"2","NameCn":"IBM WebSphere Studio Application Developer for Window","NameEn":"IBM WebSphere Studio Application Developer for Windows"},{"Code":"117","BroadCode":"2","NameCn":"IBM - XML and Related Technologies","NameEn":"IBM WebSphere Studio Application Developer for Window"},{"Code":"118","BroadCode":"2","NameCn":"Domino R5 Application Development CLS","NameEn":"IBM - XML and Related Technologies"},{"Code":"119","BroadCode":"2","NameCn":"Domino R5 Application Development PCLP","NameEn":"Domino R5 Application Development CLS"},{"Code":"120","BroadCode":"2","NameCn":"Domino R5 System Administration CLS","NameEn":"Domino R5 Application Development PCLP"},{"Code":"121","BroadCode":"2","NameCn":"Domino R5 System Administration PCLP","NameEn":"Domino R5 System Administration CLS"},{"Code":"122","BroadCode":"2","NameCn":"LPI Certification Level 1","NameEn":"Domino R5 System Administration PCLP"},{"Code":"123","BroadCode":"2","NameCn":"LPI Certification Level 2 ","NameEn":"LPI Certification Level 1"},{"Code":"124","BroadCode":"3","NameCn":"注册会计师","NameEn":"LPI Certification Level 2 "},{"Code":"125","BroadCode":"3","NameCn":"高级会计师","NameEn":"Certified Public Accountant"},{"Code":"126","BroadCode":"3","NameCn":"中级会计师","NameEn":"Senior Accountant"},{"Code":"127","BroadCode":"3","NameCn":"助理会计师","NameEn":"Accountant"},{"Code":"128","BroadCode":"3","NameCn":"会计上岗证","NameEn":"Assistant Accountant"},{"Code":"129","BroadCode":"3","NameCn":"会计电算化证书","NameEn":"Accounting Take-up Certificate"},{"Code":"130","BroadCode":"3","NameCn":"国际财务会计证书 ","NameEn":"Accounting Computerized Certificate"},{"Code":"131","BroadCode":"4","NameCn":"初级工程师","NameEn":"International Financing * Accounting Certificate"},{"Code":"132","BroadCode":"4","NameCn":"中级工程师","NameEn":"Junior Engineer"},{"Code":"133","BroadCode":"4","NameCn":"高级工程师","NameEn":"Engineer"},{"Code":"134","BroadCode":"4","NameCn":"初级经济师","NameEn":"Senior Engineer"},{"Code":"135","BroadCode":"4","NameCn":"中级经济师","NameEn":"Junior Economist"},{"Code":"136","BroadCode":"4","NameCn":"高级经济师","NameEn":"Economist"},{"Code":"137","BroadCode":"4","NameCn":"助理工程师 ","NameEn":"Senior Economist"},{"Code":"138","BroadCode":"4","NameCn":"助理经济师","NameEn":"Assistant Engineer"},{"Code":"139","BroadCode":"5","NameCn":"全国律师资格证书","NameEn":"Assistant Economist"},{"Code":"140","BroadCode":"5","NameCn":"企业法律顾问执业资格证书","NameEn":"Nationwide Lawyer Certificate"},{"Code":"141","BroadCode":"5","NameCn":"注册建筑师","NameEn":"Enterprise Legal Adviser Certificate"},{"Code":"142","BroadCode":"5","NameCn":"注册结构师","NameEn":"Registered Architect"},{"Code":"143","BroadCode":"5","NameCn":"注册土木工程师","NameEn":"Registered Constructer"},{"Code":"144","BroadCode":"5","NameCn":"监理工程师","NameEn":"Registered Civil Engineer"},{"Code":"145","BroadCode":"5","NameCn":"执业资格证书","NameEn":"Certificate Of Construction Supervisor"},{"Code":"146","BroadCode":"5","NameCn":"造价工程师","NameEn":"Certificate Of Cost Engineer"},{"Code":"147","BroadCode":"5","NameCn":"执业资格证书","NameEn":"Registered Consultant(Investment)"},{"Code":"148","BroadCode":"5","NameCn":"注册咨询工程师(投资)执业资格证书","NameEn":"Real Estate Appraiser Certificate"},{"Code":"149","BroadCode":"5","NameCn":"房地产估价师执业资格证书","NameEn":"Real Estate Agent Certificate"},{"Code":"150","BroadCode":"5","NameCn":"房地产经纪人执业资格证书","NameEn":"E-Business Specialist Certificate"},{"Code":"151","BroadCode":"5","NameCn":"电子商务师职业资格证书","NameEn":"Regiestered Tax Agent"},{"Code":"152","BroadCode":"5","NameCn":"注册税务师","NameEn":"Certified Public Value Of China"},{"Code":"153","BroadCode":"5","NameCn":"注册资产评估师","NameEn":"Certificate of Statistician"},{"Code":"154","BroadCode":"5","NameCn":"统计上岗证执业药师资格证书","NameEn":"Certificate of Pharmacist"},{"Code":"155","BroadCode":"5","NameCn":"公共关系资格证书","NameEn":"Public Relations Certificate"},{"Code":"156","BroadCode":"5","NameCn":"ISO体系内审员/注册审核员","NameEn":"ISO International Auditor/Registered Auditor"},{"Code":"157","BroadCode":"5","NameCn":"报关员资格证书","NameEn":"Customs Declarer Certificate"},{"Code":"158","BroadCode":"5","NameCn":"报检员资格证书","NameEn":"Entry/Exit Inspection and Quarantine Certificate"},{"Code":"159","BroadCode":"5","NameCn":"外销员资格证书","NameEn":"Foreign Business Certificate"},{"Code":"160","BroadCode":"5","NameCn":"保险代理人资格证书","NameEn":"Certified Insurance Agent"},{"Code":"161","BroadCode":"5","NameCn":"导游人员资格证书","NameEn":"Tourist Guide Certificate"},{"Code":"162","BroadCode":"5","NameCn":"办公自动化证书","NameEn":"Office Automation Certificate"},{"Code":"163","BroadCode":"5","NameCn":"珠算技术等级证书","NameEn":"Abacus Grade Certificate"},{"Code":"164","BroadCode":"5","NameCn":"普通话等级证书","NameEn":"Mandarin Certificate"},{"Code":"165","BroadCode":"5","NameCn":"驾驶执照 ","NameEn":"Driver'S License"}];
var otherInfoTitle=[{"Code": "1", "NameCn": '兴趣爱好', "NameEn": "interests & hobbies"},{"Code": "2", "NameCn": '获得荣誉', "NameEn": "honors & rewards"},{"Code": "3", "NameCn": '专业组织', "NameEn": "professional organization"},{"Code": "4", "NameCn": '著作/论文', "NameEn": "publications/papers"},{"Code": "5", "NameCn": '专利', "NameEn": "patents"},{"Code": "6", "NameCn": '宗教信仰', "NameEn": "religion"},{"Code": "7", "NameCn": '特长职业目标', "NameEn": "speciality career objective"},{"Code": "8", "NameCn": '特殊技能', "NameEn": "special skills"},{"Code": "9", "NameCn": '社会活动', "NameEn": "social events"},{"Code": "10", "NameCn": '荣誉', "NameEn": "honors"},{"Code": "11", "NameCn": '推荐信', "NameEn": "recommendation"},{"Code": "12", "NameCn": '其他', "NameEn": "others"}];
var BaseData = (function () {
    var GetData = function (type) {
        var data;
        switch (type) {
            case "cardtype":
                data = cardType;
                break;
            case "marital":
                data = maritalStatus;
                break;
            case "political_status":
                data = political;
                break;
            case "overseasyear":
                data = overseasYear;
                break;
            case "employmenttype":
                data = employmentType;
                break;
            case "expected_salary":
                data = salaryScope;
                break;
            case "careerstatus":
                data = careerStatus;
                break;
            case "company_type":
                data = companyType;
                break;
            case "company_size":
                data = companySize;
                break;
            case "education_degree":
                data = educationDegree;
                break;
            case "prof_skills":
                data = professionalSkills;
                break;
            case "skill_level":
                data = skillLevel;
                break;
            case "foreign_language":
                data = foreignLanguage;
                break;
            default:
        }
        return data;
    }

    var RenderRadio = function (type,current,language) {
        var data = GetData(type);
        for (var o in data) {
            var item = data[o];
            var name = language == 1 ? item.NameCn : item.NameEn;
            if (item.Code == current) {
                document.write("<input type='Radio' name='" + type + "' value='" + item.Code + "' checked='checked' />" + name);
            } else {
                document.write("<input type='Radio' name='" + type + "' value='" + item.Code + "' />" + name);
            }
        }
    };
    var RenderCheckBox = function (type, current,name, language) {
        var data = GetData(type);
        for (var o in data) {
            var item = data[o];
            var title = language == 1 ? item.NameCn : item.NameEn;
            if (current.indexOf(item.Code) <0) {
                document.write("<input type='CheckBox' name='" + name + "' value='" + item.Code + "' />" + title);
            } else {
                document.write("<input type='CheckBox' name='" + name + "' value='" + item.Code + "' checked='checked' />" + title);
               
            }
        }
    };
    var RenderSelect = function (type, current, language) {
        var data = GetData(type);
        for (var o in data) {
            var item = data[o];
            var name = language == "1" ? item.NameCn : item.NameEn;
            if (item.Code == current) {
                document.writeln("<option value='" + item.Code + "'selected='selected'>" + name + "</option>");
            } else {
                document.writeln("<option value='" + item.Code + "'>" + name + "</option>");
            }
        }
    };
    var IdTypeSelect = function (type, current, language) {
        var data = GetData(type);
        for (var o in data) {
            var item = data[o];
            var name = language == "1" ? item.NameCn : item.NameEn;
            document.writeln("<a def-value='" + item.Code + "' href='javascript:void(0);' title='"+name+"'  >" + name + "</a>");
            
        }
    }; 

	
	//For Standard Resume Add
    var RenderCurrentCareerStatusForStandardAdd = function (language) {
        var data = GetData("careerstatus");
        for (var o in data) {
            var item = data[o];
            var name = language == "1" ? item.NameCn : item.NameEn;
            /*因为在IE和FF中li的value属性的值如果是形式如0100会被自动转成100，所以把value改成value_submit*/
            document.writeln("<li title='" + name + "' value_submit='" + item.Code + "'>" + name + "</li>");
        }
    };
    var RenderSalaryScopeForStandardAdd = function (language) {
        var data = GetData("expected_salary");
        for (var o in data) {
            var item = data[o];
            var name = language == "1" ? item.NameCn : item.NameEn;
            document.writeln("<li title='" + name + "' value_submit='" + item.Code + "'>" + name + "</li>");
        }
    };
    var RenderCompanyType = function (language) {
        var data = GetData("company_type");
        for (var o in data) {
            var item = data[o];
            var name = language == "1" ? item.NameCn : item.NameEn;
            document.writeln("<li title='" + name + "' value_submit='" + item.Code + "'>" + name + "</li>");
        }
    };
    var RenderCompanySize = function (language) {
        var data = GetData("company_size");
        for (var o in data) {
            var item = data[o];
            var name = language == "1" ? item.NameCn : item.NameEn;
            document.writeln("<li title='" + name + "' value_submit='" + item.Code + "'>" + name + "</li>");
        }
    };
    var RenderEduDegree = function (language) {
        var data = GetData("education_degree");
        for (var o in data) {
            var item = data[o];
            var name = language == "1" ? item.NameCn : item.NameEn;
            document.writeln("<li title='" + name + "' value_submit='" + item.Code + "'>" + name + "</li>");
        }
    };
    var RenderProfSkills = function (language) {
        var data = GetData("prof_skills");
        for (var o in data) {
            var item = data[o];
            var name = language == "1" ? item.NameCn : item.NameEn;
            document.writeln("<li title='" + name + "' value_submit='" + item.Code + "'>" + name + "</li>");
        }
    };
    return{
        RenderRadio: RenderRadio,
        RenderSelect: RenderSelect,
        IdTypeSelect:IdTypeSelect,
        RenderCheckBox: RenderCheckBox,
        RenderCompanyType: RenderCompanyType,
        RenderCompanySize: RenderCompanySize,
        RenderEduDegree: RenderEduDegree,
        RenderProfSkills: RenderProfSkills,
        RenderCurrentCareerStatusForStandardAdd: RenderCurrentCareerStatusForStandardAdd,
        RenderSalaryScopeForStandardAdd: RenderSalaryScopeForStandardAdd
    };
})();