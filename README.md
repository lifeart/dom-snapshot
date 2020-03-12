# DomSnapshot
JS methods to serialize rendered HTML page to JSON and restore it.
JS library for browser-render HTML page serialization (with firebase support)
JS * deserialization supported.

# Use cases?
- Grab all CSS from page!
- Calc page diffs between renders!

# Usage
```html
  <script src="https://gitcdn.xyz/cdn/lifeart/dom-snapshot/master/dist/index.js"></script>
  // or
  <script src="https://cdn.jsdelivr.net/gh/lifeart/dom-snapshot/dist/index.js"></script>
  // or use this gh repo

```

By default DomSnapshot configured to use demo firebase api to manage snapshots
```javascript
	const snapshot = new DomSnapshot();
	// waiting for firebase initialization
	snapshot.loaded().then(()=>{
	        // saving current DOM as snapshot
		const id = snapshot.saveSnapshot();
		console.log('snapshotId', id);
		setTimeout(() => {
			console.log('restoring current snapshot');
			snapshot.showSnapshot(id)
		}, 3000);
	});


```

"Offline" usage example (without firebase sync)

```javascript
	
	var selector  = '#readme > article > pre';

	var s1 = snapshoter.takeSnapshot(selector);

	document.querySelector(selector).style['fontSize'] = '20px';
	document.querySelector(selector).setAttribute('foo', 'bar');
	var s2 = snapshoter.takeSnapshot(selector);

	var diff = snapshoter.getSnapshotsDiff(s1, s2);

	console.log(diff);

	// capture node and send it to server
	snapshoter.saveSnapshot(Date.now(), snapshoter.createSnapshot('body'))	
```

# Methods
`saveSnapshot()` - save current web-page as snapshot to firebase / _return snapshot id_

`showSnapshot(id)` - restore page snapshot by id from firebase / _return snapshot object_


# Viwer
An SPA for snapshots preview

[dom-snapshot-ui](https://github.com/lifeart/dom-snapshot-ui)
