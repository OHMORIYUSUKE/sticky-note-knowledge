import {
  TextArea,
  HStack,
  Box,
  Stack,
  Heading,
  Container,
  FormControl,
  Modal,
  Input,
  Button,
  VStack,
  Center,
  Icon,
  NativeBaseProvider,
  IconButton,
  Image,
} from "native-base";
import { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import Header from "../Header";
import { trpc } from "../trpc";
// const source = [
//   {
//     html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
//   <!-- saved from url=(0058)https://www.aozora.gr.jp/cards/000879/files/140_15196.html -->
//   <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja"><head><meta http-equiv="Content-Type" content="text/html; charset=Shift_JIS">

//     <meta http-equiv="content-style-type" content="text/css">
//     <link rel="stylesheet" type="text/css" href="./芥川龍之介 猿蟹合戦_files/default.css">
//     <title>芥川龍之介 猿蟹合戦</title>
//     <link rel="DC.Schema" href="http://purl.org/dc/elements/1.1/">
//     <meta name="DC.Creator" content="芥川龍之介">
//     <meta name="DC.Publisher" content="青空文庫">
//   </head>
//   <body class="vsc-initialized" cz-shortcut-listen="true">
//   <h1 class="title">猿蟹合戦</h1>
//   <h2 class="author">芥川龍之介</h2>
//   <div class="main_text">
//   <br>
//    <ruby>蟹<rp>（</rp><rt>かに</rt><rp>）</rp></ruby>の握り飯を奪った<ruby>猿<rp>（</rp><rt>さる</rt><rp>）</rp></ruby>はとうとう蟹に<ruby>仇<rp>（</rp><rt>かたき</rt><rp>）</rp></ruby>を取られた。蟹は<ruby>臼<rp>（</rp><rt>うす</rt><rp>）</rp></ruby>、<ruby>蜂<rp>（</rp><rt>はち</rt><rp>）</rp></ruby>、卵と共に、<ruby>怨敵<rp>（</rp><rt>おんてき</rt><rp>）</rp></ruby>の猿を殺したのである。――その話はいまさらしないでも<ruby>好<rp>（</rp><rt>よ</rt><rp>）</rp></ruby>い。ただ猿を仕止めた<ruby>後<rp>（</rp><rt>のち</rt><rp>）</rp></ruby>、蟹を始め同志のものはどう云う運命に<ruby>逢着<rp>（</rp><rt>ほうちゃく</rt><rp>）</rp></ruby>したか、それを話すことは必要である。なぜと云えばお<ruby>伽噺<rp>（</rp><rt>とぎばなし</rt><rp>）</rp></ruby>は全然このことは話していない。<br>
//    いや、話していないどころか、あたかも蟹は穴の中に、臼は台所の<ruby>土間<rp>（</rp><rt>どま</rt><rp>）</rp></ruby>の隅に、蜂は<ruby>軒先<rp>（</rp><rt>のきさき</rt><rp>）</rp></ruby>の蜂の巣に、卵は<ruby>籾殻<rp>（</rp><rt>もみがら</rt><rp>）</rp></ruby>の箱の中に、太平無事な生涯でも送ったかのように<ruby>装<rp>（</rp><rt>よそお</rt><rp>）</rp></ruby>っている。<br>
//     </div>
//   </body></html>`,
//   },
//   {
//     html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
//     <!-- saved from url=(0060)https://www.aozora.gr.jp/cards/000879/files/43016_16836.html -->
//     <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja"><head><meta http-equiv="Content-Type" content="text/html; charset=Shift_JIS">

//       <meta http-equiv="content-style-type" content="text/css">
//       <link rel="stylesheet" type="text/css" href="./芥川龍之介 トロッコ_files/default.css">
//       <title>芥川龍之介 トロッコ</title>
//       <link rel="DC.Schema" href="http://purl.org/dc/elements/1.1/">
//       <meta name="DC.Creator" content="芥川龍之介">
//       <meta name="DC.Publisher" content="青空文庫">
//     </head>
//     <body class="vsc-initialized" cz-shortcut-listen="true">
//     <h1 class="title">トロッコ</h1>
//     <h2 class="author">芥川龍之介</h2>
//     <div class="main_text">
//     <br>
//     <br>
//     <br>
//     　小田原<ruby>熱海<rp>（</rp><rt>あたみ</rt><rp>）</rp></ruby>間に、軽便鉄道<ruby>敷設<rp>（</rp><rt>ふせつ</rt><rp>）</rp></ruby>の工事が始まったのは、<ruby>良平<rp>（</rp><rt>りょうへい</rt><rp>）</rp></ruby>の八つの年だった。良平は毎日村<ruby>外<rp>（</rp><rt>はず</rt><rp>）</rp></ruby>れへ、その工事を見物に行った。工事を――といったところが、<ruby>唯<rp>（</rp><rt>ただ</rt><rp>）</rp></ruby>トロッコで土を運搬する――それが面白さに見に行ったのである。<br>
//     　トロッコの上には土工が二人、土を積んだ<ruby>後<rp>（</rp><rt>うしろ</rt><rp>）</rp></ruby>に<ruby>佇<rp>（</rp><rt>たたず</rt><rp>）</rp></ruby>んでいる。トロッコは山を<ruby>下<rp>（</rp><rt>くだ</rt><rp>）</rp></ruby>るのだから、人手を借りずに走って来る。<ruby>煽<rp>（</rp><rt>あお</rt><rp>）</rp></ruby>るように車台が動いたり、土工の<ruby>袢天<rp>（</rp><rt>はんてん</rt><rp>）</rp></ruby>の<ruby>裾<rp>（</rp><rt>すそ</rt><rp>）</rp></ruby>がひらついたり、細い線路がしなったり――良平はそんなけしきを<ruby>眺<rp>（</rp><rt>なが</rt><rp>）</rp></ruby>めながら、土工になりたいと思う事がある。せめては一度でも土工と一しょに、トロッコへ乗りたいと思う事もある。トロッコは村外れの平地へ来ると、自然と<ruby>其処<rp>（</rp><rt>そこ</rt><rp>）</rp></ruby>に止まってしまう。と同時に土工たちは、身軽にトロッコを飛び降りるが早いか、その線路の終点へ車の土をぶちまける。それから今度はトロッコを押し押し、もと来た山の方へ登り始める。良平はその時乗れないまでも、押す事さえ出来たらと思うのである。<br>
//     　<ruby>或<rp>（</rp><rt>ある</rt><rp>）</rp></ruby>夕方、――それは二月の初旬だった。良平は二つ下の弟や、弟と同じ年の隣の子供と、トロッコの置いてある村外れへ行った。トロッコは泥だらけになったまま、薄明るい中に並んでいる。が、その<ruby>外<rp>（</rp><rt>ほか</rt><rp>）</rp></ruby>は<ruby>何処<rp>（</rp><rt>どこ</rt><rp>）</rp></ruby>を見ても、土工たちの姿は見えなかった。三人の子供は恐る恐る、一番<ruby>端<rp>（</rp><rt>はし</rt><rp>）</rp></ruby>にあるトロッコを押した。トロッコは三人の力が<ruby>揃<rp>（</rp><rt>そろ</rt><rp>）</rp></ruby>うと、突然ごろりと車輪をまわした。良平はこの音にひやりとした。しかし二度目の車輪の音は、もう彼を驚かさなかった。ごろり、ごろり、――トロッコはそう云う音と共に、三人の手に押されながら、そろそろ線路を登って行った。<br>
//     　その内にかれこれ十<ruby>間<rp>（</rp><rt>けん</rt><rp>）</rp></ruby>程来ると、線路の<ruby>勾配<rp>（</rp><rt>こうばい</rt><rp>）</rp></ruby>が急になり出した。トロッコも三人の力では、いくら押しても動かなくなった。どうかすれば車と一しょに、押し戻されそうにもなる事がある。良平はもう<ruby>好<rp>（</rp><rt>よ</rt><rp>）</rp></ruby>いと思ったから、年下の二人に合図をした。<br>
//     「さあ、乗ろう！」<br>
//     　彼等は一度に手をはなすと、トロッコの上へ飛び乗った。トロッコは最初<ruby>徐<rp>（</rp><rt>おもむ</rt><rp>）</rp></ruby>ろに、それから見る見る<ruby>勢<rp>（</rp><rt>いきおい</rt><rp>）</rp></ruby>よく、一息に線路を<ruby>下<rp>（</rp><rt>くだ</rt><rp>）</rp></ruby>り出した。その途端につき当りの風景は、<ruby>忽<rp>（</rp><rt>たちま</rt><rp>）</rp></ruby>ち両側へ分かれるように、ずんずん目の前へ展開して来る。顔に当る<ruby>薄暮<rp>（</rp><rt>はくぼ</rt><rp>）</rp></ruby>の風、足の下に<ruby>躍<rp>（</rp><rt>おど</rt><rp>）</rp></ruby>るトロッコの動揺、――良平は<ruby>殆<rp>（</rp><rt>ほとん</rt><rp>）</rp></ruby>ど<ruby>有頂天<rp>（</rp><rt>うちょうてん</rt><rp>）</rp></ruby>になった。<br>
//     　しかしトロッコは二三分の<ruby>後<rp>（</rp><rt>のち</rt><rp>）</rp></ruby>、もうもとの終点に止まっていた。<br>
//     「さあ、もう一度押すじゃあ」<br>
//     　良平は年下の二人と一しょに、又トロッコを押し上げにかかった。が、まだ車輪も動かない内に、突然彼等の<ruby>後<rp>（</rp><rt>うしろ</rt><rp>）</rp></ruby>には、誰かの足音が聞え出した。のみならずそれは聞え出したと思うと、急にこう云う怒鳴り声に変った。<br>
//     「この野郎！　誰に<ruby>断<rp>（</rp><rt>ことわ</rt><rp>）</rp></ruby>ってトロに<ruby>触<rp>（</rp><rt>さわ</rt><rp>）</rp></ruby>った？」<br>
//     　其処には古い<ruby>印袢天<rp>（</rp><rt>しるしばんてん</rt><rp>）</rp></ruby>に、季節外れの<ruby>麦藁帽<rp>（</rp><rt>むぎわらぼう</rt><rp>）</rp></ruby>をかぶった、背の高い土工が佇んでいる。――そう云う姿が目にはいった時、良平は年下の二人と一しょに、もう五六間逃げ出していた。――それぎり良平は使の帰りに、人気のない工事場のトロッコを見ても、二度と乗って見ようと思った事はない。唯その時の土工の姿は、今でも良平の頭の何処かに、はっきりした記憶を残している。薄明りの中に<ruby>仄<rp>（</rp><rt>ほの</rt><rp>）</rp></ruby>めいた、小さい黄色の麦藁帽、――しかしその記憶さえも、<ruby>年毎<rp>（</rp><rt>としごと</rt><rp>）</rp></ruby>に色彩は薄れるらしい。<br>
//     　その<ruby>後<rp>（</rp><rt>のち</rt><rp>）</rp></ruby>十日余りたってから、良平は又たった一人、<ruby>午<rp>（</rp><rt>ひる</rt><rp>）</rp></ruby>過ぎの工事場に佇みながら、トロッコの来るのを眺めていた。すると土を積んだトロッコの<ruby>外<rp>（</rp><rt>ほか</rt><rp>）</rp></ruby>に、<ruby>枕木<rp>（</rp><rt>まくらぎ</rt><rp>）</rp></ruby>を積んだトロッコが一<ruby>輛<rp>（</rp><rt>りょう</rt><rp>）</rp></ruby>、これは本線になる<ruby>筈<rp>（</rp><rt>はず</rt><rp>）</rp></ruby>の、太い線路を登って来た。このトロッコを押しているのは、二人とも若い男だった。良平は彼等を見た時から、何だか親しみ<ruby>易<rp>（</rp><rt>やす</rt><rp>）</rp></ruby>いような気がした。「この人たちならば<ruby>叱<rp>（</rp><rt>しか</rt><rp>）</rp></ruby>られない」――彼はそう思いながら、トロッコの<ruby>側<rp>（</rp><rt>そば</rt><rp>）</rp></ruby>へ<ruby>駈<rp>（</rp><rt>か</rt><rp>）</rp></ruby>けて行った。<br>
//     「おじさん。押してやろうか？」<br>
//     　その中の一人、――<ruby>縞<rp>（</rp><rt>しま</rt><rp>）</rp></ruby>のシャツを着ている男は、<ruby>俯向<rp>（</rp><rt>うつむ</rt><rp>）</rp></ruby>きにトロッコを押したまま、思った通り快い返事をした。<br>
//     「おお、押してく<strong class="SESAME_DOT">よう</strong>」<br>
//     　良平は二人の間にはいると、力一杯押し始めた。<br>
//     「<strong class="SESAME_DOT">われ</strong>は<ruby>中中<rp>（</rp><rt>なかなか</rt><rp>）</rp></ruby>力があるな」<br>
//     　<ruby>他<rp>（</rp><rt>た</rt><rp>）</rp></ruby>の一人、――耳に<ruby>巻煙草<rp>（</rp><rt>まきたばこ</rt><rp>）</rp></ruby>を<ruby>挟<rp>（</rp><rt>はさ</rt><rp>）</rp></ruby>んだ男も、こう良平を<ruby>褒<rp>（</rp><rt>ほ</rt><rp>）</rp></ruby>めてくれた。<br>
//     　その内に線路の勾配は、だんだん楽になり始めた。「もう押さなくとも<ruby>好<rp>（</rp><rt>よ</rt><rp>）</rp></ruby>い」――良平は今にも云われるかと内心気がかりでならなかった。が、若い二人の土工は、前よりも腰を起したぎり、黙黙と車を押し続けていた。良平はとうとうこらえ切れずに、<ruby>怯<rp>（</rp><rt>お</rt><rp>）</rp></ruby>ず<ruby>怯<rp>（</rp><rt>お</rt><rp>）</rp></ruby>ずこんな事を尋ねて見た。<br>
//     「<ruby>何時<rp>（</rp><rt>いつ</rt><rp>）</rp></ruby>までも押していて<ruby>好<rp>（</rp><rt>い</rt><rp>）</rp></ruby>い？」<br>
//     「好いとも」<br>
//     　二人は同時に返事をした。良平は「優しい人たちだ」と思った。<br>
//     　五六町余り押し続けたら、線路はもう一度急勾配になった。其処には両側の<ruby>蜜柑畑<rp>（</rp><rt>みかんばたけ</rt><rp>）</rp></ruby>に、黄色い実がいくつも日を受けている。<br>
//     「登り<ruby>路<rp>（</rp><rt>みち</rt><rp>）</rp></ruby>の方が好い、<ruby>何時<rp>（</rp><rt>いつ</rt><rp>）</rp></ruby>までも押させてくれるから」――良平はそんな事を考えながら、全身でトロッコを押すようにした。<br>
//     　蜜柑畑の間を登りつめると、急に線路は<ruby>下<rp>（</rp><rt>くだ</rt><rp>）</rp></ruby>りになった。縞のシャツを着ている男は、良平に「やい、乗れ」と云った。良平は<ruby>直<rp>（</rp><rt>すぐ</rt><rp>）</rp></ruby>に飛び乗った。トロッコは三人が乗り移ると同時に、蜜柑畑の<ruby><img gaiji="gaiji" src="./芥川龍之介 トロッコ_files/1-14-75.png" alt="※(「均のつくり」、第3水準1-14-75)" class="gaiji"><rp>（</rp><rt>におい</rt><rp>）</rp></ruby>を<ruby>煽<rp>（</rp><rt>あお</rt><rp>）</rp></ruby>りながら、ひた<ruby>辷<rp>（</rp><rt>すべ</rt><rp>）</rp></ruby>りに線路を走り出した。「押すよりも乗る方がずっと好い」――良平は羽織に風を<ruby>孕<rp>（</rp><rt>はら</rt><rp>）</rp></ruby>ませながら、当り前の事を考えた。「行きに押す所が多ければ、帰りに又乗る所が多い」――そうもまた考えたりした。<br>
//     　<ruby>竹藪<rp>（</rp><rt>たけやぶ</rt><rp>）</rp></ruby>のある所へ来ると、トロッコは静かに走るのを<ruby>止<rp>（</rp><rt>や</rt><rp>）</rp></ruby>めた。三人は又前のように、重いトロッコを押し始めた。竹藪は何時か雑木林になった。<ruby>爪先<rp>（</rp><rt>つまさき</rt><rp>）</rp></ruby>上りの<ruby>所所<rp>（</rp><rt>ところどころ</rt><rp>）</rp></ruby>には、<ruby>赤錆<rp>（</rp><rt>あかさび</rt><rp>）</rp></ruby>の線路も見えない程、落葉のたまっている場所もあった。その路をやっと登り切ったら、今度は高い<ruby>崖<rp>（</rp><rt>がけ</rt><rp>）</rp></ruby>の向うに、広広と薄ら寒い海が開けた。と同時に良平の頭には、余り遠く来過ぎた事が、急にはっきりと感じられた。<br>
//     　三人は又トロッコへ乗った。車は海を右にしながら、雑木の枝の下を走って行った。しかし良平はさっきのように、面白い気もちにはなれなかった。「もう帰ってくれれば<ruby>好<rp>（</rp><rt>い</rt><rp>）</rp></ruby>い」――彼はそうも念じて見た。が、行く所まで行きつかなければ、トロッコも彼等も帰れない事は、<ruby>勿論<rp>（</rp><rt>もちろん</rt><rp>）</rp></ruby>彼にもわかり切っていた。<br>
//     　その次に車の止まったのは、<ruby>切崩<rp>（</rp><rt>きりくず</rt><rp>）</rp></ruby>した山を背負っている、藁屋根の茶店の前だった。二人の土工はその店へはいると、<ruby>乳呑児<rp>（</rp><rt>ちのみご</rt><rp>）</rp></ruby>をおぶった<ruby>上<rp>（</rp><rt>かみ</rt><rp>）</rp></ruby>さんを相手に、<ruby>悠悠<rp>（</rp><rt>ゆうゆう</rt><rp>）</rp></ruby>と茶などを飲み始めた。良平は<ruby>独<rp>（</rp><rt>ひと</rt><rp>）</rp></ruby>りいらいらしながら、トロッコのまわりをまわって見た。トロッコには<ruby>頑丈<rp>（</rp><rt>がんじょう</rt><rp>）</rp></ruby>な車台の板に、<ruby>跳<rp>（</rp><rt>は</rt><rp>）</rp></ruby>ねかえった泥が<ruby>乾<rp>（</rp><rt>かわ</rt><rp>）</rp></ruby>いていた。<br>
//     　<ruby>少時<rp>（</rp><rt>しばらく</rt><rp>）</rp></ruby>の<ruby>後<rp>（</rp><rt>のち</rt><rp>）</rp></ruby>茶店を出て来しなに、巻煙草を耳に<ruby>挟<rp>（</rp><rt>はさ</rt><rp>）</rp></ruby>んだ男は、（その時はもう挟んでいなかったが）トロッコの側にいる良平に新聞紙に包んだ駄菓子をくれた。良平は冷淡に「<ruby>難有<rp>（</rp><rt>ありがと</rt><rp>）</rp></ruby>う」と云った。が、<ruby>直<rp>（</rp><rt>すぐ</rt><rp>）</rp></ruby>に冷淡にしては、相手にすまないと思い直した。彼はその冷淡さを取り繕うように、包み菓子の一つを口へ入れた。菓子には新聞紙にあったらしい、石油の<img gaiji="gaiji" src="./芥川龍之介 トロッコ_files/1-14-75.png" alt="※(「均のつくり」、第3水準1-14-75)" class="gaiji">がしみついていた。<br>
//     　三人はトロッコを押しながら<ruby>緩<rp>（</rp><rt>ゆる</rt><rp>）</rp></ruby>い傾斜を登って行った。良平は車に手をかけていても、心は<ruby>外<rp>（</rp><rt>ほか</rt><rp>）</rp></ruby>の事を考えていた。<br>
//     　その坂を向うへ<ruby>下<rp>（</rp><rt>お</rt><rp>）</rp></ruby>り切ると、又同じような茶店があった。土工たちがその中へはいった<ruby>後<rp>（</rp><rt>あと</rt><rp>）</rp></ruby>、良平はトロッコに腰をかけながら、帰る事ばかり気にしていた。茶店の前には花のさいた梅に、西日の光が消えかかっている。「もう日が暮れる」――彼はそう考えると、ぼんやり腰かけてもいられなかった。トロッコの車輪を<ruby>蹴<rp>（</rp><rt>け</rt><rp>）</rp></ruby>って見たり、一人では動かないのを承知しながらうんうんそれを押して見たり、――そんな事に気もちを紛らせていた。<br>
//     　ところが土工たちは出て来ると、車の上の<ruby>枕木<rp>（</rp><rt>まくらぎ</rt><rp>）</rp></ruby>に手をかけながら、<ruby>無造作<rp>（</rp><rt>むぞうさ</rt><rp>）</rp></ruby>に彼にこう云った。<br>
//     「<strong class="SESAME_DOT">われ</strong>はもう帰んな。おれたちは今日は向う泊りだから」<br>
//     「あんまり帰りが遅くなると<strong class="SESAME_DOT">われ</strong>の<ruby>家<rp>（</rp><rt>うち</rt><rp>）</rp></ruby>でも心配する<strong class="SESAME_DOT">ずら</strong>」<br>
//     　良平は一瞬間<ruby>呆気<rp>（</rp><rt>あっけ</rt><rp>）</rp></ruby>にとられた。もうかれこれ暗くなる事、去年の暮母と岩村まで来たが、今日の<ruby>途<rp>（</rp><rt>みち</rt><rp>）</rp></ruby>はその三四倍ある事、それを今からたった一人、歩いて帰らなければならない事、――そう云う事が一時にわかったのである。良平は<ruby>殆<rp>（</rp><rt>ほとん</rt><rp>）</rp></ruby>ど泣きそうになった。が、泣いても仕方がないと思った。泣いている場合ではないとも思った。彼は若い二人の土工に、取って附けたような<ruby>御時宜<rp>（</rp><rt>おじぎ</rt><rp>）</rp></ruby>をすると、どんどん線路伝いに走り出した。<br>
//     　良平は<ruby>少時<rp>（</rp><rt>しばらく</rt><rp>）</rp></ruby>無我夢中に線路の側を走り続けた。その内に<ruby>懐<rp>（</rp><rt>ふところ</rt><rp>）</rp></ruby>の菓子包みが、邪魔になる事に気がついたから、それを<ruby>路側<rp>（</rp><rt>みちばた</rt><rp>）</rp></ruby>へ<ruby>抛<rp>（</rp><rt>ほ</rt><rp>）</rp></ruby>り出す<ruby>次手<rp>（</rp><rt>ついで</rt><rp>）</rp></ruby>に、<ruby>板草履<rp>（</rp><rt>いたぞうり</rt><rp>）</rp></ruby>も其処へ脱ぎ捨ててしまった。すると薄い<ruby>足袋<rp>（</rp><rt>たび</rt><rp>）</rp></ruby>の裏へじかに小石が食いこんだが、足だけは<ruby>遙<rp>（</rp><rt>はる</rt><rp>）</rp></ruby>かに軽くなった。彼は左に海を感じながら、急な<ruby>坂路<rp>（</rp><rt>さかみち</rt><rp>）</rp></ruby>を<ruby>駈<rp>（</rp><rt>か</rt><rp>）</rp></ruby>け登った。時時涙がこみ上げて来ると、自然に顔が<ruby>歪<rp>（</rp><rt>ゆが</rt><rp>）</rp></ruby>んで来る。――それは無理に我慢しても、鼻だけは絶えずくうくう鳴った。<br>
//     　竹藪の側を駈け抜けると、夕焼けのした<ruby>日金山<rp>（</rp><rt>ひがねやま</rt><rp>）</rp></ruby>の空も、もう<ruby>火照<rp>（</rp><rt>ほて</rt><rp>）</rp></ruby>りが消えかかっていた。良平は、<ruby>愈<rp>（</rp><rt>いよいよ</rt><rp>）</rp></ruby>気が気でなかった。<ruby>往<rp>（</rp><rt>ゆ</rt><rp>）</rp></ruby>きと<ruby>返<rp>（</rp><rt>かえ</rt><rp>）</rp></ruby>りと変るせいか、景色の違うのも不安だった。すると今度は着物までも、汗の<ruby>濡<rp>（</rp><rt>ぬ</rt><rp>）</rp></ruby>れ通ったのが気になったから、やはり必死に駈け続けたなり、羽織を<ruby>路側<rp>（</rp><rt>みちばた</rt><rp>）</rp></ruby>へ脱いで捨てた。<br>
//     　蜜柑畑へ来る頃には、あたりは暗くなる一方だった。「命さえ助かれば――」良平はそう思いながら、<ruby>辷<rp>（</rp><rt>すべ</rt><rp>）</rp></ruby>ってもつまずいても走って行った。<br>
//     　やっと遠い<ruby>夕闇<rp>（</rp><rt>ゆうやみ</rt><rp>）</rp></ruby>の中に、村外れの工事場が見えた時、良平は一思いに泣きたくなった。しかしその時もべそはかいたが、とうとう泣かずに駈け続けた。<br>
//     　彼の村へはいって見ると、もう両側の家家には、電燈の光がさし合っていた。良平はその電燈の光に、頭から汗の<ruby>湯気<rp>（</rp><rt>ゆげ</rt><rp>）</rp></ruby>の立つのが、彼自身にもはっきりわかった。井戸端に水を<ruby>汲<rp>（</rp><rt>く</rt><rp>）</rp></ruby>んでいる<ruby>女衆<rp>（</rp><rt>おんなしゅう</rt><rp>）</rp></ruby>や、畑から帰って来る<ruby>男衆<rp>（</rp><rt>おとこしゅう</rt><rp>）</rp></ruby>は、良平が<ruby>喘<rp>（</rp><rt>あえ</rt><rp>）</rp></ruby>ぎ喘ぎ走るのを見ては、「おいどうしたね？」などと声をかけた。が、彼は無言のまま、雑貨屋だの床屋だの、明るい家の前を走り過ぎた。<br>
//     　彼の<ruby>家<rp>（</rp><rt>うち</rt><rp>）</rp></ruby>の<ruby>門口<rp>（</rp><rt>かどぐち</rt><rp>）</rp></ruby>へ駈けこんだ時、良平はとうとう大声に、わっと泣き出さずにはいられなかった。その泣き声は彼の<ruby>周囲<rp>（</rp><rt>まわり</rt><rp>）</rp></ruby>へ、一時に父や母を集まらせた。<ruby>殊<rp>（</rp><rt>こと</rt><rp>）</rp></ruby>に母は何とか云いながら、良平の体を<ruby>抱<rp>（</rp><rt>かか</rt><rp>）</rp></ruby>えるようにした。が、良平は手足をもがきながら、<ruby>啜<rp>（</rp><rt>すす</rt><rp>）</rp></ruby>り上げ啜り上げ泣き続けた。その声が余り激しかったせいか、近所の女衆も三四人、薄暗い門口へ集って来た。父母は勿論その人たちは、口口に彼の泣く<ruby>訣<rp>（</rp><rt>わけ</rt><rp>）</rp></ruby>を尋ねた。しかし彼は何と云われても泣き立てるより外に仕方がなかった。あの遠い路を駈け通して来た、今までの心細さをふり返ると、いくら大声に泣き続けても、足りない気もちに迫られながら、…………<br>
//     　良平は二十六の年、<ruby>妻子<rp>（</rp><rt>さいし</rt><rp>）</rp></ruby>と一しょに東京へ出て来た。今では或雑誌社の二階に、校正の<ruby>朱筆<rp>（</rp><rt>しゅふで</rt><rp>）</rp></ruby>を握っている。が、彼はどうかすると、全然何の理由もないのに、その時の彼を思い出す事がある。全然何の理由もないのに？――<ruby>塵労<rp>（</rp><rt>じんろう</rt><rp>）</rp></ruby>に疲れた彼の前には今でもやはりその時のように、薄暗い藪や坂のある路が、細細と一すじ断続している。…………<br>
//     <br>
//     <br>
//     <br>
//     </div>
//     <div class="bibliographical_information">
//     <hr>
//     <br>
//     底本：「蜘蛛の糸・杜子春」新潮文庫、新潮社
//     <br>
//     　　　1968（昭和43）年11月15日発行<br>
//     　　　1984（昭和59）年12月25日38刷改版<br>
//     　　　1989（平成元）年5月30日46刷<br>
//     入力：蒋龍<br>
//     校正：鈴木厚司<br>
//     2004年10月31日作成<br>
//     青空文庫作成ファイル：<br>
//     このファイルは、インターネットの図書館、<a href="http://www.aozora.gr.jp/">青空文庫（http://www.aozora.gr.jp/）</a>で作られました。入力、校正、制作にあたったのは、ボランティアの皆さんです。<br>
//     <br>
//     <br>
//     </div>
//     <div class="notation_notes">
//     <hr>
//     <br>
//     ●表記について<br>
//     <ul>
//       <li>このファイルは W3C 勧告 XHTML1.1 にそった形式で作成されています。</li>
//       <li>「くの字点」をのぞくJIS X 0213にある文字は、画像化して埋め込みました。</li>
//       <li>傍点や圏点、傍線の付いた文字は、強調表示にしました。</li>
//     </ul>
//     </div>
//     </body></html>`,
//   },
// ];

const BookView = ({ navigation }: any) => {
  const [contentHeight, setContentHeight] = useState(0);
  const handleContentSizeChange = (width, height) => {
    setContentHeight(height);
  };
  // const { width, height } = Dimensions.get("window"); // hooksのuseWindowDimensions()を用いてもwidht, heightを取得する事が出来る
  // const scrollEnabled = contentHeight > height;

  const [value, onChangeText] = useState("");
  const [onStick, setOnStick] = useState(false);
  const [onStickList, setOnStickList] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, seteditModalVisible] = useState(false);
  const { width } = useWindowDimensions();

  const { data, isFetched } = trpc.useQuery([
    "getBookById",
    { id: "00e25abb-d487-49f5-a186-c92e4f59160b" },
  ]);
  const text = data ? data : "";
  const source = {
    html: `${text.text}`,
  };
  console.log(text);

  const closeEvent = () => {
    setModalVisible(!modalVisible);
    setOnStick(!onStick);
  };
  const closeEditEvent = () => {
    seteditModalVisible(!editModalVisible);
    setOnStickList(true);
    console.log(onStick);
  };
  return (
    <>
      {/* <ScrollView
        onContentSizeChange={handleContentSizeChange}
        scrollEnabled={scrollEnabled}
      > */}
      <Header navigation={navigation} />

      <Center flex={1} bgColor="#FDF9EA">
        <Container py={10}>
          <HStack space={2}>
            <Heading size="md" p={2}>
              Title
            </Heading>
            <Heading size="md" p={2}>
              初心者が作る！HTML入門
            </Heading>
          </HStack>

          <HStack height="100%">
            <Stack>
              <Box
                bgColor="white"
                width="300"
                height="500"
                padding={4}
                borderWidth={"2xl"}
                zIndex={100}
                _text={{
                  fontSize: "md",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                <RenderHtml
                  tagsStyles={{
                    p: { color: "#787878" },
                    div: { color: "#787878" },
                  }}
                  contentWidth={width}
                  source={source}
                />
                {/* 画面上に出現する付箋 */}
                {/* TODO: textAreaが変化したら表示する */}
                {!onStick ? (
                  <Text>hoge</Text>
                ) : (
                  <Box
                    shadow="2"
                    alignSelf="center"
                    _text={{
                      fontSize: "md",
                      fontWeight: "medium",
                      color: "warmGray.50",
                      letterSpacing: "lg",
                    }}
                    margin="-100"
                    width="100"
                    height="100"
                    zIndex="1000"
                    bg={["blue.400"]}
                  >
                    <Box>{value}</Box>
                  </Box>
                )}
              </Box>
            </Stack>
            {onStickList === false ? (
              <Text>{onStick}aaaaaa</Text>
            ) : (
              <Stack>
                {/* 付箋リスト */}
                {/* TODO: Boxをリストにする */}
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Box
                    bgColor="white"
                    padding={2}
                    zIndex={1000}
                    shadow="2"
                    width="100"
                    height="50"
                    bg={["blue.400"]}
                    _text={{
                      fontSize: "md",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  ></Box>
                </TouchableOpacity>
                <Modal
                  isOpen={modalVisible}
                  onClose={() => closeEvent()}
                  avoidKeyboard
                >
                  <Text>付箋の追加日:11/8</Text>
                  <Box
                    bgColor="white"
                    padding={2}
                    zIndex={1000}
                    shadow="2"
                    width="100"
                    height="100"
                    bg={["blue.400"]}
                    _text={{
                      fontSize: "md",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {value}
                  </Box>
                </Modal>
              </Stack>
            )}
          </HStack>
        </Container>
      </Center>
      {/* 付箋追加 */}
      <VStack space={8} margin={2}>
        {
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Tap me!"
            onPress={() => {
              seteditModalVisible(!editModalVisible);
            }}
          >
            <Image
              alt=""
              source={require("/Users/denham/Documents/sticky-note-knowledge/client/src/asset/btn_fusen.png")}
              size="sm"
            />
          </TouchableOpacity>
        }
        <Modal
          isOpen={editModalVisible}
          onClose={() => closeEditEvent()}
          avoidKeyboard
        >
          <Box
            bgColor="white"
            padding={2}
            zIndex={1000}
            shadow="2"
            width="100"
            height="100"
            bg={["blue.400"]}
            _text={{
              fontSize: "md",
              fontWeight: "bold",
              color: "white",
            }}
          >
            <TextInput
              style={{
                height: "100%",
                width: "100%",
                borderWidth: 0,
              }}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              // onEndEditing={() => setOnStick(true)}
            />
          </Box>
        </Modal>
      </VStack>
    </>
  );
};

export default BookView;
