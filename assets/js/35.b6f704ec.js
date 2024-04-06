(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{433:function(i,a,e){"use strict";e.r(a);var l=e(2),v=Object(l.a)({},(function(){var i=this,a=i._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[a("h1",{attrs:{id:"bfc-ifc-gfc-ffc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc-ifc-gfc-ffc"}},[i._v("#")]),i._v(" BFC,IFC,GFC,FFC")]),i._v(" "),a("h2",{attrs:{id:"box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#box"}},[i._v("#")]),i._v(" BOX")]),i._v(" "),a("ul",[a("li",[a("code",[i._v("block-level BOX")]),i._v(": 当元素的CSS属性display为block， list-item或table时，它是块级元素"),a("code",[i._v("block-level")]),i._v("。块级元素视觉上呈为块，竖直排列。每个块级元素至少生成一个块级盒"),a("code",[i._v("block-level Box")]),i._v("参与BFC,称为主要块级盒"),a("code",[i._v("principal block-level box")]),i._v("。一些元素，比如"),a("code",[i._v("li")]),i._v("，生成额外的盒来放置项目符号，不过多数元素只生成一个主要块级盒")]),i._v(" "),a("li",[a("code",[i._v("lnline-level BOX")]),i._v(": 当元素的 CSS 属性 display 的计算值为 inline, inline-block 或 inline-table 时，称它为行内级元素。视觉上它将内容与其它行内级元素排列为多行。典型的如段落内容，有文本或图片，都是行内级元素。行内级元素生成行内级盒(inline-level boxes)，参与行内格式化上下文 IFC 。")]),i._v(" "),a("li",[a("code",[i._v("flex container")]),i._v(": 当元素的 CSS 属性 display 的计算值为 flex 或 inline-flex ，称它为弹性容器。display:flex这个值会导致一个元素生成一个块级（block-level）弹性容器框。display:inline-flex这个值会导致一个元素生成一个行内级（inline-level）弹性容器框。")]),i._v(" "),a("li",[a("code",[i._v("grid container")]),i._v(": 当元素的 CSS 属性 display 的计算值为 grid 或 inline-grid，称它为栅格容器")])]),i._v(" "),a("h2",{attrs:{id:"块容器盒block-container-box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块容器盒block-container-box"}},[i._v("#")]),i._v(" 块容器盒"),a("code",[i._v("block container BOX")])]),i._v(" "),a("p",[i._v("只包含其他块级盒，或生成一个行内格式化上下文"),a("code",[i._v("IFC")]),i._v(",只包含行内盒的叫做块容器盒子。也就是说，块容器要么只包含行内盒子，要么只包含块级盒")]),i._v(" "),a("ul",[a("li",[i._v("块级盒"),a("code",[i._v("block-level Box")]),i._v("是描述元素跟它的父元素或兄弟元素之间的表现")]),i._v(" "),a("li",[i._v("块容器盒"),a("code",[i._v("block container box")]),i._v("描述元素跟它的后代之间的影响")])]),i._v(" "),a("h2",{attrs:{id:"块盒block-boxes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块盒block-boxes"}},[i._v("#")]),i._v(" 块盒"),a("code",[i._v("Block Boxes")])]),i._v(" "),a("p",[i._v("同时是块容器的块级盒称为块盒")]),i._v(" "),a("h2",{attrs:{id:"行盒line-boxes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行盒line-boxes"}},[i._v("#")]),i._v(" 行盒"),a("code",[i._v("Line Boxes")])]),i._v(" "),a("p",[i._v("行盒由行内格式化上下文产生的盒，用于表示一行。在块盒里面，行盒从块盒一边排版到另一边。 当有浮动时, 行盒从左浮动的最右边排版到右浮动的最左边。")]),i._v(" "),a("h2",{attrs:{id:"bfc块级格式化上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc块级格式化上下文"}},[i._v("#")]),i._v(" BFC块级格式化上下文")]),i._v(" "),a("p",[i._v("BFC它决定了元素如何对其内容进行定位，以及与其它元素的关系和相互作用，当涉及到可视化布局时，Block Formatting Context提供了一个环境，HTML在这个环境中按照一定的规则进行布局。")]),i._v(" "),a("h3",{attrs:{id:"如何触发bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何触发bfc"}},[i._v("#")]),i._v(" 如何触发BFC?")]),i._v(" "),a("ul",[a("li",[i._v("根元素或其他包含它的元素")]),i._v(" "),a("li",[i._v("浮动float: left/right,inherit")]),i._v(" "),a("li",[i._v("绝对定位元素position: absolute/flexd")]),i._v(" "),a("li",[i._v("行内块 display: inline-block")]),i._v(" "),a("li",[i._v("表格单元格 display： table-cell")]),i._v(" "),a("li",[i._v("表格标题 display: table-caption")]),i._v(" "),a("li",[i._v("溢出元素 overflow: hidden/scroll/auto/inherit")]),i._v(" "),a("li",[i._v("弹性盒子 display: flex/inline-flex")])]),i._v(" "),a("h3",{attrs:{id:"bfc布局规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc布局规则"}},[i._v("#")]),i._v(" BFC布局规则")]),i._v(" "),a("ul",[a("li",[i._v("内部的BOX会在垂直方向，一个接一个放置")]),i._v(" "),a("li",[i._v("Box垂直方向的距离由margin决定。同一个BFC的两个相邻BOX的margin会发生重叠")]),i._v(" "),a("li",[i._v("每个元素的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。")]),i._v(" "),a("li",[i._v("BFC的区域不会与float box重叠。")]),i._v(" "),a("li",[i._v("BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。")]),i._v(" "),a("li",[i._v("计算BFC的高度时，浮动元素也参与计算")])]),i._v(" "),a("h3",{attrs:{id:"bfc应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc应用场景"}},[i._v("#")]),i._v(" BFC应用场景")]),i._v(" "),a("ul",[a("li",[i._v("解决块级元素垂直方向margin重叠")]),i._v(" "),a("li",[i._v("解决高度塌陷问题")]),i._v(" "),a("li",[i._v("清除浮动")])]),i._v(" "),a("h2",{attrs:{id:"ifc-行内级格式化上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ifc-行内级格式化上下文"}},[i._v("#")]),i._v(" IFC 行内级格式化上下文")]),i._v(" "),a("h3",{attrs:{id:"如何触发ifc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何触发ifc"}},[i._v("#")]),i._v(" 如何触发IFC？")]),i._v(" "),a("p",[i._v("块级元素中仅包含内联级别元素")]),i._v(" "),a("p",[i._v("形成条件非常简单，需要注意的是当IFC中有块级元素插入时，会产生两个匿名块将父元素分割开来，产生两个IFC。")]),i._v(" "),a("h3",{attrs:{id:"ifc布局规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ifc布局规则"}},[i._v("#")]),i._v(" IFC布局规则")]),i._v(" "),a("ul",[a("li",[i._v("在一个IFC内，子元素是水平方向横向排列的，并且垂直方向起点为元素顶部。")]),i._v(" "),a("li",[i._v("子元素只会计算横向样式空间，【padding、border、margin】，垂直方向样式空间不会被计算，【padding、border、margin】。")]),i._v(" "),a("li",[i._v("在垂直方向上，子元素会以不同形式来对齐（vertical-align）")]),i._v(" "),a("li",[i._v("能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）。行框的宽度是由包含块（containing box）和与其中的浮动来决定。")]),i._v(" "),a("li",[i._v("IFC中的line box一般左右边贴紧其包含块，但float元素会优先排列。")]),i._v(" "),a("li",[i._v("IFC中的line box高度由 CSS 行高计算规则来确定，同个IFC下的多个line box高度可能会不同")]),i._v(" "),a("li",[i._v("当 inline boxes的总宽度少于包含它们的line box时，其水平渲染规则由 text-align 属性值来决定。")]),i._v(" "),a("li",[i._v("当一个inline box超过父元素的宽度时，它会被分割成多个boxes，这些boxes分布在多个line box中。如果子元素未设置强制换行的情况下，inline box将不可被分割，将会溢出父元素。")])]),i._v(" "),a("h3",{attrs:{id:"ifc应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ifc应用场景"}},[i._v("#")]),i._v(" IFC应用场景")]),i._v(" "),a("ul",[a("li",[i._v("元素水平居中 当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。")]),i._v(" "),a("li",[i._v("多行文本水平垂直居中创建一个IFC，然后设置其vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。")])]),i._v(" "),a("h2",{attrs:{id:"gfc-栅格格式化上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gfc-栅格格式化上下文"}},[i._v("#")]),i._v(" GFC 栅格格式化上下文")]),i._v(" "),a("h3",{attrs:{id:"如何触发gfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何触发gfc"}},[i._v("#")]),i._v(" 如何触发GFC")]),i._v(" "),a("p",[i._v("当为一个元素设置display值为grid或者inline-grid的时候，此元素将会获得一个独立的渲染区域")]),i._v(" "),a("h3",{attrs:{id:"gfc布局规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gfc布局规则"}},[i._v("#")]),i._v(" GFC布局规则")]),i._v(" "),a("p",[i._v("通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间（具体可以在MDN上查看）")]),i._v(" "),a("h3",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[i._v("#")]),i._v(" 应用场景")]),i._v(" "),a("ul",[a("li",[i._v("任意魔方布局")])]),i._v(" "),a("h2",{attrs:{id:"ffc-弹性格式化上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ffc-弹性格式化上下文"}},[i._v("#")]),i._v(" FFC 弹性格式化上下文")]),i._v(" "),a("h3",{attrs:{id:"如何触发ffc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何触发ffc"}},[i._v("#")]),i._v(" 如何触发FFC")]),i._v(" "),a("p",[i._v("当 display 的值为 flex 或 inline-flex 时，将生成弹性容器（Flex Containers）, 一个弹性容器为其内容建立了一个新的弹性格式化上下文环境（FFC）")]),i._v(" "),a("h3",{attrs:{id:"ffc布局规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ffc布局规则"}},[i._v("#")]),i._v(" FFC布局规则")]),i._v(" "),a("p",[i._v("设置为 flex 的容器被渲染为一个块级元素\n设置为 inline-flex 的容器被渲染为一个行内元素\n弹性容器中的每一个子元素都是一个弹性项目。弹性项目可以是任意数量的。弹性容器外和弹性项目内的一切元素都不受影响。简单地说，Flexbox 定义了弹性容器内弹性项目该如何布局")]),i._v(" "),a("h3",{attrs:{id:"ffc应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ffc应用场景"}},[i._v("#")]),i._v(" FFC应用场景")]),i._v(" "),a("p",[i._v("这里只介绍它对于其它布局所相对来说更方便的特点，其实flex布局现在是非常普遍的，很多前端人员都喜欢用flex来写页面布局，操作方便且灵活，兼容性好。")]),i._v(" "),a("ul",[a("li",[i._v("自动撑开剩余高度/宽度")])]),i._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[i._v("#")]),i._v(" 总结")]),i._v(" "),a("p",[i._v("一般来说，FFC能做的事情，通过GFC都能搞定，反过来GFC能做的事通过FFC也能实现。\n通常弹性布局使用FFC，二维网格布局使用GFC，所有的FFC与GFC也是一个BFC，在遵循自己的规范的情况下，向下兼容BFC规范。\n现在所有的FC都介绍完了，了解清楚的去奖励自己一顿KFC吧😄～")])])}),[],!1,null,null,null);a.default=v.exports}}]);