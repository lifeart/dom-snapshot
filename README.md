# dom-snapshot
JS methods to serialize HTML page to JSON and restore it

# usage
```javascript
	const snapshot = new DomSnapshot();
	snapshot.loaded().then(()=>{
		const id = snapshot.saveSnapshot().then((id) => {
			snapshot.showSnapshot(id)
		});
	});
```

# methods
`saveSnapshot()` - save current web-page as snapshot to firebase / _return snapshot id_

`showSnapshot(id)` - restore page snapshot by id from firebase / _return snapshot object_

`clearState()` - clear collected web-page state

`setState(state)` - set page state from state object

`getState()` - get current state object / _return state object_

`copyWorldTo(items)` - copy current page state to items array

`restoreWorldFrom(items)` - restore page from items array

`destroyWorld()` - remove all document.body childrens

`getStyleForNode(element)` - _return computed style from passed node_

