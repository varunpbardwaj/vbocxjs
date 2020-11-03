<p align="center">
    <img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/new_logo.png" width="140px" alt="">
</p>

<h3 align="center" style="font-weight: 600; font-size: 20px;">
vbocxjs
</h3>
<br />


<div align="center">

<img src="https://img.shields.io/npm/v/vbocxjs?style=flat-square"> <img src="https://img.shields.io/npm/dm/vbocxjs?style=flat-square"> <img src="https://img.shields.io/npm/l/vbocxjs?style=flat-square">

</div>
<br />
<br />

Create banners, badges, toasts and more with `speed`.

vbocxjs is a ReactJS library for creating banners, badges, toasts and more with zero dependencies. It uses inline styling by reducing the amount of look up time for the CSS engine.
<br />
## Getting Started!

Install vbocxjs

```
$ npm install vbocxjs
or
$ yarn add vbocxjs
```

<br />

###  Badges

 <div style="margin-bottom: 20px"></div>

##### Default Badge

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/default_badge.png" width="100px" style="margin-bottom: 20px" alt="">

```
import { Badge } from "vbocxjs";

<Badge
    type="solid"
    variant="default"
    message="solid"
/>

<Badge
    type="outline"
    variant="default"
    message="outline"
/>
```

 <div style="margin-bottom: 30px"></div>

##### Info Badge

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/info_badge.png" width="100px" style="margin-bottom: 20px" alt="">

```
import { Badge } from "vbocxjs";

<Badge
    type="solid"
    variant="info"
    message="solid"
/>

<Badge
    type="outline"
    variant="info"
    message="outline"
/>
```

 <div style="margin-bottom: 30px"></div>

##### Success Badge

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/success_badge.png" width="100px" style="margin-bottom: 20px" alt="">

```
import { Badge } from "vbocxjs";

<Badge
    type="solid"
    variant="success"
    message="solid"
/>

<Badge
    type="outline"
    variant="success"
    message="outline"
/>
```

 <div style="margin-bottom: 30px"></div>

##### Warning Badge

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/warning_badge.png" width="100px" style="margin-bottom: 20px" alt="">

```
import { Badge } from "vbocxjs";

<Badge
    type="solid"
    variant="warning"
    message="solid"
/>

<Badge
    type="outline"
    variant="warning"
    message="outline"
/>
```

 <div style="margin-bottom: 30px"></div>

##### Error Badge

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/error_badge.png" width="100px" style="margin-bottom: 20px" alt="">

```
import { Badge } from "vbocxjs";

<Badge
    type="solid"
    variant="error"
    message="solid"
/>

<Badge
    type="outline"
    variant="error"
    message="outline"
/>
```
 <div style="margin-bottom: 30px"></div>

#####  Custom Badge

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/custom_badge.png" width="100px" style="margin-bottom: 20px" alt="">


```
import { CustomBadge, Colors } from "vbocxjs";

<CustomBadge
    type="solid"
    message="solid"
    backgroundColor={Colors["purple-400"]}
    color="#FFFFFF"
/>

<CustomBadge
    type="outline"
    message="outline"
    color={Colors["orange-400"]}
/>
```

 <div style="margin-bottom: 30px"></div>

### Props

##### Badges Props

 <div style="margin-bottom: 20px"></div>

|Name|Type|Mandatory|Description|
|----|----|---------|-----------|
|type|`solid`, `outline`|yes|Display type of the badge.|
|variant|`default`, `info`, `success`, `warning`, `error`|yes|The variant of the badge style to use.|
|message|`string`|yes|Message to be displayed.|

 <div style="margin-bottom: 30px"></div>

##### Custom Badge Props

 <div style="margin-bottom: 20px"></div>

|Name|Type|Mandatory|Description|
|----|----|---------|-----------|
|type|`solid`, `outline`|yes|Display type of the badge.|
|message|`string`|yes|Message to be displayed.|
|backgroundColor|`string`, `Colors[value]`|yes(solid), no(outline)|Background color of badge.|
|color|`string`, `Colors[value]`|yes|Font Color of Badge.|

<br/>

### Banners

 <div style="margin-bottom: 30px"></div>

##### Default Banner

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/default_banner.png" width="600px" style="margin-bottom: 20px" alt="">

```
import { Banner } from "vbocxjs";

<Banner
 variant="default"
  message="This is a Default Banner."
/>
```

 <div style="margin-bottom: 30px"></div>

##### Info Banner

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/info_banner.png" width="600px" style="margin-bottom: 20px" alt="">

```
import { Banner } from "vbocxjs";

<Banner
 variant="info"
 message="This is an Info Banner."
/>
```

 <div style="margin-bottom: 30px"></div>

##### Success Banner

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/success_banner.png" width="600px" style="margin-bottom: 20px" alt="">

```
import { Banner } from "vbocxjs";

<Banner
 variant="success"
 message="This is a Success Banner."
/>
```

 <div style="margin-bottom: 30px"></div>

##### Warning Banner

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/warning_banner.png" width="600px" style="margin-bottom: 20px" alt="">

```
import { Banner } from "vbocxjs";

<Banner
 variant="warning"
 message="This is a Warning Banner."
/>
```

 <div style="margin-bottom: 30px"></div>

##### Error Banner

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/error_banner.png" width="600px" style="margin-bottom: 20px" alt="">

```
import { Banner } from "vbocxjs";

<Banner
 variant="error"
 message="This is an Error Banner."
/>
```

 <div style="margin-bottom: 30px"></div>

##### Custom Banner

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/custom_banner.png" width="600px" style="margin-bottom: 20px" alt="">

```
import { CustomBanner, Colors } from "vbocxjs";

<CustomBanner
 message="This is a Custom Banner."
 backgroundColor={Colors["pink-600"]}
 color="#FFFFFF"
 bannerIcon={<i className="fa fa-heart" aria-hidden="true"></i>}
 closeIcon={<i className="fa fa-times" aria-hidden="true"></i>}
/>
```
<br />

### Props

 <div style="margin-bottom: 30px"></div>

##### Banner Props

 <div style="margin-bottom: 20px"></div>

|Name|Type|Mandatory|Description|
|----|----|---------|-----------|
|variant|`default`, `info`, `success`, `warning`, `error`|yes|The variant of the banner style to use.|
|position|`top`, `middle`, `bottom`, `XX%`|no|Popup out position of the banner.|
|message|`string`|yes|Message to be displayed.|
|timer|`number`|no|Display time of banner in milliseconds.|
|animate|`fade-in-out`, `zoom-in-out`, `stretch-in-out`|no|Popup out animation of the banner.|

 <div style="margin-bottom: 30px"></div>

##### Custom Banner Props

 <div style="margin-bottom: 20px"></div>

|Name|Type|Mandatory|Description|
|----|----|---------|-----------|
|position|`top`, `middle`, `bottom`, `XX%`|no|Popup out position of the banner.|
|message|`string`|yes|Message to be displayed.|
|backgroundColor|`string`, `Colors[<value>]`|yes|Background Color of banner.|
|color|`string`, `Colors[<value>]`|yes|Text Color of banner.|
|bannerIcon|`JSX.Element`, `Font Awesome Icons`|no|Icon indicating banner type.|
|closeIcon|`JSX.Element`, `Font Awesome Icons`|no|Icon replacing default close icon.|
|timer|`number`|no|Display time of banner in milliseconds.|
|animate|`fade-in-out`, `zoom-in-out`, `stretch-in-out`|no|Popup out animation of the banner.|

<br />

### Progress

 <div style="margin-bottom: 30px"></div>

##### Donut

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/donut.png" width="542px" style="margin-bottom: 30px" alt="">

```
import { Donut, Colors } from "vbocxjs";

<Donut
    size={80}
    percent={69}
    theme={[Pink["pink-500"], "#000000", Gray["gray-50"]]}
/>

<Donut
    size={100}
    percent={32}
    theme={[Blue["blue-500"], "#000000", Gray["gray-50"]]}
    hidePercentText={true}
/>

<Donut
    size={120}
    percent={54}
    theme={[Green["green-500"], "#000000", Gray["gray-50"]]}
    curvedEdge={true}
/>

<Donut
    size={140}
    percent={80}
    gradient={["#12c2e9", "#c471ed", "", Gray["gray-50"]]}
    hidePercentText={true}
    curvedEdge={true}
/>

--------------------------------------------------------------------------

{/*
    theme={[
        Completed Background Color,
        Percentage Font Color,
        Remaining Background Color
    ]}
*/}
    
{/*
    gradient={[
        Gradient 1 Color,
        Gradient 2 Color,
        Percentage Font Color
        Remaining Background Color
    ]}
*/}
```

 <div style="margin-bottom: 30px"></div>

##### Kulfi

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/kulfi.png" width="542px" style="margin-bottom: 30px" alt="">

```
import { Kulfi, Colors } from "vbocxjs";

<Kulfi
    length={350}
    percent={32}
    theme={["#3DB4EA", "#FFFFFF", Gray["gray-100"]]}
    hidePercentText={true}
/>

<Kulfi
    length={600}
    percent={66}
    gradient={["#DE24B1", "#4C6ADD", "#FFFFFF", Gray["gray-100"]]}
/>

<Kulfi
    length={500}
    percent={88}
    theme={["#D04427", "#FFFFFF", Gray["gray-100"]]}
    curvedEdge={true}
/>

--------------------------------------------------------------------------

{/*
    theme={[
        Completed Background Color,
        Percentage Font Color,
        Remaining Background Color
    ]}
*/}
    
{/*
    gradient={[
        Gradient 1 Color,
        Gradient 2 Color,
        Percentage Font Color
        Remaining Background Color
    ]}
*/}
```

 <div style="margin-bottom: 30px"></div>

### Props

 <div style="margin-bottom: 20px"></div>

##### Donut Props

 <div style="margin-bottom: 20px"></div>

|Name|Type|Mandatory|Description|
|----|----|---------|-----------|
|size|`number`|yes|The size of donut..|
|percent|`number`|no|Progress Percentage..|
|theme|`array`|	yes(for flat background)|Theme of donut(explained in component declaration).|
|gradient|`array`|yes(for gradient background)|Gradient combination of donut(explained in component declaration).|
|hidePercentText|`boolean`|no|Show/Hide donut percentage.|
|curvedEdge|`boolean`|no|	Rounded Corners of donut.|

 <div style="margin-bottom: 30px"></div>

##### Kulfi Props

 <div style="margin-bottom: 20px"></div>

|Name|Type|Mandatory|Description|
|----|----|---------|-----------|
|length|`number`|yes|The length of Kulfi.|
|percent|`number`|no|Progress Percentage..|
|theme|`array`|	yes(for flat background)|Theme of Kulfi(explained in component declaration).|
|gradient|`array`|yes(for gradient background)|Gradient combination of Kulfi(explained in component declaration).|
|hidePercentText|`boolean`|no|Show/Hide Kulfi percentage..|
|curvedEdge|`boolean`|no|	Rounded Corners of Kulfi.|
<br />

###  Toasts

 <div style="margin-bottom: 30px"></div>

##### Default Toast

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/default_toast.png" width="210px" style="margin-bottom: 30px" alt="">

```
import { Toast } from "vbocxjs";

<Toast
 variant="default"
 message="This is a Default Toast."
/>
```

 <div style="margin-bottom: 30px"></div>

##### Info Toast

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/info_toast.png" width="210px" style="margin-bottom: 30px" alt="">

```
import { Toast } from "vbocxjs";

<Banner
 variant="info"
 message="This is an Info Banner."
/>
```

 <div style="margin-bottom: 30px"></div>

##### Success Toast

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/success_toast.png" width="210px" style="margin-bottom: 30px" alt="">

```
import { Toast } from "vbocxjs";

<Toast
 variant="success"
 message="This is a Success Toast."
/>
```

 <div style="margin-bottom: 30px"></div>

##### Warning Toast

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/warning_toast.png" width="210px" style="margin-bottom: 30px" alt="">

```
import { Toast } from "vbocxjs";

<Toast
 variant="warning"
 message="This is a Warning Toast."
/>
```

 <div style="margin-bottom: 30px"></div>

##### Error Toast

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/error_toast.png" width="210px" style="margin-bottom: 30px" alt="">

```
import { Toast } from "vbocxjs";

<Toast
 variant="error"
 message="This is an Error Toast."
/>
```

 <div style="margin-bottom: 30px"></div>

##### Custom Toast

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/custom_toast.png" width="210px" style="margin-bottom: 30px" alt="">

```
import { CustomToast, Colors } from "vbocxjs";

<CustomToast
 message="This is a Custom Toast."
 backgroundColor={Colors["pink-600"]}
 color="#FFFFFF"
 toastIcon={<i className="fa fa-heart" aria-hidden="true"></i>}
 closeIcon={<i className="fa fa-times" aria-hidden="true"></i>}
/>
```
<br />

### Props

 <div style="margin-bottom: 30px"></div>

##### Toast Props

 <div style="margin-bottom: 20px"></div>

|Name|Type|Mandatory|Description|
|----|----|---------|-----------|
|variant|`default`, `info`, `success`, `warning`, `error`|yes|The variant of the toast style to use.|
|position|`top`, `middle`, `bottom`, `XX%`|no|Popup out position of the Toast.|
|message|`string`|yes|Message to be displayed.|
|timer|`number`|no|Display time of Toast in milliseconds.|
|animate|`fade-in-out`, `zoom-in-out`, `stretch-in-out`|no|Popup out animation of the Toast.|

 <div style="margin-bottom: 30px"></div>

##### Custom Toast Props

 <div style="margin-bottom: 20px"></div>

|Name|Type|Mandatory|Description|
|----|----|---------|-----------|
|position|`top`, `middle`, `bottom`, `XX%`|no|Popup out position of the Toast.|
|message|`string`|yes|Message to be displayed.|
|backgroundColor|`string`, `Colors[<value>]`|yes|Background Color of Toast.|
|color|`string`, `Colors[<value>]`|yes|Text Color of Toast.|
|toastIcon|`JSX.Element`, `Font Awesome Icons`|no|Icon indicating Toast type.|
|closeIcon|`JSX.Element`, `Font Awesome Icons`|no|Icon replacing default close icon.|
|timer|`number`|no|Display time of Toast in milliseconds.|
|animate|`fade-in-out`, `zoom-in-out`, `stretch-in-out`|no|Popup out animation of the Toast.|
<br />

###  Colors

<img src="https://raw.githubusercontent.com/varunpbardwaj/vbocxjsdoc/master/src/assets/images/colors.png" width="740px" style="margin-bottom: 30px" alt="">

|Red|Pink|Purple|Blue|Green|Yellow|Orange|Gray|
|--|--|--|--|--|--|--|--|
|`red`|`pink`|`purple`|`blue`|`green`|`yellow`|`orange`|`gray`|
|`red-50`|`pink-50`|`purple-50`|`blue-50`|`green-50`|`yellow-50`|`orange-50`|`gray-50`|
|`red-100`|`pink-100`|`purple-100`|`blue-100`|`green-100`|`yellow-100`|`orange-100`|`gray-100`|
|`red-200`|`pink-200`|`purple-200`|`blue-200`|`green-200`|`yellow-200`|`orange-200`|`gray-200`|
|`red-300`|`pink-300`|`purple-300`|`blue-300`|`green-300`|`yellow-300`|`orange-300`|`gray-300`|
|`red-400`|`pink-400`|`purple-400`|`blue-400`|`green-400`|`yellow-400`|`orange-400`|`gray-400`|
|`red-500`|`pink-500`|`purple-500`|`blue-500`|`green-500`|`yellow-500`|`orange-500`|`gray-500`|
|`red-600`|`pink-600`|`purple-600`|`blue-600`|`green-600`|`yellow-600`|`orange-600`|`gray-600`|
|`red-700`|`pink-700`|`purple-700`|`blue-700`|`green-700`|`yellow-700`|`orange-700`|`gray-700`|
|`red-800`|`pink-800`|`purple-800`|`blue-800`|`green-800`|`yellow-800`|`orange-800`|`gray-800`|
|`red-900`|`pink-900`|`purple-900`|`blue-900`|`green-900`|`yellow-900`|`orange-900`|`gray-900`|

<br />
<br />

> Note: vbocxjs comes with Font Awesome v4.7 out of the box.

<br />
<br />
Made with ❤️   in 🇮🇳
