# DomSnapshot
JS methods to serialize rendered HTML page to JSON and restore it.
JS library for browser-render HTML page serialization (with firebase support)
JS * deserialization supported.

# Use cases?
- Grab all CSS from page!
- Calc page diffs between renders!

# Usage
```html
  <script src="https://gitcdn.xyz/cdn/lifeart/dom-snapshot/master/index.js"></script>
```
```javascript
	const snapshot = new DomSnapshot();
	snapshot.loaded().then(()=>{
		const id = snapshot.saveSnapshot();
		console.log('snapshotId', id);
		setTimeout(() => {
			console.log('restoring current snapshot');
			snapshot.showSnapshot(id)
		}, 3000);
	});
```

# Methods
`saveSnapshot()` - save current web-page as snapshot to firebase / _return snapshot id_

`showSnapshot(id)` - restore page snapshot by id from firebase / _return snapshot object_


# Viwer
An SPA for snapshots preview

[dom-snapshot-ui](https://github.com/lifeart/dom-snapshot-ui)
