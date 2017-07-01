# browser-utils
> A browser utilities package


### Installation
> npm install browser-utils

### Usage

```javascript
import BrowserUtils from 'browser-utils';
...
...
...

if (BrowserUtils.isBrowser())
{
      BrowserUtils.getWindow().addEventListener('scroll', this._onScroll);
}
```