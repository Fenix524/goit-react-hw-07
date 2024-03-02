import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux/filters/filters.slice'
import css from './SearchBox.module.css'
import { getFilter } from '../../redux/filters/selectors'

const SearchBox = () => {
	const dispatch = useDispatch()
	const searchFilters = useSelector(getFilter)
	return (
		<div className={css.SearchBox}>
			<p className={css.text}>Find contacts by name</p>
			<input
				className={css.input}
				type='text'
				value={searchFilters}
				onChange={evt => {
					dispatch(setFilter(evt.target.value))
				}}
			/>
		</div>
	)
}

export default SearchBox
