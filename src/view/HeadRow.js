import Row from './Row'

export default function HeadRow(props) {
	return Row({...props, isHead:true})
}
