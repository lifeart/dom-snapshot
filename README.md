# DomSnapshot
JS methods to serialize rendered HTML page to JSON and restore it

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

`clearState()` - clear collected web-page state

`setState(state)` - set page state from state object

`getState()` - get current state object / _return state object_

`copyWorldTo(items)` - copy current page state to items array

`restoreWorldFrom(items)` - restore page from items array

`destroyWorld()` - remove all document.body childrens

`getStyleForNode(element)` - _return computed style from passed node_

`loaded` - _return promise with loaded firebase_

# Viwer
An SPA for snapshots preview

[dom-snapshot-ui](https://github.com/lifeart/dom-snapshot-ui)
