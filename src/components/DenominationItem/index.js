// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, updateBalance} = props
  const {value} = denominationItem

  const onDecrease = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button className="button" type="button" onClick={onDecrease}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
