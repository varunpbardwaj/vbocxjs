
  
# vbocxjs

Create banners and toasts with `speed`.

vbocxjs is a ReactJS library for creating banners and toasts with zero dependencies. It uses inline styling by reducing the amount of look up time for the CSS engine.

## Getting Started!

Install vbocxjs

```
$ npm install vbocxjs
		or
$ yarn add vbocxjs
```

## Banners

##### Default Banner
```
import { Banner } from "vbocxjs";

<Banner
 variant="default"
  message="This is a Default Banner."
/>
```

##### Info Banner
```
import { Banner } from "vbocxjs";

<Banner
 variant="info"
 message="This is an Info Banner."
/>
```

##### Success Banner
```
import { Banner } from "vbocxjs";

<Banner
 variant="success"
 message="This is a Success Banner."
/>
```

##### Warning Banner
```
import { Banner } from "vbocxjs";

<Banner
 variant="warning"
 message="This is a Warning Banner."
/>
```
##### Error Banner
```
import { Banner } from "vbocxjs";

<Banner
 variant="error"
 message="This is an Error Banner."
/>
```
##### Custom Banner
```
import { CustomBanner } from "vbocxjs";

<CustomBanner
 message="This is a Custom Banner."
 backgroundColor="#d527ad"
 color="#FFFFFF"
 bannerIcon={<i className="fa fa-heart" aria-hidden="true"></i>}
 closeIcon={<i className="fa fa-times" aria-hidden="true"></i>}
/>
```
<br />

## Props

### Banner Props

|Name|Type|Mandatory|Description|
|----|----|---------|-----------|
|variant|`default`, `info`, `success`, `warning`, `error`|yes|The variant of the alert style to use.|
|position|`top`, `middle`, `bottom`, `XX%`|no|Popup out position of the banner.|
|message|`string`|yes|Message to be displayed.|
|timer|`number`|no|Display time of banner in milliseconds.|
|animate|`fade-in-out`, `zoom-in-out`, `stretch-in-out`|no|Popup out animation of the banner.|

### Custom Banner Props

|Name|Type|Mandatory|Description|
|----|----|---------|-----------|
|position|`top`, `middle`, `bottom`, `XX%`|no|Popup out position of the banner.|
|message|`string`|yes|Message to be displayed.|
|backgroundColor|`string`|yes|Background Color of banner.|
|color|`string`|yes|Text Color of banner.|
|bannerIcon|`JSX.Element`, `Font Awesome Icons`|no|Icon indicating banner type.|
|closeIcon|`JSX.Element`, `Font Awesome Icons`|no|Icon replacing default close icon.|
|timer|`number`|no|Display time of banner in milliseconds.|
|animate|`fade-in-out`, `zoom-in-out`, `stretch-in-out`|no|Popup out animation of the banner.|
<br />

##  Toasts

##### Default Toast
```
import { Toast } from "vbocxjs";

<Toast
 variant="default"
 message="This is a Default Toast."
/>
```

##### Info Toast
```
import { Toast } from "vbocxjs";

<Banner
 variant="info"
 message="This is an Info Banner."
/>
```

##### Success Banner
```
import { Banner } from "vbocxjs";

<Toast
 variant="success"
 message="This is a Success Toast."
/>
```

##### Warning Toast
```
import { Toast } from "vbocxjs";

<Toast
 variant="warning"
 message="This is a Warning Toast."
/>
```
##### Error Toast
```
import { Toast } from "vbocxjs";

<Toast
 variant="error"
 message="This is an Error Toast."
/>
```
##### Custom Toast
```
import { CustomToast } from "vbocxjs";

<CustomToast
 message="This is a Custom Toast."
 backgroundColor="#d527ad"
 color="#FFFFFF"
 bannerIcon={<i className="fa fa-heart" aria-hidden="true"></i>}
 closeIcon={<i className="fa fa-times" aria-hidden="true"></i>}
/>
```
<br />

## Props

### Toast Props

|Name|Type|Mandatory|Description|
|----|----|---------|-----------|
|variant|`default`, `info`, `success`, `warning`, `error`|yes|The variant of the alert style to use.|
|position|`top`, `middle`, `bottom`, `XX%`|no|Popup out position of the Toast.|
|message|`string`|yes|Message to be displayed.|
|timer|`number`|no|Display time of Toast in milliseconds.|
|animate|`fade-in-out`, `zoom-in-out`, `stretch-in-out`|no|Popup out animation of the Toast.|

### Custom Toast Props

|Name|Type|Mandatory|Description|
|----|----|---------|-----------|
|position|`top`, `middle`, `bottom`, `XX%`|no|Popup out position of the Toast.|
|message|`string`|yes|Message to be displayed.|
|backgroundColor|`string`|yes|Background Color of Toast.|
|color|`string`|yes|Text Color of Toast.|
|bannerIcon|`JSX.Element`, `Font Awesome Icons`|no|Icon indicating Toast type.|
|closeIcon|`JSX.Element`, `Font Awesome Icons`|no|Icon replacing default close icon.|
|timer|`number`|no|Display time of Toast in milliseconds.|
|animate|`fade-in-out`, `zoom-in-out`, `stretch-in-out`|no|Popup out animation of the Toast.|
<br />
<br />
<br />

> Note: vbocxjs comes with Font Awesome v4.7 out of the box.

<br />
<br />
Made with ❤️ in 🇮🇳