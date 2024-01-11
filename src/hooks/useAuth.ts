import { TypeRootState } from './../store/store'
import { useSelector } from 'react-redux'

export const useAuth = () => {
	return useSelector((state: TypeRootState) => state.user)
}
