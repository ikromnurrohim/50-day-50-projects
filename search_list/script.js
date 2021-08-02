let exp = false;

const search = document.getElementById("search");
const sel = document.getElementById("results");
const dd = document.getElementById("chev");

search.addEventListener("keyup", (e) => {
	find(search.value);
});

search.addEventListener("click", (e) => {
	find(search.value);
});

// dd.addEventListener("click", (e) => {
// 	if (exp) {
// 		hidelist();
// 	} else {
// 		/*if (search.value != "") {
// 			find(search.value);
// 		} else {*/
// 			populate(arr);
// 			showlist();
// 		//}
// 	}
// });

// sel.addEventListener("click", (e) => {
// 	hidelist();
// 	search.value = e.target.innerHTML;
// });

// window.addEventListener("click", (e) => {
// 	event.preventDefault();
// 	if (!dd.contains(e.target) && !search.contains(e.target)) {
// 		if (e.target.className != "fas fa-chevron-down") {
// 			hidelist();
// 		}
// 	}
// });

function showlist() {
	dd.innerHTML = '<i class="fas fa-chevron-up"></i>';
	sel.style.display = "inline";
	exp = true;
}

function hidelist() {
	sel.style.display = "none";
	exp = false;
	dd.innerHTML = '<i class="fas fa-chevron-down"></i>';
}

function find(str) {
	str = str.toLowerCase();
	let sres = [];
	for (i = 0; i < arr.length; i++) {
		let n = arr[i].indexOf(str);
		console.log(n)
		if (n > -1) {
			sres.push(arr[i]);
		}
	}
	populate(sres);
	if (sres.length > 0) {
		showlist();
	} else {
		hidelist();
	}
}

function populate(items) {
	if (items.length > 0) {
		sel.innerHTML = "";
		let sorted_list = [];
		for (i = 0; i < items.length; i++) {
			sorted_list.push(items[i]);
		}
		sorted_list.sort(function (a, b) {
			return a.toLowerCase().localeCompare(b.toLowerCase());
		});
		for (i = 0; i < sorted_list.length; i++) {
			let item = document.createElement("span");
			item.setAttribute("class", "item");
			item.innerHTML = sorted_list[i];
			sel.appendChild(item);
		}
	}
}

let arr = [
	"mtifbazlxm",
	"jabqoufyan",
	"pfricpddjv",
	"vaupscpqjf",
	"sgpbgdrzlw",
	"ejvgebizzr",
	"uvpabbqzvb",
	"gndavfjttl",
	"fiwzinntqz",
	"cbagonqlxa",
	"agdopzkfrv",
	"rmtgrqbqpe",
	"ttntboygah",
	"yuorytfkhr",
	"nptvghpybw",
	"roxyczndki",
	"xambswbyzt",
	"vemxtvysjy",
	"domcpmugib",
	"zfvneibtdn",
	"tbkoqyxrjf",
	"lmtlvwkzqs",
	"nbzncmjsvo",
	"okgceuphmk",
	"zcbozypmhy",
	"nwprdfejcw",
	"adkbzxsczm",
	"gebacuneqp",
	"uxxdfugtnp",
	"maeflaeyxq",
	"lvhcsouyhp",
	"tgedsosdrl",
	"jgthgqwwwp",
	"cnfpsnulvo",
	"vtrnxrmkty",
	"vrgacdrukr",
	"tzbqoktkxu",
	"splqvucgpj",
	"rtxndxfkds",
	"nobkkryqic",
	"svnrhwdsmb",
	"eabjeaaspc",
	"eowptwsodn",
	"lrbjuelvpn",
	"dnkiwvvquq",
	"yumnqdmzcc",
	"iofvxyczkz",
	"bttteseczq",
	"ziwncoemas",
	"cnowtqiqsq",
	"wrwtgmcugw",
	"nbswzqflmy",
	"ytvysfoqhf",
	"psgdfchumd",
	"nyaefnzamx",
	"uiuunhcwca",
	"geqwvkvqkg",
	"lhexhcxoho",
	"eqlwipbzed",
	"nvvcovlsdx",
	"pzunrtgkrs",
	"fqumiodsjq",
	"fxtgjvszea",
	"epjppwuprs",
	"ymeeoacdyv",
	"dsopoxfybt",
	"zwdclknnkv",
	"zobpycbipd",
	"xwhqmhhbba",
	"otkjeezica",
	"tryfzwigyk",
	"vfqhgihqxz",
	"ssqpwtxlwy",
	"yocbtcluet",
	"ojbckylkae",
	"kphmgoymxr",
	"capypxrrdo",
	"rocrasjlec",
	"jwmrjgtljw",
	"dydyqodspu",
	"urmctuyaeo",
	"vxddvrtatw",
	"miwmzhvyyx",
	"ufcjloyqkx",
	"ewnryderkx",
	"niidauduux",
	"vufdyanydo",
	"efehtseniy",
	"cauauiaoao",
	"brlbrnhyzn",
	"qcssqexzcb",
	"ituvjttmun",
	"whicikkiel",
	"bilzmasmsq",
	"aaeqvjoxfv",
	"dygtonalqt",
	"kibgxtgtou",
	"rphxjhtcxr",
	"nsrhyzoswv",
	"sllumysjeu",
	"xiaivxvbql",
	"lsicsfvvgo",
	"wjigabygfn",
	"aawdyubpyq",
	"uoajusblzp",
	"zqwytsagml",
	"azucubyjlk",
	"lijxzyrdal",
	"erqfqcjbxa",
	"pvnwodelar",
	"gdvriuyrht",
	"ufofvgpiao",
	"bdzbgraaug",
	"avsyizcnxy",
	"ilfegvbhcw",
	"csaffsrlbp",
	"caxualflyh",
	"rigktdatfc",
	"usehncxkng",
	"miilctgbhu",
	"bbmwnruesr",
	"oyaiwlywaz",
	"cldlmdnhrg",
	"wxxpnherst",
	"uyxsesbkdx",
	"dxwhgpekzw",
	"keijdjgjcf",
	"qnsdcnfkov",
	"llbqpyovxu",
	"amylxskwok",
	"gmtyiwunft",
	"erswtccspl",
	"yclddjvcbp",
	"ylwgwrdstw",
	"brqtfttytm",
	"wcbesztuge",
	"zlddnldbjm",
	"ixvgpjusnx",
	"becvzxkfgg",
	"lzjbpdjhbp",
	"ywogsitoyd",
	"lcssugslry",
	"wahjvvrytb",
	"dvtniuvpdg",
	"umrkcrnhqp",
	"gaqzcnnhtp",
	"fyemqfljyi",
	"uwnveehurx",
	"ezfonvflgt",
	"ccbgafrahb",
	"uexebicdpz",
	"figshbscfb",
	"scndmwcjza",
	"xnoqwtjrhv",
	"zxnrzlnapz",
	"kqmsbxzmlq",
	"rfzckhtdsv",
	"ewiirmsiug",
	"fqpzutnfij",
	"urlwzehpto",
	"miqpnqflni",
	"jcwrtkwkjt",
	"jorffdzxez",
	"suyscnixdz",
	"bzyxvqdepv",
	"axgrfieynv",
	"ufwurtnwxs",
	"epubeyhpeo",
	"lkukzkyfxf",
	"vakayedmyj",
	"fqiqudwygf",
	"ylptyvddxl",
	"gsumnfyvfk",
	"tgphhaubgt",
	"cropmfzrla",
	"pgsssyjkxy",
	"qsglaxfjmb",
	"ewpksnthay",
	"wuvvwnbllm",
	"fosqddqpks",
	"ygoykjfoqo",
	"rtfaflhgjl",
	"pcatbonvlp",
	"ytdmovvuho",
	"rnddqjzlby",
	"dbgnmielnh",
	"ffoqtpdgyn",
	"bixvkfolos",
	"fvbvwvxkal",
	"gemqtjvivs",
	"pinpgjafzy",
	"ocrzzsdavd",
	"wrzlfuiien",
	"lnrvojhsny",
	"ruyxszifdg",
	"sngaskatvr",
	"rdwjgindtc",
	"nxnoybdezl",
	"frhpdypkzx",
	"nyemvulfsn",
	"onuyiqrzrw",
	"sftwubwmod",
	"ksqqcllogd",
	"lyvnflwnsw",
	"ljxpjngptd",
	"whqqguofad",
	"ndrtqwiubi",
	"ugzcedvjmj",
	"eoggilrrkn",
	"xnvcebnvyl",
	"fifdnpyakw",
	"xjdmarvsge",
	"fqvawcwkvs",
	"udmfgxzcdg",
	"iicnqusihm",
	"dhvtjthtno",
	"hrfjvhysug",
	"nftgvnjkay",
	"vohbxmatrj",
	"gbcjsovurd",
	"awvlxwpfmi",
	"emuklzewjt",
	"mhnmxqwfnv",
	"payznzphjk",
	"qgdfjcauit",
	"bsodszqxxf",
	"ahzxstttoi",
	"hdgurfaele",
	"aazosgcamj",
	"pitlkxzcfe",
	"tuggdhsfih",
	"bxghhhycbp",
	"iiqxyisjeh",
	"zfvqonyzbe",
	"zzsykuqnis",
	"wpymzfeejq",
	"xkyisqlrlp",
	"jclinvodgp",
	"exdoxncwwd",
	"ohsqzzcnvx",
	"xseqetcwkr",
	"gcubwdqpra",
	"fzgnhzjrol",
	"xrljvtbyue",
	"rrliakoqpo",
	"iaghlfygpb",
	"fkznbomhnt",
	"jgbpqbjeip",
	"xbykdekhqc",
	"pplskpqrdp",
	"wklwaxkwqc",
	"ehmyzgtzbo",
	"xohedkyrez",
	"zodxirtmjf",
	"vfkeeeruey",
	"zxnfdrplsp",
	"kvcbqenaus",
	"ahvxcoqpdj",
	"jtvlrngitf",
	"rjsvtyyduu",
	"gtadmfutdd",
	"tdysmzekun",
	"ymmfnmppry",
	"snnqxwdhda",
	"kusnywcksr",
	"gmozeenehh",
	"fbepxgwgag",
	"urcqhjblwq",
	"fepsqovqgp",
	"rekelxyjoq",
	"wxatsorpcy",
	"lwetcmhioh",
	"befeornlwu",
	"nsegmtbawl",
	"yezkynyhhn",
	"jyvzbshvsq",
	"ivwrqdbiiy",
	"mtrgxrpefs",
	"rtrzrguirr",
	"zxnvbpkivz",
	"japwweatej",
	"iehlahnxes",
	"elosrinekx",
	"qkjkbomcas",
	"kqvssvutym",
	"dlrerfpvre",
	"cfwdkdhkeu",
	"kjsbscjntj",
	"wnxuhtuubm",
	"ootnwevvxj",
	"gqmmyqcrqa",
	"ukowwupitq",
	"owjxedcwut",
	"ubffpblcgk",
	"xkfclakpbb",
	"dthqddyhmv",
	"edmbfxhsbp",
	"isjtvesppn",
	"jibpwhsctt",
	"mbtbzjwcyz",
	"zvpzsadpfq",
	"ywmgbuusuw",
	"ibkwjgdlkc",
	"diianibmej",
	"ulgamlbnci",
	"tdjvmseapm",
	"glwugevofw",
	"ketcgrpnpq",
	"ljlwtuscbh",
	"ezwscfatbw",
	"ynxipinhlq",
	"emixogmxay",
	"yqtjqkvxlb",
	"rvkgbbgkup",
	"hcuqskoujr",
	"xhssntbduz",
	"outynnqnme",
	"mvvbeulcnu",
	"viemuunmbz",
	"qrxluatffe",
	"qivhycipjg",
	"bhwacjwxqi",
	"pijiwtlllk",
	"silqirdpza",
	"zfodltndrs",
	"ihvvpcukjz",
	"jztuqgmduj",
	"tkiyqwxazj",
	"xmfhcoaziv",
	"bhmimsonvx",
	"svmakohmdj",
	"humduptcsl",
	"mvsjrwtmrl",
	"lakmmicpuh",
	"dciiluppma",
	"ssfvehmmpu",
	"tdkunkiwes",
	"lxmbtdnlzm",
	"pdazvgouvl",
	"jsxhivbifz",
	"wtsqsuizga",
	"twxzreyrsh",
	"pmfyfzvdao",
	"hmxsixfije",
	"tiveckstpv",
	"soqpzcexnu",
	"yrwicefxst",
	"cxxxuuddri",
	"jcqwausoel",
	"oqoevmwdfe",
	"kyrfcfoyis",
	"dpftsfbyvi",
	"qmycypvqps",
	"czpsrohvwv",
	"adrbmpopap",
	"ygczrrpfmb",
	"jnhvjyasre",
	"jscduducwz",
	"clfzyopesr",
	"dmnlckvraj",
	"xwwaqcafpk",
	"vstacdflav",
	"nxzlijqfnj",
	"nyyzvyevvm",
	"qkmowraqhe",
	"evgrqoryfd",
	"wohlmejsdk",
	"yhoktuwnun",
	"fzttewnvgk",
	"yqkbssfkuu",
	"uxmgppinvr",
	"klvbbwxhkx",
	"nopprnapwy",
	"twwfavwuet",
	"dkbsolctsw",
	"cyeysglzoz",
	"zucvnadgnh",
	"mxeqqdxpye",
	"rmwwbwbbnp",
	"wumazbayyr",
	"guuxrbzxrz",
	"flfmspyyiz",
	"ewknsdezad",
	"boqfgngdcr",
	"lcbsnsdavk",
	"ttmavnxocv",
	"dfmcbsjwex",
	"lbgfzbllzl",
	"oplvojrcfr",
	"sqoxepyysx",
	"minzlxvmxm",
	"kechaurmml",
	"orbtnhzadr",
	"yiehhvgmjt",
	"nnzoeuihhl",
	"pnuzznnpcv",
	"mlzfkrakpd",
	"wbirvjbcop",
	"uvzshbkzby",
	"gmexfiqohk",
	"cbqsfielvf",
	"gfdxpwlzgs",
	"rtrhpljcer",
	"anpefyccey",
	"pthsegfsvx",
	"mfzodlnvhq",
	"galswoesrw",
	"gjddhrgiij",
	"cbndwfretg",
	"nddzgrdjaa",
	"dpoqwbpgjj",
	"ppjhovoama",
	"fxvofxyklz",
	"pdhjiuhdyu",
	"nvzofifdip",
	"yxaybhrllj",
	"rwjaesaior",
	"uizxscrqii",
	"qozcderbpx",
	"kwfzowvzrz",
	"bcxludhwsy",
	"mhsriltdvz",
	"hmhhtdymbl",
	"xicvmddtto",
	"omonvywxxa",
	"zvrxdbfool",
	"sybryxbomv",
	"eybhwepoej",
	"yxnbjspjmb",
	"gicdfkqgjc",
	"otpxcismat",
	"zrhjlkfnhv",
	"mhgkwszuea",
	"jzddrjxhjk",
	"cvdgbdlmia",
	"aydnhvwkbp",
	"pqkjiobzkm",
	"yxvpllffuq",
	"ocsesyqufr",
	"unhkcgcplx",
	"xuiciodzez",
	"nyzrtqitli",
	"ebvjdmtoke",
	"xoghdbwyrj",
	"nrifbsfhxb",
	"nvykcpaxwg",
	"lglktoyndb",
	"cmjjfllhen",
	"blxehfwdcz",
	"lwylkztaao",
	"ctwrbjbvzv",
	"ugscyeqisb",
	"uklyewqktn",
	"fkcnxhywqe",
	"xvqltezufl",
	"wmajmdsxeq",
	"immhdkzavz",
	"djvxpamyjc",
	"fqmjimciuc",
	"lreyjbzueg",
	"kukdjvzhds",
	"tyhywhnieq",
	"ckveidykdz",
	"uujlfiysak",
	"yxmoiuhemq",
	"qracmvczvl",
	"bovucffrys",
	"pspqewukfs",
	"wspuicmqku",
	"pgqeptscbp",
	"vokpldpdop",
	"oukrkkwhih",
	"gjhrecigzl",
	"ofcubbeexm",
	"hkgpfymgzi",
	"ixluwroerk",
	"scejvmaonj",
	"qsswooaktj",
	"yoxirszmxa",
	"bnbxgukxau",
	"wucrmuflim",
	"gtcghtplwu",
	"pxomqclpap",
	"dzxsdqovhu",
	"ifbhiwkmkf",
	"yfxtnlzepk",
	"wsafdjhrfo",
	"rmehjvywut",
	"gpccabbmmn",
	"dewafimoya",
	"gonohceavl",
	"gkleelakwl",
	"zcdsenyppp",
	"ywxdzxxswo",
	"kefbsmjwed",
	"lmivferahz",
	"hyzqplwvkr",
	"ajffnqwvpm",
	"gfrpvureas",
	"netbuwhmoq",
	"zjnqqawuxg",
	"nklkxyybnj",
	"jvgeraonrf",
	"rzslttoevl",
	"gfzxhanrym",
	"ycprxzbpbv",
	"pyvpnmsetu",
	"jxqoekvppg",
	"htgslnnftr",
	"sngtgncdld",
	"fsermnqrui",
	"yzcltstrhc",
	"eemyoeekwq",
	"mpsrjmboli",
	"rfjtenpxcm",
	"ohyfyfrorf",
	"mwjhtpwdeb",
	"gxcbfvwljc",
	"ydgtvexbyz",
	"khxxyqdvgh",
	"xmvtebqhmf",
	"fscsnftsfj",
	"dibcjnaovg",
	"kogjddyxfq",
	"agmpkltdqi",
	"lpwzeksuia",
	"wgqxrihrlj",
	"rbngcyoibl",
	"gxigcgasfc",
	"tkyeqdbjen",
	"cwdiqkvolu",
	"iwhiqbgohy",
	"etxjtmzkps",
	"qkqjhotbmv",
	"gtdoskczpu",
	"acygddrykl",
	"sreyvvbift",
	"ezxzioxyjw",
	"bcmnamjgrc",
	"gapfddpncj",
	"tzqkbzkkda",
	"dqdvqqwjep",
	"opvkkbnnna",
	"zyjakzlrgh",
	"uqhzxnhmao",
	"ncomrlaxao",
	"rugszhztur",
	"pmmrhxvgae",
	"sqmlsdfmci",
	"poxhkmxjjn",
	"wemjpxzvrk",
	"jdixxdqajx",
	"qfdfkugrom",
	"cycnaqrdvm",
	"hevksfzkyc",
	"yagrfyxwri",
	"uimnszsern",
	"rdvyztbkxx",
	"ivtpodthop",
	"dulfdgncin",
	"oxzjqnhucn",
	"hlxwzcguoz",
	"yorgyudmlw",
	"ewprhozpsf",
	"hlungcocja",
	"npendxxacu",
	"kicqijtqcb",
	"rqsethsoet",
	"usyrphhtlv",
	"srtkyhjuos",
	"rmecbrnztn",
	"kachjzfwnh",
	"dntdowepnl",
	"ckoqdceust",
	"xrvycvyoaa",
	"inwdvqnymh",
	"dnquonumzq",
	"gayswpcrhb",
	"eduwxhuyqm",
	"ogsiiwzhnf",
	"zakvqzqlll",
	"hoeelovrtw",
	"tggbqilpjh",
	"ksisefwvej",
	"ncffiszonn",
	"lpreqfqxnc",
	"regzsuyxpy",
	"kieeyoesgu",
	"bzwsqhirff",
	"jxbeyvrolp",
	"douqnelwbz",
	"ztoogayive",
	"idrbgclsiv",
	"svzelfjlja",
	"midpyujpeg",
	"ideyisvwyr",
	"lqzipaxsbi",
	"mxeqzefgbj",
	"aikzqsdahb",
	"ateanmutuh",
	"tufceopyns",
	"iiljfrwtmj",
	"brruvtmpds",
	"htkqzrhhal",
	"kmvfxlpzbt",
	"sbbahzpqfd",
	"qslrtsgcsq",
	"thyfzuwkbp",
	"tnfrsuyofd",
	"znlgtywrfz",
	"uuwfohdfsz",
	"znyzhgjqal",
	"gngmbrilgv",
	"qcztrvrjou",
	"mgsnziycxm",
	"ghxqyumnpb",
	"loignmigos",
	"peckgqxzwe",
	"umgabdihkc",
	"gtkcwmmapy",
	"pbgxworfep",
	"uyxhznqyrr",
	"ieshtqrxoy",
	"cjsaihpmcs",
	"ywalesyayt",
	"puoocljjuo",
	"yyxqafysni",
	"jpqxvwouae",
	"exmiizdmpa",
	"uipftbiksg",
	"kmyxodhmhp",
	"trakwkhpjc",
	"gmpxejiahg",
	"epzshbjshi",
	"ddibmlbgab",
	"srimqlomzb",
	"axhboojgjc",
	"yodbldwamf",
	"khkgutonhl",
	"mavmizkpkh",
	"vgittpxlti",
	"kaesztenxe",
	"etksprzdev",
	"qbckbyfmnj",
	"bpbqunyskg",
	"bnqobhzxxm",
	"kmackzdmxp",
	"gulvnqfauw",
	"rircettvvu",
	"kempussofz",
	"rwrlvhfgwx",
	"ifwugdqhrq",
	"nmcmkgvyge",
	"ovjhnkvubf",
	"rlbubosqbe",
	"gyzajeeuqv",
	"eugupaxvpf",
	"wcjxlhooya",
	"wrtzslvgzd",
	"wxvvkvotmj",
	"knhzcklwno",
	"gogeikaflw",
	"udcocmjakm",
	"mghvsbnjrb",
	"rnhlwnoulk",
	"wqittyjman",
	"ndpdrbzsqg",
	"gztojqtyzs",
	"adymvvduul",
	"ldtfnjiark",
	"moruyaycba",
	"ecdehycduh",
	"bezwxsojlx",
	"qjlggoklez",
	"acuyhvuyee",
	"nwukrdxojl",
	"bbvhxyxirq",
	"ikfzchhwfo",
	"ahyvvsbuex",
	"rwunszmfsl",
	"elkhzfggly",
	"rjcrnnofol",
	"jaqbtjimwb",
	"cdurmovzst",
	"hfbpvqduth",
	"kjcisbuslw",
	"iktscowhlc",
	"adrlbweowh",
	"kjovwnivmp",
	"htbuznmzhv",
	"pegnalxxag",
	"isdyveibjw",
	"uqchsercma",
	"zdjirmlmhy",
	"bjqdeixlxj",
	"cwyvhknoge",
	"sxczzkbldo",
	"lpuwjkidhf",
	"pnhkvtinsd",
	"wnzgitikxn",
	"xhceeghmjp",
	"dnnicibhcj",
	"pketxztulj",
	"kvhyfnunvp",
	"vfrqoxktwa",
	"xmkprdigvn",
	"rdmlaalxpa",
	"fvlrwsynvv",
	"uxntqewyap",
	"rffketzaxs",
	"mhprulwsic",
	"giafenrhji",
	"quliompzqd",
	"bhuumyyvyn",
	"hgmuqibepj",
	"yeuuhbuwld",
	"wsderrxmgy",
	"ferszwrhod",
	"pdwdlening",
	"mqzrxeacwa",
	"uttxfpptwe",
	"pfnpxgxxuy",
	"ymrghotkbg",
	"jixctunqwe",
	"njdfbxlyzv",
	"adcjqeuvsy",
	"vrrnizrywx",
	"ixsajwaghj",
	"jtqthdndyx",
	"xkncykogak",
	"xhahimngpz",
	"owzgsjmuwb",
	"jkibmmqchr",
	"gkjromulma",
	"fyerkxycad",
	"wrcnapkbcb",
	"rhefvdzlol",
	"kdanyvqbkn",
	"bwykbslfej",
	"lkwenczbjn",
	"ogmvvarrpg",
	"qhslqgvszi",
	"iqhpkroita",
	"isgsqtdugt",
	"svfalcluhm",
	"lzhxpxvwwp",
	"vftennmyvk"
];