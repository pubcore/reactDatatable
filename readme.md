[![Build Status](https://travis-ci.org/pubcore/reactDatatable.svg?branch=master)](https://travis-ci.org/pubcore/reactDatatable)

## Stateless react components to render HTML tables

### Installation

	npm install --save @pubcore/react-datatable

### Examples

	import Datatable from '@pubcore/react-datatable'

	const rows = [
		{a:'11', b:'12'},
		{a:'21', b:'22'}
	],
		cols = ['a', 'b']

	//table without head row
	<Datatable {...{rows}}/>

	//table with head row, columns order based on "cols"
	<Datatable {...{rows, cols}}/>

## customize table view

	//some more components to import
	import Datatable, {Head, HeadRow, Cell, Body, Row} from '@pubcore/react-datatable'

	//table with individual header row(s)
	<Datatable {...{rows, cols}}>
	    <Head>
	        <HeadRow>{({col, isHead, key}) =>
	            <Cell {...{key, isHead}} >
	                {col} <button onClick={e => alert('info')} type="button">i</button>
	            </Cell>
	        }</HeadRow>
	        <HeadRow {...{cols:cols.map((col, i) => i)}}/>
	    </Head>
	</Datatable>

	//change view of column's data
	<Datatable {...{rows, cols}} >
	    <Body>
	        <Row>{({col, row, index, key}) => ({'b' :
	            <Cell {...{data:(new Date(row[col])).toLocaleDateString(), key}}/>
	            }[col] ||
	            <Cell {...{data:`# ${index}`, key}}/>
	        )}</Row>
	    </Body>
	</Datatable>
